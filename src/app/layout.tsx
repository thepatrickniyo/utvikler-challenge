import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroy = localFont({
  src: [
    {
      path: '../../public/fonts/gilroy/Gilroy-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/gilroy/Gilroy-Extrabold.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-gilroy',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "CCHUB Dev Challenge",
  description: "Welcome to the CCHUB Dev Challenge",
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