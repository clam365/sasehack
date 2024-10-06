"use client";
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import pb from "../../lib/pocketbase";

const Page = () => {
    const [fileName, setFileName] = useState("");
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    //const [coordinates, setCoordinates] = useState("");
    const [link, setLink] = useState("");

    // Handle file change to display image and file name
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setFileName(file.name);
            setImagePreview(URL.createObjectURL(file)); // Create image preview
        }
    };

    const handleCreatePost = async () => {
        const currentUser = pb.authStore.model;
    
        if (!currentUser) {
            console.error('User is not authenticated.');
            return;
        }
    
        let username = currentUser.username;
        if (username.startsWith("user")) {
            const email = currentUser.email;
            username = email.substring(0, email.indexOf("@"));
        }
    
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        data.append("location", location);
        //data.append("coordinates", coordinates);
        data.append("links", link);
        data.append("username", username);
    
        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput && fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            data.append("images", file);
        }
    
        try {
            const record = await pb.collection('Post').create(data);
    
            if (record) {
                const userPosts = currentUser.posts || [];
                const updatedPosts = [...userPosts, record.id];
    
                const userData = {
                    "posts": updatedPosts
                };
    
                await pb.collection('users').update(currentUser.id, userData);
                window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }

    return (
        <div>
            <DashboardNavBar />
            <div className={"mt-24"}>
                <hr />
                <div className={"p-4 flex items-center justify-between"}>
                    <h1 className={"font-medium text-xl"}>Create Spot</h1>
                    <button className={"text-white font-semibold p-3 rounded-full bg-[#a7db42]"} onClick={handleCreatePost}>
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
                            className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1" onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            placeholder="Add a detailed description"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                            rows={4}
                            onChange={(event) => setDescription(event.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                            onChange={(event) => setLocation(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Coordinates (Optional)</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                            // onChange={(event) => setCoordinates(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Donation Link (Optional)</label>
                        <input
                            type="text"
                            placeholder="Add a link"
                            className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                            onChange={(event) => setLink(event.target.value)}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;
