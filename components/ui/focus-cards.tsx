"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import type {PhotoCard} from "@/types/photo";
import pb from "../../lib/pocketbase";
import {Bookmark, CircleUserRound, Heart} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog2"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export const Card = React.memo(
    ({
         card,
         index,
         hovered,
         setHovered,
     }: {
        card: PhotoCard;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => {
        const imageUrl = pb.getFileUrl(card, card.images);
        return (
            <Dialog>
                <DialogTrigger>
                    <div
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        className={cn(
                            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                            hovered !== null && hovered !== index && " scale-[0.98]"
                        )}
                    >
                        <Image
                            src={imageUrl}
                            alt={card.title}
                            fill={true}
                            className="object-cover absolute inset-0"
                        />
                        <div
                            className={cn(
                                "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 flex-col-reverse",
                                hovered === index ? "opacity-100" : "opacity-0"
                            )}
                        >

                            <div className={"flex items-center"}>
                                <div className={"flex items-center"}>
                                    <Heart className={"text-rose-500 h-7 w-7 mr-1"}/>
                                    <h1 className={"text-white"}>{card.likecount}</h1>
                                </div>
                                <Bookmark className={" ml-2 h-7 w-7 text-[#a7db42] transition "}/>
                            </div>
                            <div
                                className="text-xl md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                                {card.title}
                            </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent c>
                    <div className={"flex p-3"}>
                        <div className={"w-1/2"}>
                            <Image
                                src={imageUrl}
                                alt={card.title}
                                width={400}
                                height={250}
                                className={"rounded-xl max-h-[90%]"}
                            />
                        </div>
                        <div className={"w-1/2 ml-4"}>
                            <div className={"flex justify-between items-center mb-2"}>
                                <div>
                                    <h1 className={"font-semibold text-xl"}>{card.title}</h1>
                                    {/*TODO LOCATION*/}
                                    <p className={" text-gray-400 "}>{card.Location}</p>
                                </div>
                                <div>
                                    <div className={"flex items-center"}>
                                        <div className={"flex items-center"}>
                                            <Heart className={"text-rose-500 h-7 w-7 mr-1"}/>
                                            <h1 className={""}>{card.likecount}</h1>
                                        </div>
                                        <Bookmark className={" ml-2 h-7 w-7 text-[#a7db42] transition "}/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            {/*TODO Description*/}
                            <h1 className={"w-full my-2"}>
                                {card.description}
                            </h1>
                            <div className={"mt-4"}>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        {/*TODO add number of comments in the bracket, i think there's an array thing for that*/}
                                        <AccordionTrigger className={"font-semibold"}>Comments (2)</AccordionTrigger>
                                        <AccordionContent>
                                            {/*TODO map comments in this accordion content COMPONENT*/}
                                            <div className={"flex items-center space-x-4 mb-2"}>
                                                <div className={"flex items-center space-x-1"}>
                                                    {/*TODO user photo*/}
                                                    <CircleUserRound className={"h-7 w-7"}/>
                                                    {/*TODO user who made the comment*/}
                                                    <h1 className={"font-semibold"}>user1</h1>
                                                </div>
                                                {/*TODO actual comment*/}
                                                <h1>Hi, this is so amazing!</h1>
                                            </div>

                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </div>

                        </div>
                    </div>

                </DialogContent>
            </Dialog>

        );
    }
);

Card.displayName = "Card";


export function FocusCards({cards}: { cards: PhotoCard[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5  mx-auto md:px-8 w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}
