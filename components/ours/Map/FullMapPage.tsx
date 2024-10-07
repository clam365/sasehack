"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import pb from "../../../lib/pocketbase"; // Assuming this is where PocketBase is initialized
import type { PhotoCard } from "@/types/photo";

interface FullMapPageProps {
    latitude: string | null; // or use number if you prefer
    longitude: string | null; // or use number if you prefer
}

export function FullMapPage({ latitude, longitude }: FullMapPageProps) {
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

                // Use provided latitude and longitude or fallback to default position
                const lat = latitude ? parseFloat(latitude) : 37.996163;
                const lng = longitude ? parseFloat(longitude) : -82.127480;

                const initialPosition = { lat, lng };

                // Set map options
                const zoomLevel = latitude && longitude ? 10 : 5; // Set zoom level based on validity of coordinates
                const mapOptions: google.maps.MapOptions = {
                    center: initialPosition,
                    zoom: zoomLevel, // Adjust zoom level based on conditions
                    mapId: "MY_NEXTJS_MAPID",
                };

                // Initialize map
                const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

                // Add markers for each post with valid coordinates
                result.forEach((post) => {
                    const postLatitude = parseFloat(post.latitude);
                    const postLongitude = parseFloat(post.longitude);

                    // Check if latitude and longitude are valid numbers
                    if (!isNaN(postLatitude) && !isNaN(postLongitude)) {
                        const position = { lat: postLatitude, lng: postLongitude };
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
    }, [latitude, longitude]); // Add latitude and longitude as dependencies

    return (
        <div className="h-screen w-screen relative">
            <div className="h-full w-full" ref={mapRef} />
        </div>
    );
}

export default FullMapPage;

// "use client";
//
// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// import pb from "../../../lib/pocketbase"; // Assuming this is where PocketBase is initialized
// import type { PhotoCard } from "@/types/photo";
// import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook
//
// export function FullMapPage() {
//     const mapRef = React.useRef<HTMLDivElement>(null);
//     const searchParams = useSearchParams(); // Get search parameters from the URL
//
//     useEffect(() => {
//         const initMap = async () => {
//             try {
//                 // Fetch all posts with their coordinates
//                 const result = await pb.collection('Post').getFullList<PhotoCard>();
//
//                 const loader = new Loader({
//                     apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//                     version: "weekly",
//                 });
//
//                 const { Map } = await loader.importLibrary("maps");
//                 const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;
//
//                 // Get latitude and longitude from search parameters
//                 const latParam = searchParams.get('lat');
//                 const lngParam = searchParams.get('lng');
//
//                 // Use provided latitude and longitude or fallback to default position
//                 const latitude = latParam ? parseFloat(latParam) : 37.996163;
//                 const longitude = lngParam ? parseFloat(lngParam) : -82.127480;
//
//                 const initialPosition = { lat: latitude, lng: longitude };
//
//                 // Set map options
//                 const mapOptions: google.maps.MapOptions = {
//                     center: initialPosition,
//                     zoom: 5, // Adjust zoom level as needed
//                     mapId: "MY_NEXTJS_MAPID",
//                 };
//
//                 // Initialize map
//                 const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
//
//                 // Add markers for each post with valid coordinates
//                 result.forEach((post) => {
//                     const postLatitude = parseFloat(post.latitude);
//                     const postLongitude = parseFloat(post.longitude);
//
//                     // Check if latitude and longitude are valid numbers
//                     if (!isNaN(postLatitude) && !isNaN(postLongitude)) {
//                         const position = { lat: postLatitude, lng: postLongitude };
//                         new Marker({
//                             map: map,
//                             position: position,
//                             title: post.title, // Optional: show title on hover
//                         });
//                     }
//                 });
//
//             } catch (error) {
//                 console.error("Error loading Google Maps API: ", error);
//             }
//         };
//         initMap();
//     }, [searchParams]); // Add searchParams as a dependency
//
//     return (
//         <div className="h-screen w-screen relative">
//             <div className="h-full w-full" ref={mapRef} />
//         </div>
//     );
// }
//
// export default FullMapPage;