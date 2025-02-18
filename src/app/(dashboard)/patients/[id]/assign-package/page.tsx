"use client"
import BreadCrumb from "@/components/bread-crumb";
import { useParams } from "next/navigation";

export default function AssignPackage(){
    const { id } = useParams();
    const links= [
        { label: "Patients", url: "/patients" },
        { label: "View Patient", url: `/patients/${id}` },
        { label: "Assign Package to Patient", url: "#"}
      ]

    return (
        <main className="">
            <BreadCrumb 
                 links={links}
            />

            <section className="px-[8%]">
                <h1>Assign Package</h1>
            </section>
        </main>
    )
}