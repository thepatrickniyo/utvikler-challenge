import { Metadata } from "next";
import { gilroy } from "../config";

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
          <main className="flex">
          <section className="w-[45%] h-screen flex items-center justify-center">
              {children}
          </section>
          <section className="w-[55%] auth-banner-bg h-screen flex flex-col">
            <article className="mt-auto mx-auto p-8 w-3/4">
                <h1 className="text-white font-bold text-xl">Saving Patients During a Pandemic</h1>
                <p className="text-white mt-2">Delivering essential medication to NIMR patients with adherence to quality of service, care and confidentiality.</p>
            </article>
          </section>
          </main>
        </body>
      </html>
    );
  }