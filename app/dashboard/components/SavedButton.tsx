import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Bookmark} from "lucide-react";
import Link from "next/link";

export default function SavedButton() {
    return (
        <div>
            <Link href={"/saved"}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Bookmark className={"h-9 w-9 hover:text-[#a7db42] transition "}/>
                        </TooltipTrigger>
                        <TooltipContent>
                            Saved
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Link>
        </div>
    )
}