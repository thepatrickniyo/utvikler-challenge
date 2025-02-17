import { useState } from "react";

export default function CategoriesTab() {
    const tabs = [
        { title: "All", count: 33 },
        { title: "Yaba Riders", count: 5 },
        { title: "Unassigned Riders", count: 10 },
        { title: "Assigned Riders", count: 23 },
      ];

     const [activeTabCategory, setActiveTabCategory] = useState(0); 
    
    return (
        <div className="flex flex-wrap lg:justify-between items-center gap-3 py-6 bg-white px-[3rem]">
        {tabs.map((tab, index) => (
        <h1
            key={index}
            onClick={() => setActiveTabCategory(index)}
            className={`px-6 py-2 ${
            index === activeTabCategory
                ? "border border-primary text-primary bg-primary/10 py-[10px]"
                : "bg-[#eeeeee] text-gray-500 py-3"
            } text-xs font-bold cursor-pointer`}
        >
            {tab.title} ({tab.count})
        </h1>
        ))}
    </div>
    )
}