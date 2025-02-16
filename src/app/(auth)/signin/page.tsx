import LoginForm from "@/components/forms/login";
import Image from "next/image";

export default function Signin(){
    return (
        <main className="flex flex-col justify-between items-center min-h-screen w-full py-12">
           <section>
              <Image src="/assets/logo-1.svg" alt="logo" width={50} height={50} />
           </section>

           <section className="w-4/6">
            <LoginForm />
           </section>

           <section>
              <label className="text-sm flex gap-2 items-center">
                Powered by  
                <Image src="/assets/cchub-logo.svg" alt="logo" width={100} height={100} />
              </label>  
           </section>
        </main>
    )
}