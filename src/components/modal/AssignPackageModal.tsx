"use client"
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';


interface AssignPackageModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AssignPackageModal({ isOpen, setIsOpen }: AssignPackageModalProps) {
  // Close modal when clicking outside
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div>

      {/* Modal/Popover */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b px-12">
              <h2 className="text-lg font-semibold">Assign Package 5673AD</h2>
            </div>

            {/* Body */}
            <div className="p-4 border-b px-12">
              <p className="text-gray-700 text-xs">
                Are you sure you want to assign package <strong className='text-black font-semibold'>5673AD</strong> to <strong className='font-semibold text-black'>Oluwaseun Aregbesola</strong>?
              </p>
            </div>

            {/* Footer */}
            <div className="p-4 flex gap-3 space-x-4 px-12 items-center">
              <Button
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-primary text-xs font-bold hover:text-white bg-transparent border border-primary w-2/5 "
              >
                No, Go Back
              </Button>
              <Link href={`/patients?success=true`} className=' text-white w-3/5 '>
              <Button
                className="text-white text-xs font-semibold w-full"
              >
                Yes, Assign Package
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}