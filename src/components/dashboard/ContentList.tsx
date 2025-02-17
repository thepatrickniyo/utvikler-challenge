import { Circle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContentList(){
  const [activeContent, setActiveContent] = useState(0);
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
  ];

    return (
        <div className="h-[max-content] mb-[4rem] mt-4">
                  <div className="flex flex-col gap-y-4 overflow-x-auto px-[3rem]">
                    {tableContents.map((content, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer flex flex-row items-center gap-5 border p-3 w-[800px] lg:w-full bg-white ${
                            activeContent === index ? " border-primary text-primary bg-primary/10" : "border-gray-300"
                        }`}
                        onClick={() => setActiveContent(index)}
                        >
                        <span>
                            {activeContent === index ? (
                            <Image src="/assets/icons/radio.svg" alt="Radio icon" width={20} height={20}/>
                            ) : (
                            <Circle size={20} strokeWidth={1} color="#6b7280" />
                            )}
                        </span>
                        <span className="w-[250px]">
                            <p className="text-gray-500 text-sm">Dispatch Rider&apos;s Name</p>
                            <h1 className="text-[17px] mt-2 text-md font-semibold">{content.ridersName}</h1>
                        </span>
                        <span className="w-[200px]">
                            <p className="text-gray-500 text-sm">Delivery Area</p>
                            <h1 className="text-[17px] mt-2 text-md font-semibold">{content.area}</h1>
                        </span>
                        <span className="w-[200px]">
                            <p className="text-gray-500 text-sm">Number of Deliveries</p>
                            <h1 className="text-[17px] mt-2 text-md font-semibold">{content.deliveries}</h1>
                        </span>
                        </div>

                    ))}
                  </div>
            </div>
    )
}