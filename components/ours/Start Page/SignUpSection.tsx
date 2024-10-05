"use client";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import pb from "../../../lib/pocketbase";

const SignUpSection = () => {
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordConfirmInput, setPasswordConfirmInput] = useState("");

    const handleSignUp = async () => {
        const data = {
            "username": usernameInput,
            "email": emailInput,
            "emailVisibility": true,
            "password": passwordInput,
            "passwordConfirm": passwordConfirmInput
        };
        const record = await pb.collection('users').create(data);
        console.log(record);
    }

    const [profileImage, setProfileImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfileImage(file);
        }
    };

    return (
        <div className="flex max-w-full h-screen">
            <div className="w-1/2 h-full">
                <img
                    src="/deer.jpg"
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center p-20">
                <Image
                    src="/wildscape_logo_green.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="block mx-auto p-0 mb-4"
                    style={{ objectFit: 'contain' }}
                />
                <h2 className="text-3xl font-bold mb-4 text-center">Sign Up Today</h2>

                <h2 className="mb-1">Email</h2>
                <Input placeholder="Email" className="" onChange = {(event)=> setEmailInput(event.target.value)}/>
                <br/>
                <h2 className="mb-1">Username</h2>
                <Input placeholder="Username" className="" onChange = {(event)=> setUsernameInput(event.target.value)}/>
                <br/>
                <h2 className="mb-1">Password</h2>
                <Input placeholder="Password" className="" onChange = {(event)=> setPasswordInput(event.target.value)}/>
                <br/>
                <h2 className="mb-1">Confirm Password</h2>
                <Input placeholder="Confirm Password" className="p-4" onChange = {(event)=> setPasswordInput(event.target.value)}/>
                <br />

                <h2 className="mb-1">Profile Image</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                />
                {profileImage && (
                    <p className="text-sm text-green-600 mt-2">Image selected: {profileImage.name}</p>
                )}

                <button className="mt-4 px-4 py-3 bg-[#a7db42] font-semibold text-white rounded-lg hover:bg-[#689917] transition" onClick={handleSignUp}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default SignUpSection;
