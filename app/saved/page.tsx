"use client";
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import type { PhotoCard } from "@/types/photo";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Page() {
    const [photos, setPhotos] = useState<PhotoCard[]>([]);

    useEffect(() => {
        const currentUser = pb.authStore.model;

        if (!currentUser) {
            console.error('User is not authenticated.');
            window.location.href = '/';
            return;
        }

        const fetchPhotos = async () => {
            try {
                // Fetch the user data to get saved posts
                const user = await pb.collection('users').getOne(currentUser.id);
                
                // Check if user has saved posts
                if (!user.savedposts || user.savedposts.length === 0) {
                    console.log('No saved posts found for the user.');
                    return;
                }

                // Fetch saved posts using their IDs
                const records = await pb.collection('Post').getFullList<PhotoCard>({
                    filter: user.savedposts.map((id: string) => `id="${id}"`).join(' || '), // Filter by saved post IDs
                });

                console.log(records);

                setPhotos(records);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []); // You may want to adjust dependencies based on your needs

    return (
        <div>
            <DashboardNavBar />
            <div className={"mt-24"}>
                <hr />
                <div className={"p-4 flex items-center justify-between"}>
                    <h1 className={"font-medium text-xl"}>View Your Saved Spots</h1>
                </div>
                <hr />
            </div>

            <section className={"mt-28"}>
                <FocusCards cards={photos} />
            </section>
        </div>
    );
}
