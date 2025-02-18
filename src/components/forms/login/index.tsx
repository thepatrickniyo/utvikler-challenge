import PasswordInput from "@/components/elements/PasswordInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginForm(){
    return (
        <section className="px-4">
            <h1 className="text-[18px]">Sign In to continue</h1>
            <form className="mt-6">
                <section>
                    <Input type="email" placeholder="Email Address" className="p-6 border-dark-gray placeholder:text-black/60"   />
                </section>

                <section className="mt-4">
                    <PasswordInput />
                </section>

                <section className="mt-4 flex justify-between">
                <label className="inline-flex items-center">
                    <Checkbox className="border-dark-gray checked:bg-black checked:border-dark-gray" />
                    <span className="ml-2 text-sm hover:cursor-pointer hover:text-primary">Remember me</span>
                </label>
                <span className="text-sm hover:cursor-pointer text-primary font-semibold hover:underline">Forgot Password?</span>
                </section>

                <section>
               <Link href="/patients">
                    <Button className="w-full mt-6 bg-primary text-white p-6 text-sm font-semibold text-md">Login</Button>
                </Link>
                </section>
            </form>
        </section>
    )
}