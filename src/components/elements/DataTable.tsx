"use client";
import { useState } from "react";
import { patients } from "@/helpers/constants/patients";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('hospital_id');
  const itemsPerPage = 7;
  
  // Filter and sort patients
  const filteredPatients = patients.filter(patient => 
    patient.patient_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.hospital_id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const sortedPatients = [...filteredPatients].sort((a, b) => {
    if (sortField === 'hospital_id') {
      return a.hospital_id.localeCompare(b.hospital_id);
    }
    return 0; // Default case, no sorting
  });
  
  const totalItems = sortedPatients.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Recalculate current page if needed
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }
  
  // Calculate the current items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = sortedPatients.slice(startIndex, endIndex);

  // Handle page navigation
  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle sort field change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortField(e.target.value);
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const paginationItems = [];
    
    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <Button 
            key={i}
            onClick={() => goToPage(i)}
            className={`rounded-full w-6 h-6 text-xs p-0 mx-1 ${
              currentPage === i 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-black/60 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {i}
          </Button>
        );
      }
    } else {
      // Show limited pages with ellipsis
      // Always show first page
      paginationItems.push(
        <Button 
          key={1}
          onClick={() => goToPage(1)}
          className={`rounded-full w-8 h-8 p-0 mx-1 ${
            currentPage === 1 
              ? 'bg-primary text-white hover:bg-primary/90' 
              : 'bg-white text-black/60 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          1
        </Button>
      );

      // Calculate range to show around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if near start
      if (currentPage <= 3) {
        endPage = Math.min(5, totalPages - 1);
      }

      // Adjust if near end
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 2);
      }

      // Add ellipsis at start if needed
      if (startPage > 2) {
        paginationItems.push(
          <span key="ellipsis-start" className="px-2">...</span>
        );
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <Button 
            key={i}
            onClick={() => goToPage(i)}
            className={`rounded-full w-8 h-8 p-0 mx-1 ${
              currentPage === i 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-black/60 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {i}
          </Button>
        );
      }

      // Add ellipsis at end if needed
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <span key="ellipsis-end" className="px-2">...</span>
        );
      }

      // Always show last page
      if (totalPages > 1) {
        paginationItems.push(
          <Button 
            key={totalPages}
            onClick={() => goToPage(totalPages)}
            className={`rounded-full w-8 h-8 p-0 mx-1 ${
              currentPage === totalPages 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-black/60 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {totalPages}
          </Button>
        );
      }
    }
    
    return paginationItems;
  };

  return (
    <div className="py-4">
      {/* Sort and Search Controls */}
      <div className="flex justify-between items-center mb-4   rounded py-2">
        {/* Sort Dropdown */}
        <div className="flex items-center">
          <span className="text-xs text-black/60 mr-2">Sort by:</span>
          <div className="relative">
            <select
              value={sortField}
              onChange={handleSortChange}
              className="appearance-none bg-transparent  rounded-md py-2 px-3 pr-8 text-xs focus:outline-none  font-bold"
            >
              <option value="hospital_id">Hospital ID</option>
              <option value="patient_name">Patient Name</option>
              <option value="next_delivery_date">Delivery Date</option>
              <option value="status">Status</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by patient name, ID..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md py-2 pl-10 pr-3 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
          />
        </div>
      </div>

      <Table className="bg-white p-6">
        <TableHeader>
          <TableRow className="h-16"> 
            <TableHead className="px-12 text-xs font-bold text-black/60">Hospital ID</TableHead>
            <TableHead className="px-12 text-xs font-bold text-black/60">Patient Name</TableHead>
            <TableHead className="px-12 text-xs font-bold text-black/60">Phone Number</TableHead>
            <TableHead className="px-12 text-xs font-bold text-black/60">Next Delivery Date</TableHead>
            <TableHead className="px-12 text-xs font-bold text-black/60">Location</TableHead>
            <TableHead className="px-12 text-xs font-bold text-black/60">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((patient, index) => (
            <TableRow key={index} className="h-16">
              <TableCell className="px-12 text-xs">{patient.hospital_id}</TableCell>
              <TableCell className="px-12 text-xs">{patient.patient_name}</TableCell>
              <TableCell className="px-12 text-xs">{patient.phone_number}</TableCell>
              <TableCell className="px-12 text-xs">{patient.next_delivery_date}</TableCell>
              <TableCell className="px-12 text-xs">{patient.location}</TableCell>
              <TableCell className="px-12 ">
                <div className="text-xs flex gap-8 items-center">
                <div className={`px-4 py-[10px] text-center font-semibold text-xs w-28 ${
                    patient.status === 'Completed'
                    ? 'bg-success/20 text-success'
                    : patient.status === 'Assigned'
                    ? 'bg-primary/20 text-primary'
                    : patient.status === 'Due & Unpaid'
                    ? 'bg-danger/20 text-danger'
                    : 'bg-danger/20 text-warning'
                }`}>
                  {patient.status}
                </div>
                <Link href={`/patients/${patient.id}`} >
                    <Button className="hover:text-white text-xs px-6 font-semibold text-primary border-[0.5px] border-primary/60 bg-white shadow-none">View</Button>
                </Link>
               </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Pagination Controls */}
      <div className="flex justify-between items-center px-12 py-6 bg-white border-t border-gray-200">
        {/* Results count */}
        <div className="text-sm text-black/60">
          Showing {totalItems === 0 ? 0 : startIndex + 1} to {endIndex} of {totalItems} deliveries
        </div>
        
        {/* Pagination */}
        <div className="flex items-center">
          <button 
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-full px-4 py-1 mr-2 bg-white text-black/60 hover:bg-gray-100 border border-gray-200 disabled:opacity-50 text-xs"
          >
            Prev
          </button>
          
          {renderPaginationItems()}
          
          <button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-full px-4 py-1 text-xs ml-2 bg-white text-black/60 hover:bg-gray-100 border border-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}