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
import { useState } from "react";

export default function SignUpButton() {
    const [profileImage, setProfileImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfileImage(file);
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
                        <Input placeholder={"Email"} />
                        <br />
                        <h2 className={"mb-1"}>Username</h2>
                        <Input placeholder={"Username"} />
                        <br />
                        <h2 className={"mb-1"}>Password</h2>
                        <Input placeholder={"Password"} />
                        <br />
                        <h2 className={"mb-1"}>Confirm Password</h2>
                        <Input placeholder={"Confirm Password"} className={"p-4"} />
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
                    <DialogFooter>
                        <button className={"text-white font-semibold bg-[#A7DB42] hover:bg-[#689917] transition p-3 px-6 mt-4 rounded-md w-full"}>
                            Sign Up
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
