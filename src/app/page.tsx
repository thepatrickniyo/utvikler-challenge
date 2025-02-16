import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-pulse" />
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-success/10 rounded-full blur-3xl" />
      
      <article className="relative z-10 max-w-2xl mx-auto p-8 text-center">
        <h1 className="text-white font-gilroy-extrabold text-5xl md:text-6xl mb-6 leading-tight">
          Welcome to the
          <span className="block text-success/90">CCHUB Dev Challenge</span>
        </h1>
        
        <p className="text-white/80 font-gilroy-light text-lg mb-8 max-w-xl mx-auto">
          Join us in pushing the boundaries of innovation and creativity. 
          Your journey to excellence starts here.
        </p>
        
        <Link href="/signin">
        <Button className="group bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-gilroy-extrabold transition-all duration-300 hover:shadow-xl hover:shadow-white/10">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
        </Link>
      </article>
    </main>
  );
}