"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
// import PhotoCard from "@/components/ours/PhotoCard";
import {FocusCards} from "@/components/ui/focus-cards";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import type { PhotoCard} from "@/types/photo";


export default function Page() {
    const [photos, setPhotos] = useState<PhotoCard[]>([]);

    // Fetch photos from PocketBase
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const records = await pb.collection('Post').getList<PhotoCard>(1, 10);
                setPhotos(records.items);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);
    
    return (
        <div>
            <DashboardNavBar/>
            <section className={"mt-28 px-10 "}>
                <FocusCards cards={photos}/>
                {/*<div className={"grid grid-cols-5 gap-y-5 gap-x-4"}>*/}

                {/*{photos.map((photo) => (*/}
                {/*        <PhotoCard key={photo.id} photo={photo} />*/}
                {/*    ))}*/}

                {/*</div>*/}
            </section>
        </div>
    )
}