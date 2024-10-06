import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog2"
import {Bookmark, Heart} from "lucide-react";
import pb from "../../lib/pocketbase";

interface PhotoCardProps {
    photo: {
        title: string;
        images: string;
        likes: number;
        user: string;
    };
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
    const imageUrl = pb.getFileUrl(photo, photo.images);
    return (
        <div>
            <Dialog >
                <DialogTrigger>
                    <div>
                        <div className="relative group max-w-[500px] max-h-[300px]">
                            <img
                                src={imageUrl}
                                alt={photo.title}
                                className="rounded-xl w-full h-full object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
                        </div>

                    </div>
                </DialogTrigger>
                {/*ACTUAL CONTENT OF CARD*/}
                <DialogContent className={"flex p-10"}>
                    <div className={"w-1/2"}>
                        <img
                            src={imageUrl}
                            alt={photo.title}
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className={"w-1/2"}>
                        <div className={"flex justify-between items-center"}>
                            <h1 className={"font-semibold text-2xl"}>Aurora Borealis</h1>
                            <div className={"flex items-center"}>
                                <div className={"flex items-center"}>
                                    <Heart className={"text-rose-500 h-7 w-7 mr-1"}/>
                                    <h1>12</h1>
                                </div>
                                <Bookmark className={" ml-2 h-7 w-7 text-[#a7db42] transition "}/>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="mt-1 flex justify-between items-center">
                <div>
                    <h1 className="font-[600] text-left">Aurora Borealis</h1>
                    <div className="flex items-center">
                        {/*TODO MAKE THESE DO SOMETHING */}
                        <Image src={"/userface.svg"} alt={"fake"} width={30} height={30}/>
                        <h1 className="ml-2 font-light text-sm">daimyo</h1>
                    </div>
                </div>
                <Bookmark className={"h-9 w-9 text-[#a7db42] hover:text-[#689917] transition "}/>
            </div>
        </div>


    );
}

export default PhotoCard;
