import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessAlert() {
    const router = useRouter();
  
    const handleDismiss = () => {
      router.push("/patients");
    };
  
    return (
      <div className="fixed top-[8.5vh] left-0 right-0 mx-auto w-full px-[8%] z-50">
        <div className="bg-[#44B07E]  text-white  py-4 px-4  shadow-md flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/assets/icons/white-check.svg" width={20} height={20} alt="success" />
            <span className="font-semibold text-sm">Package has been successfully assigned to Oluwaseun Aregbesola </span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-green-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }