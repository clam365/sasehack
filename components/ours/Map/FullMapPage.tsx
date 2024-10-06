"use client";

import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import pb from "../../../lib/pocketbase"; // Assuming this is where PocketBase is initialized
import type { PhotoCard } from "@/types/photo";

interface Post {
    id: string;
    title: string;
    images: string;
    likecount: number;
    username: string;
    latitude: number;
    longitude: number;
}

export function FullMapPage() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    const [posts, setPosts] = useState<PhotoCard[]>([]);

    useEffect(() => {
        const initMap = async () => {
            try {
                // Fetch all posts with their coordinates
                const result = await pb.collection('posts').getFullList<PhotoCard>({
                    filter: "", // Add filters if necessary
                });
                setPosts(result);

                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                    version: "weekly",
                });

                const { Map } = await loader.importLibrary("maps");
                const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

                const initialPosition = { lat: 43.642693, lng: -79.3871189 }; // Default center of the map

                // Set map options
                const mapOptions: google.maps.MapOptions = {
                    center: initialPosition,
                    zoom: 10, // Adjust zoom level as needed
                    mapId: "MY_NEXTJS_MAPID",
                };

                // Initialize map
                const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

                // Add markers for each post
                posts.forEach((post) => {
                    const position = { lat: post.latitude, lng: post.longitude };
                    new Marker({
                        map: map,
                        position: position,
                        title: post.title, // Optional: show title on hover
                    });
                });
            } catch (error) {
                console.error("Error loading Google Maps API: ", error);
            }
        };

        initMap();
    }, []);

    console.log("FullMapPage rendered");
    return (
        <div className="h-screen w-screen">
            <div className="h-full w-full" ref={mapRef} />
        </div>
    );
}

export default FullMapPage;
