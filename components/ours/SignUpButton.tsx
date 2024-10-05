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


export default function SignUpButton() {
    return(
        <div>
            <Dialog>
                <DialogTrigger className={"text-md text-black font-semibold bg-[#EEEEEE] hover:bg-[#DCDCDC] transition p-3 px-5 rounded-full"}>
                    Sign Up
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className={"justify-center m-auto"}>
                        <Image src={"/wildscape_logo_green.png"} alt={"logo"} width={50} height={50} className={"m-auto mb-4"}/>
                        <DialogTitle className={"font-medium text-2xl"}>Welcome to Wildscape</DialogTitle>
                        <p className={"m-auto"}>Discover. Share. Protect.</p>
                    </DialogHeader>
                    <DialogDescription className={""}>
                        <h2 className={"mb-1"}>Email</h2>
                        <Input placeholder={"Email"} className={""}/>
                        <br/>
                        <h2 className={"mb-1"}>Username</h2>
                        <Input placeholder={"Username"} className={""}/>
                        <br/>
                        <h2 className={"mb-1"}>Password</h2>
                        <Input placeholder={"Password"} className={""}/>
                        <br/>
                        <h2 className={"mb-1"}>Confirm Password</h2>
                        <Input placeholder={"Confirm Password"} className={"p-4"}/>
                    </DialogDescription>
                    <DialogFooter>
                        <button
                            className={"text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-3 px-6 mt-4  rounded-md w-full"}>
                            Log in
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}