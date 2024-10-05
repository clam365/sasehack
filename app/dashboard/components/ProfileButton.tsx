import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

export default function ProfileButton() {
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <CircleUserRound className={"h-10 w-10"} />
                </PopoverTrigger>
                <PopoverContent className={""}>
                    <div className={"flex flex-col"}>
                        <Link href={"/settings"} className={"mb-2 text-gray-400 hover:text-black transition"}>Settings</Link>
                        <hr />
                        {/* TODO NEEDS LOGOUT IMPLEMENTATION */}
                        <Link href={"/logout"} className={"mt-2 text-center font-semibold text-white hover:bg-rose-700 transition p-3 py-2 bg-rose-500 w-20 rounded-xl"}>
                            Logout
                        </Link>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}