"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import OverviewIcon from "../icons/Overview";
import DeliveriesIcon from "../icons/Deliveries";
import PatientsIcon from "../icons/Patients";
import RidersIcon from "../icons/Riders";
import AdminIcon from "../icons/Admin";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function DashboardNavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { title: "Overview", href: "/overview", icon: <OverviewIcon isActive={pathname === "/overview"} /> },
    { title: "Deliveries", href: "/deliveries", icon: <DeliveriesIcon isActive={pathname === "/deliveries"} /> },
    { title: "Patients", href: "/patients", icon: <PatientsIcon isActive={pathname?.includes("/patients")} /> },
    { title: "Dispatch Riders", href: "/dispatch-riders", icon: <RidersIcon isActive={pathname === "/dispatch-riders"} /> },
    { title: "Admin", href: "/admin", icon: <AdminIcon isActive={pathname === "/admin"} /> },
  ];

  return (
    <nav className="w-full bg-white px-[8%]  flex justify-between items-center border-b border-gray-200 relative">
      {/* Logo */}
      <Image src="/assets/logo-2.svg" alt="logo" width={50} height={50} />

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Navigation Links */}
      <div className={` absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:gap-8 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row md:gap-9 md:items-center relative">
          {navigationLinks.map((link, index) => {
            const isActive = pathname?.includes(link.href);
            return (
              <li key={index} className="relative group  py-2">
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 text-xs py-4 px-6  md:px-0 ${
                    isActive ? "text-primary font-semibold" : "text-nav"
                  } transition-all duration-300 hover:text-primary`}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
                {/* Active Border */}
                {isActive && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-primary"></span>
                )}
                {/* Hover Effect */}
                <span className="absolute bottom-[-1px] left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Profile Section */}
      <div className="hidden md:flex gap-4 items-center">
        <Image src="/assets/profile-image.svg" alt="profile image" width={40} height={40} className="rounded-full" />
        <span className="text-black text-sm font-semibold">Emmanuel Adigwe</span>
        <ChevronDown className="w-4 h-4 text-black" />
      </div>
    </nav>
  );
}
