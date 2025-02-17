"use client";

import BreadCrumb from "@/components/bread-crumb";
import DataTable from "@/components/elements/DataTable";
import SuccessAlert from "@/components/elements/SuccessAlert";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Separate component for handling search params
function SearchParamsHandler() {
  const searchParams = useSearchParams();
  const showSuccess = searchParams.get("success") === "true";

  return showSuccess ? <SuccessAlert /> : null;
}

export default function Patient() {
  const links = [
    {
      label: "Patients",
      url: "/patients",
    },
  ];

  return (
    <main className="relative">
      {/* Wrap Suspense around the component using useSearchParams */}
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>

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
