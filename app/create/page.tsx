"use client";
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const Page = () => {
    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // Handle file change to display image and file name
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setFileName(file.name);
            setImagePreview(URL.createObjectURL(file)); // Create image preview
        }
    };

    return (
        <div>
            <DashboardNavBar />
            <div className={"mt-24"}>
                <hr />
                <div className={"p-4 flex items-center justify-between"}>
                    <h1 className={"font-medium text-xl"}>Create Spot</h1>
                    <button className={"text-white font-semibold p-3 rounded-full bg-[#a7db42]"}>
                        Publish
                    </button>
                </div>
                <hr />
            </div>
            <div className="flex">
                {/* First half with image upload */}
                <div className={"w-1/2 p-32 pt-10"}>
                    <div
                        className={
                            "p-4 rounded-3xl text-center bg-[#e9e9e9] border border-gray-400 border-dotted h-[70vh] w-[30vw] flex flex-col justify-center items-center relative"
                        }
                    >
                        {imagePreview ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={imagePreview}
                                alt="Uploaded"
                                className="object-cover h-full w-full rounded-3xl"
                            />
                        ) : (
                            <>
                                <div className={"p-1 inline-block bg-black rounded-full"}>
                                    <ArrowUp className={"h-6 w-6 text-white"} />
                                </div>
                                <h1 className={"mt-4 text-lg"}>
                                    Choose a file to drag and drop <br /> it here
                                </h1>
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </div>
                    {fileName && <h1 className={"mt-4 text-lg"}>Selected file: {fileName}</h1>}
                    <hr className={"font-bold mt-6"} />
                </div>

                {/* Second half with input fields */}
                <div className={"w-1/2 p-10 space-y-6 mr-10"}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            placeholder="Add a title"
                            className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            placeholder="Add a detailed description"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                            rows={4}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Coordinates (Optional)</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Donation Link (Optional)</label>
                        <input
                            type="text"
                            placeholder="Add a link"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;
