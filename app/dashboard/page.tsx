"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import {FocusCards} from "@/components/ui/focus-cards";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import type { PhotoCard} from "@/types/photo";

export default function Page() {
    const [photos, setPhotos] = useState<PhotoCard[]>([]);
    const [userSavedPosts, setUserSavedPosts] = useState<string[]>([]);

    useEffect(() => {
        const currentUser = pb.authStore.model;

        if (!currentUser) {
            console.error('User is not authenticated.');
            window.location.href = '/';
            return;
        }

        const fetchData = async () => {
            try {
                const [records, user] = await Promise.all([
                    pb.collection('Post').getFullList<PhotoCard>(),
                    pb.collection('users').getOne(currentUser.id),
                ]);
                setPhotos(records);
                setUserSavedPosts(user.savedposts || []);
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
                <FocusCards cards={photos} userSavedPosts={userSavedPosts} />
            </section>
        </div>
    );
}