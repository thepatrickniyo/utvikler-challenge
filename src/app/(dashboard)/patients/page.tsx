"use client";
import BreadCrumb from "@/components/bread-crumb";
import DataTable from "@/components/elements/DataTable";
import SuccessAlert from "@/components/elements/SuccessAlert";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";



export default function Dashboard() {
  const searchParams = useSearchParams();
  const showSuccess = searchParams.get("success") === "true";

  const links = [{
    label: "Patients",
    url: "/patients"
  }];

  return (
    <main className="relative">
      {showSuccess && <SuccessAlert />}
      
      <BreadCrumb links={links}>
        <Button className="bg-primary text-white text-sm font-semibold py-4 px-6">
          <Plus />
          Add Patient
        </Button>
      </BreadCrumb>

      <section className="px-[8%]">
        <DataTable />
      </section>
    </main>
  );
}