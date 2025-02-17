"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-[120px] font-bold text-primary leading-none">
            404
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto my-6" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => router.back()}
            className="bg-white border border-primary text-primary hover:bg-primary hover:text-white transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Button
            onClick={() => router.push("/")}
            className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
      </div>
    </main>
  );
}