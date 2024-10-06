import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import pb from "../../lib/pocketbase";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';


export default function SignUpButton() {
    const [emailInput, setEmailInput] = useState("");
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const handleSignUp = async () => {
        const formData = new FormData();
        formData.append("username", usernameInput);
        formData.append("email", emailInput);
        formData.append("emailVisibility", "true"); 
        formData.append("password", passwordInput);
        formData.append("passwordConfirm", passwordConfirmInput);
    
        if (profileImage) {
            formData.append("avatar", profileImage);
        }
    
        try {
            const record = await pb.collection('users').create(formData);
            if (record) {
                window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Error signing up. Please try again.");
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfileImage(file);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const authData = await pb.collection('users').authWithOAuth2({
                provider: 'google',
            });
            if (authData) {
                window.location.href = '/dashboard'; 
            }
        } catch (error) {
            console.error('Google OAuth login failed:', error);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger className={"text-md text-black font-semibold bg-[#EEEEEE] hover:bg-[#DCDCDC] transition p-3 px-5 rounded-full"}>
                    Sign Up
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className={"justify-center m-auto"}>
                        <Image src={"/wildscape_logo_green.png"} alt={"logo"} width={50} height={50} className={"m-auto mb-4"} />
                        <DialogTitle className={"font-medium text-2xl"}>Welcome to Wildscape</DialogTitle>
                        <p className={"m-auto"}>Discover. Share. Protect.</p>
                    </DialogHeader>
                    <DialogDescription>
                        <h2 className={"mb-1"}>Email</h2>
                        <Input placeholder={"Email"} className={""} onChange = {(event)=> setEmailInput(event.target.value)} />
                        <br />
                        <h2 className={"mb-1"}>Username</h2>
                        <Input placeholder={"Username"} className={""}
                               onChange = {(event)=> setUsernameInput(event.target.value)}/>
                        <br />
                        <h2 className={"mb-1"}>Password</h2>
                        <Input placeholder={"Password"} className={""} onChange = {(event)=> setPasswordInput(event.target.value)}/>
                        <br />
                        <h2 className={"mb-1"}>Confirm Password</h2>
                        <Input placeholder={"Confirm Password"} className={"p-4"} onChange = {(event)=> setPasswordConfirmInput(event.target.value)}/>
                        <br />
                        <h2 className={"mb-1"}>Profile Image</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={"block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none"}
                        />
                        {profileImage && (
                            <p className="text-sm text-green-600 mt-2">Image selected: {profileImage.name}</p>
                        )}
                    </DialogDescription>
                    <DialogFooter className="flex items-center max-w space-y-4">
                        <button
                            className={"text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-4 px-6 mt-4  rounded-md w-full"}
                            onClick={handleSignUp}>
                            Sign up
                        </button>
                        <button
                            className={"flex justify-center text-white font-semibold bg-[#4484f3] hover:bg-[#3160b0] transition py-3 pl-1 pr-2 mt-4 rounded-md w-full items-center"}
                            onClick={handleGoogleLogin}>
                            <FcGoogle className={"size-8 justify-self-center bg-white rounded-md mr-1"}/>
                            <p>Sign up with Google</p>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
