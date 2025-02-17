"use client";
import BreadCrumb from "@/components/bread-crumb";
import CategoriesTab from "@/components/dashboard/Categories";
import ContentList from "@/components/dashboard/ContentList";
import ListedTab from "@/components/dashboard/ListedTab";
import PackageScan from "@/components/dashboard/PackageScan";
import AssignPackageModal from "@/components/modal/AssignPackageModal";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function AssignPackage() {
  const [activeTab, setActiveTab] = useState("drugCycle");
  const [showModal, setShowModal] = useState(false);

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

  return (
    <main className="min-h-screen flex flex-col">
      <BreadCrumb links={links} />

      <section className="flex flex-col md:flex-row items-start gap-4 px-4 md:px-[8%] text-sm my-10 flex-grow">
        {/* Section One */}
        <div className="bg-white w-full md:min-w-[400px] md:w-auto order-1 md:order-none mb-4 md:mb-0">
          <h1 className="px-4 md:px-[3rem] py-5">Patient Information</h1>
          <hr />
          <ul>
            {formContents.map((content, index) => (
              <li
                key={index}
                className="flex flex-row justify-between px-4 md:px-[3rem] py-3"
              >
                <span className="text-gray-400">{content.label}</span>
                <span>{content.value}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Section Two */}
        <div className="bg-white flex flex-col w-full min-h-[520px] order-2 md:order-none relative">
          <ListedTab 
            navigationLinks={navigationLinks}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* tab contents */}
          <div className="flex-grow">
            {activeTab === "drugCycle" && (
              <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto">
                  <CategoriesTab />
                  <ContentList />
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-end px-4 md:px-[3rem]">
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
              <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto">
                  <CategoriesTab />
                  <ContentList />
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-end px-4 md:px-[3rem]">
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
              <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto">
                  <section className="min-h-[400px]">
                    <PackageScan />
                  </section>
                </div>
                <div className="bg-white border-t w-full sticky bottom-0 flex justify-between px-4 md:px-[3rem]">
                  <Button 
                    onClick={() => {
                      const currentIndex = navigationLinks.findIndex(
                        (tab) => tab.key === activeTab
                      );
                      const nextTab = navigationLinks[currentIndex - 1]?.key;
                      if (nextTab) setActiveTab(nextTab);
                    }} 
                    className="border border-primary text-primary text-sm font-semibold px-6 py-6 my-4 bg-transparent hover:text-white"
                  >
                    Back
                  </Button>
                  <Button 
                    className="bg-primary text-sm text-white px-6 py-6 my-4"
                    onClick={() => setShowModal(true)}
                  >
                    Assign Package
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <AssignPackageModal
        isOpen={showModal}
        setIsOpen={setShowModal}
      />
    </main>
  );
}