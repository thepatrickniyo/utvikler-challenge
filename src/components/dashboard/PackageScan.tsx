import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { X } from "lucide-react";

export default function PackageScan(){
    const [isScanned, setIsScanned] = useState(false);
    const [showScannedInfo, setShowScannedInfo] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const onScan = () => {
        // set time out and set scanned to true
        setIsLoading(true);
        setTimeout(() => {
            setIsScanned(true);
            setIsLoading(false);
        }
        , 2000);

        // set time out and show scanned info
        setTimeout(() => {
            setShowScannedInfo(true);
        }
        , 4000);
    }

    return (
        <section className="flex flex-col justify-center items-center gap-4 px-[3rem] py-6">
                  <h1 className="text-lg">
                    Scan a package to assign it to{" "}
                    <span className="font-semibold">Oluwaseun Aregbesola</span>
                  </h1>

                  {!isScanned && !isLoading && !showScannedInfo &&
                  <div className="flex flex-row justify-center items-center w-full gap-10 mt-8 px-[4rem] mx-auto">
                    <div className="flex flex-col justify-center items-center">
                      {/* <div className="bg-black text-white flex justify-center items-center h-[150px] w-[150px]">
                        <p>QR Code</p>
                      </div> */}
                      <Image src="/assets/icons/qr-code.svg" width={250} height={250} alt="QR Code" />
                      <Button onClick={onScan} disabled={isLoading} className="bg-primary/90 text-white px-6 py-6 mt-8 w-full font-semibold">
                        {isLoading ? "Scanning..." : "Scan Package"}
                      </Button>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col items-center">
                        <hr className="w-[1px] h-[100px] bg-gray-400 border-none" />
                        <span className="my-2">OR</span>
                        <hr className="w-[1px] h-[100px] bg-gray-400 border-none" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1>
                        Trouble scanning QR Code? <br />
                        Enter manually
                      </h1>
                      <input
                        type="text"
                        placeholder="Enter Code"
                        className="border-2 0 px-6 py-4 w-full  mt-5"
                      />
                      <button className="border border-primary text-primary font-semibold px-6 py-3 mt-8 w-full ">
                        Submit Code
                      </button>
                    </div>
                  </div>
                    }

                {!isScanned && isLoading && !showScannedInfo &&
                    <div className="w-full flex flex-col items-center gap-4 mt-4">
                      <Image src="/assets/icons/qr-scanning.svg" width={250} height={250} alt="QR Code" />
                      <p className="font-semibold mt-2 text-sm">Package scanning...</p>
                    </div>
                }
                
                 {isScanned && !showScannedInfo && 
                    <div className="w-full flex flex-col items-center gap-4 mt-4">
                      <Image src="/assets/icons/qr-scanned.svg" width={250} height={250} alt="QR Code" />
                      <p className="font-semibold mt-2 text-sm">Package scanned successfully</p>
                    </div>
                 }

                 {showScannedInfo &&
                    <div className="w-full flex flex-col items-center gap-4 mt-12">
                        <div className="w-full flex justify-center">
                            <menu className="w-2/4 flex flex-col items-center">
                                <label className="text-gray-600 text-[16px] text-left w-full">Package Code</label>
                                <div className="mt-4 px-6 py-6 bg-gray-100 w-full ">
                                    <label className="text-2xl text-gray-600">5673AD</label>
                                </div>
                                <div className="w-full flex justify-end gap-2 mt-4 cursor-pointer"
                                 onClick={() =>{ 
                                    setShowScannedInfo(false)
                                    setIsScanned(false)

                                }}
                                >
                                    <X size={20} className="text-danger cursor-pointer" />
                                    <label className="text-sm text-danger font-semibold cursor-pointer">Remove</label>
                                </div>
                            </menu>
                        </div>
                    </div>
                }

        </section>
    )
}