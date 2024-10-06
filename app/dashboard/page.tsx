"use client";
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import PhotoCard from "@/components/ours/PhotoCard";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

interface Photo {
    id: string;
    title: string;
    images: string;
    likecount: number;
    username: string;
}

export default function Page() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    // Fetch photos from PocketBase
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const records = await pb.collection('Post').getList<Photo>(1, 10);
                setPhotos(records.items);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <DashboardNavBar />
            <section className={"mt-28 px-10"}>
                <div className={"grid grid-cols-5 gap-y-5 gap-x-4"}>
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1, // Staggered delay for each photo card
                            }}
                        >
                            <PhotoCard photo={photo} />
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
