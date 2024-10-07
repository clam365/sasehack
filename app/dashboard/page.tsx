"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import {FocusCards} from "@/components/ui/focus-cards";
import pb from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import type { PhotoCard} from "@/types/photo";
import {Plus} from "lucide-react";
import Link from "next/link";

export default function Page() {
    const [photos, setPhotos] = useState<PhotoCard[]>([]);

    // Fetch photos from PocketBase
    useEffect(() => {
        const currentUser = pb.authStore.model;
    
        if (!currentUser) {
            console.error('User is not authenticated.');
            window.location.href = '/';
            return;
        }
        
        const fetchPhotos = async () => {
            try {
                const records = await pb.collection('Post').getFullList<PhotoCard>();
                setPhotos(records);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);
    
    return (
        <div>
            <DashboardNavBar/>

            <section className={" mt-28 p-6 md:p-0"}>

                <FocusCards cards={photos}/>

            </section>

            <Link href={"/create"} className={"fixed bottom-4 right-4 z-30 bg-black hover:bg-matchaGreen transition p-2 rounded-full"}>
                <Plus className={"h-10 w-10 text-white"}/>
            </Link>

        </div>
    )
}