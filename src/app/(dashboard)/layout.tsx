import type { Metadata } from "next";
import "../globals.css";
import { gilroy } from "../config";
import DashboardNavBar from "@/components/dashboard/Navbar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The CCHUB Dev Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} antialiased`}>
        <main className="bg-gray-100 w-screen min-h-screen h-screen md:h-max overflow-y-scroll md:overflow-y-hidden">
        <DashboardNavBar />
        {children}
        </main>
      </body>
    </html>
  );
}