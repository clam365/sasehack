"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import {FocusCards} from "@/components/ui/focus-cards";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import type { PhotoCard} from "@/types/photo";
import type { Comment} from "@/types/comment";

export default function Page() {
    const [photos, setPhotos] = useState<PhotoCard[]>([]);
    const [userSavedPosts, setUserSavedPosts] = useState<string[]>([]);
    const [postComments, setPostComments] = useState<Comment[]>([]);

    useEffect(() => {
        const currentUser = pb.authStore.model;

        if (!currentUser) {
            console.error('User is not authenticated.');
            window.location.href = '/';
            return;
        }

        const fetchData = async () => {
            try {
                const records = await pb.collection('Post').getFullList<PhotoCard>()
                const user = await pb.collection('users').getOne(currentUser.id)
                const comments = await pb.collection('comments').getFullList<Comment>();
                setPhotos(records);
                setUserSavedPosts(user.savedposts || []);
                setPostComments(comments);
            } catch (error) {
                console.error('Error fetching photos or user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <DashboardNavBar />

            <section className={"mt-28 "}>
                <FocusCards cards={photos} userSavedPosts={userSavedPosts} postComments = {postComments}/>
            </section>
        </div>
    );
}