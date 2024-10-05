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
import {Input} from "@/components/ui/input";
import { useState } from "react";
import pb from "../../lib/pocketbase";

export default function LogInButton() {
    const [emailOrUsernameInput, setEmailOrUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleSignIn = async () => {
        const authData = await pb.collection('users').authWithPassword(
            emailOrUsernameInput,
            passwordInput,
        );
        console.log(authData);
    }

    


    return(
        <div>
            <Dialog>
                <DialogTrigger className={"text-md text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-3 px-5 rounded-full"}>
                    Log in
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className={"justify-center m-auto"}>
                        <Image src={"/wildscape_logo_green.png"} alt={"logo"} width={50} height={50} className={"m-auto mb-4"}/>
                        <DialogTitle className={"font-medium text-2xl"}>Welcome to Wildscape</DialogTitle>
                        <p className={"m-auto"}>Discover. Share. Protect.</p>
                    </DialogHeader>
                    <DialogDescription className={""}>
                        <h2 className={"mb-1"}>Username</h2>
                        <Input placeholder={"Username"} className={""} onChange = {(event)=> setEmailOrUsernameInput(event.target.value)}/>
                        <br/>
                        <h2 className={"mb-1"}>Password</h2>
                        <Input placeholder={"Password"} className={""} onChange = {(event)=> setPasswordInput(event.target.value)}/>
                    </DialogDescription>
                    <DialogFooter>
                        <button className={"text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-3 px-6 mt-4  rounded-md w-full"}>
                            Log in
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}