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
        <section className="flex gap-4">
          <section className="flex flex-col gap-1 text-xs">
            <label className="text-right text-[11px]">
              Patient&apos;s next delivery date is
            </label>
            <label className="text-[13px] text-right font-semibold text-black/50">
              {patient?.next_delivery_date}, in 2 days
            </label>
          </section>
          <Link href={`/patients/${patient?.id}/assign-package`}>
          <Button className="bg-primary text-white text-sm font-semibold py-4 px-6">
            Assign Package to Patient
          </Button>
          </Link>
        </section>
      </BreadCrumb>

      <section className="px-[8%] py-4 flex flex-row justify-center items-start gap-x-8">
        {/* Sidebar Options */}
        <ul className="bg-white text-sm">
          {["Patient", "Rider's Profile", "Delivery History"].map(
            (option, index) => (
              <li
                key={index}
                className="cursor-pointer px-10 py-4 text-gray-500 hover:bg-primary hover:bg-opacity-10 hover:border-r-4 hover:border-primary hover:text-primary"
              >
                {option}
              </li>
            )
          )}
        </ul>

        {/* Content Section */}
        <div className="bg-white flex flex-grow items-start">
          <section className="flex flex-col w-full">
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-row items-center gap-5 border-b py-4 px-[3rem] w-[400px]">
                <h1>Payment Status</h1>
                <span className="bg-green-500 bg-opacity-10 px-6 py-2 text-green-500 font-semibold">
                  Paid
                </span>
              </div>
              {/* Tab Navigation */}
              <ul className="flex gap-10 mx-[5rem]">
                {navigationLinks.map(({ title, key }) => (
                  <li key={key} className="cursor-pointer relative">
                    <button
                      onClick={() => setActiveTab(key)}
                      className={` py-6 text-sm transition-all duration-300 ${
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
            <div className="mt-8 w-full">
              {activeTab === "patientInfo" && (
                <section className="">
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="flex flex-col items-start text-sm py-4 px-[3rem] w-[400px]">
                      <h1 className="font-semibold text-lg">
                        Patient&apos;s Information
                      </h1>
                      <p className="text-gray-400">
                        Personal Information about Patient
                      </p>
                      <button className="flex flex-row gap-2 text-primary border border-primary px-6 py-2 mt-4">
                        <PenLine />
                        Edit Patient&apos;s Information
                      </button>
                    </div>
                    {/* patient inputs */}
                    <form className="flex flex-col flex-grow gap-4 py-6 mx-[5rem] bg-green-500s">
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
                      <div className="flex flex-row gap-4">
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

                      <div className="flex flex-row gap-4">
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
                  <div className="flex justify-end my-4 px-[5rem]">
                    <button className="bg-primary text-sm text-white px-6 py-3">
                      Save Changes
                    </button>
                  </div>{" "}
                </section>
              )}
              {activeTab === "deliveryInfo" && (
                <section className="">
                  <div className="flex flex-row items-start justify-start gap-2">
                    <div className="flex flex-col items-start text-sm py-4 px-[3rem] w-[400px]">
                      <h1 className="font-semibold text-lg">
                        Delivery Information
                      </h1>
                      <p className="text-gray-400">
                        Information about delivery status
                      </p>
                      <button className="flex flex-row gap-2 text-primary border border-primary px-6 py-2 mt-4">
                        <PenLine />
                        Edit Delivery Information
                      </button>
                    </div>
                    {/* patient inputs */}
                    <form className="flex flex-col flex-grow gap-4 py-6 mx-[5rem] bg-green-500s">
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
                      <span className="bg-[#EFEFEF] flex flex-col justify-start items-start w-[200px] px-4 pt-2 border border-[#808080]">
                        <label htmlFor="" className="text-xs">
                          Payment Status
                        </label>
                        <p className="font-semibold py-2">Paid</p>
                      </span>
                    
                    </form>
                  </div>
                  <hr />
                  <div className="flex justify-end my-4 px-[5rem]">
                    <button className="bg-primary text-sm text-white px-6 py-3">
                      Save Changes
                    </button>
                  </div>{" "}
                </section>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
