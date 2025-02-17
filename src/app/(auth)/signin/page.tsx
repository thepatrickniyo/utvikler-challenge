import LoginForm from "@/components/forms/login";
import Image from "next/image";
import Link from "next/link";

export default function Signin(){
    return (
        <main className="flex flex-col justify-between items-center min-h-screen w-full py-12">
           <section>
            <Link href="/">
              <Image src="/assets/logo-1.svg" alt="logo" width={50} height={50} />
            </Link>
           </section>

           <section className="w-full md:w-4/6 px-4 md:px-0">
            <LoginForm />
           </section>

           <section>
              <label className="text-sm flex gap-2 items-center">
                Powered by  
                <Link href="https://cchub.africa/" target="_blank">
                <Image src="/assets/cchub-logo.svg" alt="logo" width={120} height={120} />
               </Link>
              </label>  
           </section>
        </main>
    )
}