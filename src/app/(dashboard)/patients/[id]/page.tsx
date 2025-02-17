"use client";
import { useState } from "react";
import BreadCrumb from "@/components/bread-crumb";
import { Button } from "@/components/ui/button";
import { patients } from "@/helpers/constants/patients";
import { PenLine } from "lucide-react";
import Link from "next/link";

export default function PatientData() {
  const patient = patients[0];
  const [activeTab, setActiveTab] = useState("patientInfo");
  const [activeCategory, setActiveCategory] = useState(1);

  // Tabs navigation
  const navigationLinks = [
    { title: "Patient Information", key: "patientInfo" },
    { title: "Delivery Information", key: "deliveryInfo" },
  ];

  return (
    <main>
      <BreadCrumb
        links={[
          { label: "Patients", url: "/patients" },
          { label: "View Patient", url: "#" },
        ]}
      >
       <section className="flex flex-col sm:flex-row gap-4 sm:items-center">
        <section className="flex flex-col gap-1 text-xs text-right sm:text-left">
          <label className="text-[11px]">
            Patient&apos;s next delivery date is
          </label>
          <label className="text-[13px] font-semibold text-black/50">
            {patient?.next_delivery_date}, in 2 days
          </label>
        </section>
        
        <Link href={`/patients/${patient?.id}/assign-package`} className="sm:ml-4">
          <Button className="bg-primary text-white text-sm font-semibold py-4 px-6 w-full sm:w-auto">
            Assign Package to Patient
          </Button>
        </Link>
      </section>
      </BreadCrumb>

      <section className="mt-6 px-4 md:px-[8%] py-4 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-x-8">
      {/* Sidebar Options */}
      <div className="w-full md:w-[18%]">
        <ul className="bg-white text-sm flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
          {["Patient", "Rider's Profile", "Delivery History"].map(
            (option, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`cursor-pointer px-4 md:px-10 py-3 md:py-4 text-gray-500 hover:bg-primary hover:bg-opacity-10 hover:border-primary hover:text-primary whitespace-nowrap flex-shrink-0 md:flex-shrink ${
                  activeCategory === index
                    ? "bg-primary bg-opacity-10 border-b-2 md:border-b-0 md:border-r-4 border-primary text-primary"
                    : ""
                }`}
              >
                {option}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Content Section */}
      <div className="bg-white flex flex-grow items-start w-full">
        <section className="flex flex-col w-full">
          <div className="border-b flex flex-col md:flex-row items-start md:items-center gap-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5  py-3 md:py-4 px-4 md:px-[3rem] w-full md:w-[400px]">
              <h1>Payment Status</h1>
              <span className="bg-green-500 bg-opacity-10 px-3 md:px-6 py-1 md:py-2 text-green-500 font-semibold text-sm">
                Paid
              </span>
            </div>
            
            {/* Tab Navigation */}
            <ul className="flex flex-row overflow-x-auto w-full md:w-auto gap-4 md:gap-10 px-4 md:mx-[5rem] mt-4 md:mt-0 border-b md:border-none">
              {navigationLinks.map(({ title, key }) => (
                <li key={key} className="cursor-pointer relative flex-shrink-0">
                  <button
                    onClick={() => setActiveTab(key)}
                    className={`py-2 md:py-6 text-sm transition-all duration-300 whitespace-nowrap ${
                      activeTab === key
                        ? "text-primary font-semibold border-b-[3px] border-primary"
                        : "text-gray-500"
                    }`}
                  >
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="mt-4 md:mt-8 w-full">
            {activeTab === "patientInfo" && (
              <section className="">
                <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
                  <div className="flex flex-col items-start text-sm py-3 md:py-4 px-4 md:px-[3rem] w-full md:w-[400px]">
                    <h1 className="font-semibold text-lg">
                      Patient&apos;s Information
                    </h1>
                    <p className="text-gray-400 text-sm">
                      Personal Information about Patient
                    </p>
                    <button className="flex flex-row gap-2 text-primary border border-primary px-4 md:px-6 py-2 mt-4 text-sm">
                      <PenLine size={18} />
                      <span className="whitespace-nowrap">Edit Patient&apos;s Information</span>
                    </button>
                  </div>
                  {/* patient inputs */}
                  <form className="flex flex-col flex-grow gap-4 py-4 md:py-6 px-4 md:mx-[5rem] w-full">
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Hospital ID
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="2AAB456789"
                        className="bg-transparent text-sm w-full py-2 outline-none"
                      />
                    </span>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                        <label htmlFor="" className="text-xs">
                          First Name
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="John"
                          className="bg-transparent text-sm w-full py-2 outline-none"
                        />
                      </span>
                      <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                        <label htmlFor="" className="text-xs">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Doe"
                          className="bg-transparent text-sm w-full py-2 outline-none"
                        />
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                        <label htmlFor="" className="text-xs">
                          Gender
                        </label>
                        <select
                          name=""
                          id=""
                          className="w-full py-2 outline-none bg-transparent"
                        >
                          <option value="male">Male</option>
                          <option value="male">Female</option>
                        </select>
                      </span>
                      <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                        <label htmlFor="" className="text-xs">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="+1234567890"
                          className="bg-transparent text-sm w-full py-2 outline-none"
                        />
                      </span>
                    </div>
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Email Address
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="johndoe@example.com"
                        className="bg-transparent text-sm w-full py-2 outline-none"
                      />
                    </span>
                  </form>
                </div>
                <hr />
                <div className="flex justify-end my-4 px-4 md:px-[5rem]">
                  <button className="bg-primary text-sm text-white px-6 py-3">
                    Save Changes
                  </button>
                </div>
              </section>
            )}
            {activeTab === "deliveryInfo" && (
              <section className="">
                <div className="flex flex-col md:flex-row items-start justify-start gap-4 md:gap-2">
                  <div className="flex flex-col items-start text-sm py-3 md:py-4 px-4 md:px-[3rem] w-full md:w-[400px]">
                    <h1 className="font-semibold text-lg">
                      Delivery Information
                    </h1>
                    <p className="text-gray-400 text-sm">
                      Information about delivery status
                    </p>
                    <button className="flex flex-row gap-2 text-primary border border-primary px-4 md:px-6 py-2 mt-4 text-sm">
                      <PenLine size={18} />
                      <span className="whitespace-nowrap">Edit Delivery Information</span>
                    </button>
                  </div>
                  {/* delivery inputs */}
                  <form className="flex flex-col flex-grow gap-4 py-4 md:py-6 px-4 md:mx-[5rem] w-full">
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Next Delivery Date
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="14th November 2020"
                        className="bg-transparent text-sm w-full py-2 outline-none"
                      />
                    </span>
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Delivery Area
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Yaba, Lagos"
                        className="bg-transparent text-sm w-full py-2 outline-none"
                      />
                    </span>
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Delivery Address
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="19, Mohammed ABiola street"
                        className="bg-transparent text-sm w-full py-2 outline-none"
                      />
                    </span>
                    <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-full sm:w-[200px] px-4 pt-2 border border-[#808080]">
                      <label htmlFor="" className="text-xs">
                        Payment Status
                      </label>
                      <p className="font-semibold py-2">Paid</p>
                    </span>
                  </form>
                </div>
                <hr />
                <div className="flex justify-end my-4 px-4 md:px-[5rem]">
                  <button className="bg-primary text-sm text-white px-6 py-3">
                    Save Changes
                  </button>
                </div>
              </section>
            )}
          </div>
        </section>
      </div>
    </section>
    </main>
  );
}
