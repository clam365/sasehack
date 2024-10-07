"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import pb from "../../../lib/pocketbase"; // Assuming this is where PocketBase is initialized
import type { PhotoCard } from "@/types/photo";

export function FullMapPage() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            try {
                // Fetch all posts with their coordinates
                const result = await pb.collection('Post').getFullList<PhotoCard>();

                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                    version: "weekly",
                });

                const { Map } = await loader.importLibrary("maps");
                const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

                const initialPosition = { lat: 37.996163, lng: -82.127480 }; // Default center of the map

                // Set map options
                const mapOptions: google.maps.MapOptions = {
                    center: initialPosition,
                    zoom: 5, // Adjust zoom level as needed
                    mapId: "MY_NEXTJS_MAPID",
                };

                // Initialize map
                const map = new Map(mapRef.current as HTMLDivElement, mapOptions);


                // Add markers for each post with valid coordinates
                result.forEach((post) => {
                    const latitude = parseFloat(post.latitude);
                    const longitude = parseFloat(post.longitude);


                    // Check if latitude and longitude are valid numbers
                    if (!isNaN(latitude) && !isNaN(longitude)) {
                        const position = { lat: latitude, lng: longitude };
                        new Marker({
                            map: map,
                            position: position,
                            title: post.title, // Optional: show title on hover
                        });
                    }
                });

            } catch (error) {
                console.error("Error loading Google Maps API: ", error);
            }
        };
        initMap();
    }, []);

    return (
        <div className="h-screen w-screen relative">
            <div className="h-full w-full" ref={mapRef} />
        </div>
    );
}

export default FullMapPage;
