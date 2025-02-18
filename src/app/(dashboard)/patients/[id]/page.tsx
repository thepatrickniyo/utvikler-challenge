"use client"
import BreadCrumb from "@/components/bread-crumb"
import { Button } from "@/components/ui/button"
import { patients } from "@/helpers/constants/patients"
import { useParams } from "next/navigation"

export default function PatientData(){
    const links = [
        {
            label: "Patients",
            url: "/patients"
        },
        {
            label: "View Patient",
            url: "#"
        }
    ]
    // get param id
    const { id } = useParams()
    const patient = patients.find(patient => patient.id === id)
    return (
        <main>
             <BreadCrumb 
                links={links}
            >
                <section className="flex gap-4">
                 <section className="flex flex-col gap-1 text-xs">
                    <label className="text-right text-[11px]">Patient&apos;s next delivery date is</label>
                    <label className="text-[13px] text-right font-semibold text-black/50">
                        {patient?.next_delivery_date}, in 2 days
                    </label>
                 </section>
                <Button className="bg-primary text-white text-sm font-semibold py-4 px-6">
                    Assign Package to Patient
                </Button>
                </section>
            </BreadCrumb>
        </main>
    )
}