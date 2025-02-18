import BreadCrumb from "@/components/bread-crumb";
import DataTable from "@/components/elements/DataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Dashboard(){
    const links = [{
        label: "Patients",
        url: "/patients"
    }]

    return (
        <main className="">
            <BreadCrumb 
                links={links}
            >
                <Button className="bg-primary text-white text-sm font-semibold py-4 px-6">
                    <Plus />
                    Add Patient
                </Button>
            </BreadCrumb>

            <section className="px-[8%]">
                <DataTable />
            </section>
        </main>
    )
}