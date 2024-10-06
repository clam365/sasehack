"use client"
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import { useState } from "react";

const Page = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <div>
            <DashboardNavBar />
            <div className={"mt-24"}>
                <hr />
                <div className={"p-6"}>
                    <h1 className={"font-medium text-xl"}>Create Spot</h1>
                </div>
                <hr />
            </div>
            <div className={"flex"}>
                <div className={"w-1/2 p-6"}>
                    {/* Upload box */}
                    <div
                        className={
                            "relative border-dashed border-2 border-gray-400 rounded-lg p-12 flex flex-col items-center justify-center"
                        }
                    >
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className={"absolute inset-0 opacity-0 cursor-pointer"}
                        />
                        <div className={"relative z-10 text-center"}>
                            <div className={"bg-gray-200 rounded-xl h-80"}></div>
                            <p className={"mt-4"}>Choose a file or drag and drop it here</p>
                            <p className={"text-sm text-gray-500"}>
                                We recommend using high quality .jpg files less than 20 MB or
                                .mp4 files less than 200 MB.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"w-1/2 p-6"}>
                    {/* Additional content for the second half can go here */}
                    woufhwiuhf
                </div>
            </div>
        </div>
    );
};

export default Page;
