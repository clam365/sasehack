"use client"
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import pb from "../../lib/pocketbase";

export default function page() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfileImage(file);
        }
    };

    const handleSave = async () => {
        const userData = {
            username,
            email,
            password,
            avatar: profileImage,
        };

        try {
            const formData = new FormData();
            const currentUser = pb.authStore.model;
            if (!currentUser) {
                console.error('User is not authenticated.');
                return;
            }
            Object.entries(userData).forEach(([key, value]) => {
                if (value) {
                    formData.append(key, value);
                }
            });

    
            const record = await pb.collection('users').update(currentUser.id, formData);
            if (record) {
                alert("Profile updated successfully!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div>
            <DashboardNavBar />
            <div className={"mt-24"}>
                <div className={"mt-24"}>
                    <hr />
                    <div className={"p-4 flex items-center justify-between"}>
                        <h1 className={"font-medium text-xl"}>Settings</h1>
                    </div>
                    <hr />
                    <div className={"p-10"}>
                        <div className={"flex items-center justify-between"}>
                            <div>
                                <h1 className={"font-semibold mb-2 text-xl"}>Profile</h1>
                                <p>Update your photo and personal details here.</p>
                            </div>
                            <button
                                className={"text-white font-semibold p-3 rounded-full bg-[#a7db42] hover:bg-[#689917] transition"}
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        </div>
                        <hr className={"mt-2"} />

                        <div className={"space-y-5 mt-4"}>
                            {/* Photo */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-28"}>Photo</h1>
                                <div className={"flex gap-x-2 items-center"}>
                                    <CircleUserRound className={"h-16 w-16"} />
                                    <input
                                        type="file"
                                        accept={"image/*"}
                                        onChange={handleImageChange}
                                        className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/* Username */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-20"}>Username</h1>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/* Password */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-20"}>Password</h1>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/* Email */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-[7.5rem]"}>Email</h1>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
