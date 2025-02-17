import { Circle } from "lucide-react";
import Image from "next/image";

interface ListedTabProps {
  navigationLinks: { title: string; key: string }[];
  activeTab: string;
  setActiveTab: (key: string) => void;
}

export default function ListedTab({ navigationLinks, activeTab, setActiveTab }: ListedTabProps) {
  return (
    <div className="px-4 md:px-[3rem] bg-white sticky top-0 z-10 border-b overflow-x-auto">
      <ul className="flex flex-wrap md:flex-nowrap md:justify-between min-w-min md:gap-20">
        {navigationLinks.map(({ title, key }, index) => {
          const activeIndex = navigationLinks.findIndex(link => link.key === activeTab);
          const currentIndex = index;

          return (
            <li 
              key={key} 
              className="cursor-pointer flex-shrink-0 w-full sm:w-auto"
            >
              <button
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 py-4 md:py-[19px] text-sm whitespace-nowrap w-full ${
                  activeTab === key
                    ? "text-primary font-semibold border-b-[3px] border-primary"
                    : currentIndex < activeIndex
                    ? "text-green-500 font-semibold"
                    : "text-gray-500"
                }`}
              >
                <span className="flex-shrink-0">
                  {currentIndex < activeIndex ? (
                    <Image 
                      src="/assets/icons/success.svg" 
                      width={20} 
                      height={20} 
                      alt="success"
                      className="w-5 h-5"
                    />
                  ) : activeTab === key ? (
                    <Image 
                      src="/assets/icons/radio.svg" 
                      width={20} 
                      height={20} 
                      alt="radio"
                      className="w-5 h-5"
                    />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </span>
                <span className="flex-shrink-0">{title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}