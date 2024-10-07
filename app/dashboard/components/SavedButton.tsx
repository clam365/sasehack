import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Bookmark } from "lucide-react";
import Link from "next/link";

export default function SavedButton() {
    return (
        <div>
            <Link href={"/saved"}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Bookmark
                                className="h-9 w-9 text-matchaGreen hover:text-forestGreen transition"
                                fill="#a7db42"
                                stroke="currentColor" // Make sure the stroke color changes on hover
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            Saved
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Link>
        </div>
    );
}
