import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import pb from "../../lib/pocketbase";
import { FcGoogle } from "react-icons/fc";
import router from "next/router";

export default function LogInButton() {
    const [emailOrUsernameInput, setEmailOrUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleLogIn = async () => {
        const authData = await pb.collection('users').authWithPassword(
            emailOrUsernameInput,
            passwordInput,
        );

        if (authData) {
            router.push('/dashboard');
        }
    }

    const handleGoogleLogin = async () => {
        try {
            const authData = await pb.collection('users').authWithOAuth2({
                provider: 'google',
            });
            if (authData) {
                router.push('/dashboard');
            }
        } catch (error) {
            console.error('Google OAuth login failed:', error);
        }
    };


    return (
        <div>
            <Dialog>
                <DialogTrigger className={"text-md text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-3 px-5 rounded-full"}>
                    Log in
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className={"justify-center m-auto"}>
                        <Image src={"/wildscape_logo_green.png"} alt={"logo"} width={50} height={50} className={"m-auto mb-4"} />
                        <DialogTitle className={"font-medium text-2xl"}>Welcome to Wildscape</DialogTitle>
                        <p className={"m-auto"}>Discover. Share. Protect.</p>
                    </DialogHeader>
                    <DialogDescription className={""}>
                        <h2 className={"mb-1"}>Username</h2>
                        <Input placeholder={"Username"} className={""} onChange={(event) => setEmailOrUsernameInput(event.target.value)} />
                        <br />
                        <h2 className={"mb-1"}>Password</h2>
                        <Input placeholder={"Password"} className={""} onChange={(event) => setPasswordInput(event.target.value)} />
                    </DialogDescription>
                    <DialogFooter className="flex items-center max-w space-y-4">
                        <button
                            className={"text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-4 px-6 mt-4  rounded-md w-full"}
                            onClick={handleLogIn}>
                            Log in
                        </button>
                        <button
                            className={"flex justify-center text-white font-semibold bg-[#4484f3] hover:bg-[#3160b0] transition py-3 pl-1 pr-2 mt-4 rounded-md w-full items-center"}
                            onClick={handleGoogleLogin}>
                            <FcGoogle className={"size-8 justify-self-center bg-white rounded-md mr-1"} />
                            <p>Log in with Google</p>
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}