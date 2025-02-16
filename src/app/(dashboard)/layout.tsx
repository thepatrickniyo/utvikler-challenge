import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "../config";

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
        {children}
      </body>
    </html>
  );
}