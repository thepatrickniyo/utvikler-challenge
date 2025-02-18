"use client";
import BreadCrumb from "@/components/bread-crumb";
import { Circle, CircleDot } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function AssignPackage() {
  const [activeTab, setActiveTab] = useState("drugCycle");

  const { id } = useParams();
  const links = [
    { label: "Patients", url: "/patients" },
    { label: "View Patient", url: `/patients/${id}` },
    { label: "Assign Package to Patient", url: "#" },
  ];

  const formContents = [
    { label: "Hospital ID", value: "1AFHHHND093" },
    { label: "Name", value: "John Doe" },
    { label: "Phone Number", value: "+1234567890" },
    { label: "Next Delivery Date", value: "12th September 2020" },
    { label: "Location", value: "Yaba, Lagos" },
  ];

  // Tabs navigation
  const navigationLinks = [
    { title: "Set DrugCycle/Length", key: "drugCycle" },
    { title: "Assign DispatchRider", key: "assignDispatch" },
    { title: "Scan Package", key: "scan" },
  ];

  const tableContents = [
    {
      ridersName: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    },
    {
      ridersName: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    },
    {
      ridersName: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    },
    {
      ridersName: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    },
    {
      ridersName: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    },
  ];
  return (
    <main className="">
      <BreadCrumb links={links} />

      <section className="flex items-start gap-4 px-[8%] text-sm my-10">
        <div className="bg-white min-w-[400px]">
          <h1 className="px-[3rem] py-5">Patient Information</h1>
          <hr />
          <ul>
            {formContents.map((content, index) => (
              <li
                key={index}
                className="flex flex-row justify-between px-[3rem] py-3"
              >
                <span className="text-gray-400">{content.label}</span>
                <span>{content.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white flex flex-col w-full h-[520px] overflow-y-auto">
          <ul className="flex justify-between gap-20 px-[3rem] bg-white sticky top-0 z-10 border-b ">
            {navigationLinks.map(({ title, key }) => (
              <li key={key} className="cursor-pointer">
                <button
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 py-[19px] text-sm  ${
                    activeTab === key
                      ? "text-primary font-semibold border-b-[3px] border-primary"
                      : "text-gray-500"
                  }`}
                >
                  {activeTab === key ? (
                    <CircleDot size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                  {title}
                </button>
              </li>
            ))}
          </ul>

          {/* tab contents */}
          <div className=" ">
            {activeTab === "drugCycle" && (
              <div>
                <div className="flex flex-wrap lg:justify-between items-center gap-3 py-6 bg-white px-[3rem]">
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    All (33)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Yaba Riders (5)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Unassigned Riders (10)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Assigned Riders (23)
                  </h1>
                </div>
                <div className="h-[400px] mb-[4rem]">
                  <div className="flex flex-col gap-y-4 overflow-x-auto px-[3rem]">
                    {tableContents.map((content, index) => (
                      <div
                        key={index}
                        className="cursor-pointer flex flex-row items-center gap-5 border-2 p-3  w-[800px] lg:w-full bg-white"
                      >
                        <span>
                          <Circle size={30} strokeWidth={1} color="#6b7280" />
                        </span>
                        <span className="w-[250px] ">
                          <p className="text-gray-500">Dispatch Rider's Name</p>
                          <h1 className="text-[17px] mt-2">
                            {content.ridersName}
                          </h1>
                        </span>
                        <span className="w-[200px] ">
                          <p className="text-gray-500">Delivery Area</p>
                          <h1 className="text-[17px] mt-2">{content.area}</h1>
                        </span>
                        <span className="w-[200px] ">
                          <p className="text-gray-500">Number of Deliveries</p>
                          <h1 className="text-[17px] mt-2">
                            {content.deliveries}
                          </h1>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-end px-[3rem]">
                  <button
                    onClick={() => {
                      const currentIndex = navigationLinks.findIndex(
                        (tab) => tab.key === activeTab
                      );
                      const nextTab = navigationLinks[currentIndex + 1]?.key;
                      if (nextTab) setActiveTab(nextTab);
                    }}
                    className="bg-primary text-sm text-white px-6 py-3 my-4"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {activeTab === "assignDispatch" && (
              <div>
                <div className="flex flex-wrap lg:justify-between items-center gap-3 py-6 bg-white px-[3rem]">
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    All (33)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Yaba Riders (5)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Unassigned Riders (10)
                  </h1>
                  <h1 className="bg-[#eeeeee] px-6 py-2 text-gray-500">
                    Assigned Riders (23)
                  </h1>
                </div>
                <div className="h-[400px] mb-[4rem]">
                  <div className="flex flex-col gap-y-4 overflow-x-auto px-[3rem]">
                    {tableContents.map((content, index) => (
                      <div
                        key={index}
                        className="cursor-pointer flex flex-row items-center gap-5 border-2 p-3  w-[800px] lg:w-full bg-white"
                      >
                        <span>
                          <Circle size={30} strokeWidth={1} color="#6b7280" />
                        </span>
                        <span className="w-[250px] ">
                          <p className="text-gray-500">Dispatch Rider's Name</p>
                          <h1 className="text-[17px] mt-2">
                            {content.ridersName}
                          </h1>
                        </span>
                        <span className="w-[200px] ">
                          <p className="text-gray-500">Delivery Area</p>
                          <h1 className="text-[17px] mt-2">{content.area}</h1>
                        </span>
                        <span className="w-[200px] ">
                          <p className="text-gray-500">Number of Deliveries</p>
                          <h1 className="text-[17px] mt-2">
                            {content.deliveries}
                          </h1>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-end px-[3rem]">
                  <button
                    onClick={() => {
                      const currentIndex = navigationLinks.findIndex(
                        (tab) => tab.key === activeTab
                      );
                      const nextTab = navigationLinks[currentIndex + 1]?.key;
                      if (nextTab) setActiveTab(nextTab);
                    }}
                    className="bg-primary text-sm text-white px-6 py-3 my-4"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {activeTab === "scan" && (
              <div>
                <div className="flex flex-col justify-center items-center gap-4 px-[3rem] py-6">
                  <h1 className="text-lg">
                    Scan a package to assign it to{" "}
                    <span className="font-semibold">Oluwaseun Aregbesola</span>
                  </h1>
                  <div className="flex flex-row justify-center items-center w-full gap-10 mt-8 px-[4rem] mx-auto">
                    <div className="flex flex-col justify-center items-center">
                      <div className="bg-black text-white flex justify-center items-center h-[150px] w-[150px]">
                        <p>QR Code</p>
                      </div>
                      <button className="bg-primary text-white px-6 py-3 mt-8 w-full">
                        Scan Package
                      </button>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center">
                        <hr className="w-[1px] h-[100px] bg-gray-400 border-none" />
                        <span className="my-2">OR</span>
                        <hr className="w-[1px] h-[100px] bg-gray-400 border-none" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1>
                        Trouble scanning QR Code? <br />
                        Enter manually
                      </h1>
                      <input
                        type="text"
                        placeholder="Enter Code"
                        className="border-2 0 px-6 py-4 w-full  mt-5"
                      />
                      <button className="border border-primary text-primary font-semibold px-6 py-3 mt-8 w-full ">
                        Submit Code
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-between px-[3rem]">
                  <button onClick={() => {
                      const currentIndex = navigationLinks.findIndex(
                        (tab) => tab.key === activeTab
                      );
                      const nextTab = navigationLinks[currentIndex - 1]?.key;
                      if (nextTab) setActiveTab(nextTab);
                    }} className="border border-primary text-primary text-sm font-semibold px-6 py-3 my-4">
                    Back
                  </button>
                  <button className="bg-primary text-sm text-white px-6 py-3 my-4">
                    Assign Package
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
