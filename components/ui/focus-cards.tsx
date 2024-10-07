"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { PhotoCard } from "@/types/photo";
import type { Comment} from "@/types/comment";
import pb from "../../lib/pocketbase";
import {Bookmark, CircleUserRound, Globe, Heart} from "lucide-react";
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
import Link from "next/link";

export const Card = React.memo(
    ({
        card,
        isBookmarked,
        toggleBookmark,
        index,
        hovered,
        setHovered,
        comments,
    }: {
        card: PhotoCard;
        isBookmarked: boolean;
        toggleBookmark: () => void;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
        comments: Comment[];
    }) => {
        const imageUrl = pb.getFileUrl(card, card.images);

        // State to handle like count and if the post is liked
        const [likeCount, setLikeCount] = useState(card.likecount);
        const [isLiked, setIsLiked] = useState(false);

        const toggleLike = async () => {
            // Toggle like status
            const newLikedStatus = !isLiked;
            setIsLiked(newLikedStatus);

            // Update like count
            setLikeCount(prevCount => prevCount + (newLikedStatus ? 1 : -1));

            try {
                // Make an API call to update the like count in the backend
                await pb.collection('posts').update(card.id, {
                    likecount: likeCount + (newLikedStatus ? 1 : -1),
                });
            } catch (error) {
                console.error("Error updating like count:", error);
            }
        };

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
                                    {/* Heart icon click handler */}
                                    <Heart
                                        className={cn("h-7 w-7 mr-1", isLiked ? "text-rose-600 fill-current" : "text-rose-500")}
                                        onClick={toggleLike}
                                    />
                                    <h1 className={"text-white"}>{likeCount}</h1>
                                </div>
                                <Bookmark
                                    className={cn("ml-2 h-7 w-7 transition", isBookmarked ? "text-[#a7db42]" : "text-matchaGreen")}
                                    fill={isBookmarked ? "#a7db42" : "none"}
                                    stroke="currentColor"
                                    onClick={toggleBookmark}
                                />
                            </div>
                            <div className="text-xl md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                                {card.title}
                            </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <div className={"flex flex-col lg:flex-row p-3"}>
                        <div className={"w-full lg:w-1/2"}>
                            <Image
                                src={imageUrl}
                                alt={card.title}
                                width={400}
                                height={250}
                                className={"rounded-xl max-h-[90%]"}
                            />
                        </div>
                        <div className={"w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0"}>
                            <div className={"flex justify-between items-center mb-2"}>
                                <div>
                                    <h1 className={"font-semibold text-xl"}>{card.title}</h1>
                                    <p className={"text-gray-400"}>{card.Location}</p>
                                </div>
                                <div>
                                    <div className={"flex items-center"}>
                                        <div className={"flex items-center"}>
                                            <Heart
                                                className={cn("h-7 w-7 mr-1", isLiked ? "text-rose-600 fill-current" : "text-rose-500")}
                                                onClick={toggleLike}
                                            />
                                            <h1>{likeCount}</h1>
                                        </div>
                                        <Bookmark
                                            className={cn("ml-2 h-7 w-7 transition", isBookmarked ? "text-[#a7db42]" : "text-[#a7db42]")}
                                            fill={isBookmarked ? "#a7db42" : "none"}
                                            stroke="currentColor"
                                            onClick={toggleBookmark}
                                        />
                                        <Link
                                            href={`/full-map?lat=${card.latitude || ''}&lng=${card.longitude || ''}`}
                                            className={"ml-2"}
                                        >
                                            <Globe className={"h-7 w-7 text-blue-500 transition"} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h1 className={"w-full my-2"}>{card.description}</h1>
                            <div className={"mt-4"}>
                                <Accordion type="single" collapsible defaultValue={"item-1"}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={"font-semibold"}>Comments ({comments.length})</AccordionTrigger>
                                        <AccordionContent>
                                            {comments.map((comment) => (
                                                <div key={comment.id} className={"flex items-center space-x-4 mb-2"}>
                                                    <div className={"flex items-center space-x-1"}>
                                                        <CircleUserRound className={"h-7 w-7"} />
                                                        <h1 className={"font-semibold"}>{comment.user}</h1>
                                                    </div>
                                                    <h1>{comment.comment}</h1>
                                                </div>
                                            ))}
                                            {/* Add new comment functionality */}
                                            <div className={"flex items-center "}>
                                                <div className={"w-full mt-4"}>
                                                    <input
                                                        type="text"
                                                        placeholder="Add a comment"
                                                        className="w-full border-4 border-gray-300 rounded-xl p-3 mt-1"
                                                    />
                                                </div>
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

export function FocusCards({ cards, userSavedPosts, postComments }: { cards: PhotoCard[]; userSavedPosts: string[]; postComments: Comment[] }) {
    const [hovered, setHovered] = useState<number | null>(null);
    const [bookmarkedPosts, setBookmarkedPosts] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const bookmarks: { [key: string]: boolean } = {};
        userSavedPosts.forEach(postId => {
            bookmarks[postId] = true;
        });
        setBookmarkedPosts(bookmarks);
    }, [userSavedPosts]);

    const toggleBookmark = async (cardId: string) => {
        const currentUser = pb.authStore.model;
        if (!currentUser) {
            console.error('User is not authenticated.');
            return;
        }

        try {
            const user = await pb.collection('users').getOne(currentUser.id);
            const savedPosts = user.savedposts || [];
            const isBookmarked = bookmarkedPosts[cardId];

            if (isBookmarked) {
                const updatedSavedPosts = savedPosts.filter((postId: string) => postId !== cardId);
                await pb.collection('users').update(currentUser.id, { savedposts: updatedSavedPosts });
                setBookmarkedPosts(prev => ({ ...prev, [cardId]: false }));
            } else {
                // Add to saved posts
                await pb.collection('users').update(currentUser.id, { savedposts: [...savedPosts, cardId] });
                setBookmarkedPosts(prev => ({ ...prev, [cardId]: true }));
            }
        } catch (error) {
            console.error('Error updating saved posts:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto md:px-8 w-full">
            {cards.map((card, index) => {
                const filteredComments = postComments.filter(comment => comment.Post === card.id);

                return (
                    <Card
                        key={card.id}
                        card={card}
                        isBookmarked={!!bookmarkedPosts[card.id]}
                        toggleBookmark={() => toggleBookmark(card.id)}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered}
                        comments={filteredComments}
                    />
                );
            })}
        </div> // Close the first grid structure here
    );
}
