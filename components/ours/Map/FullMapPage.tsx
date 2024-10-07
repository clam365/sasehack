"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import pb from "../../../lib/pocketbase"; // Assuming this is where PocketBase is initialized
import type { PhotoCard } from "@/types/photo";
import AdvancedMarkerElement = google.maps.marker.AdvancedMarkerElement;

export function FullMapPage(props: { latitude?: string; longitude?: string }) {
    const mapRef = React.useRef<HTMLDivElement>(null); // Initialize with HTMLDivElement type

    useEffect(() => {
        const initMap = async () => {
            if (mapRef.current) { // Ensure mapRef.current is not null before using it
                try {
                    // Fetch all posts with their coordinates
                    const result = await pb.collection('Post').getFullList<PhotoCard>();

                    const loader = new Loader({
                        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                        version: "weekly",
                    });

                    const { Map } = await loader.importLibrary("maps");
                    const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

                    // Use provided latitude and longitude or fallback to default position
                    const lat = props.latitude ? parseFloat(props.latitude) : 37.996163;
                    const lng = props.longitude ? parseFloat(props.longitude) : -82.127480;

                    const initialPosition = { lat, lng };

                    // Set map options
                    const zoomLevel = props.latitude && props.longitude ? 10 : 5; // Set zoom level based on validity of coordinates
                    const mapOptions: google.maps.MapOptions = {
                        center: initialPosition,
                        zoom: zoomLevel, // Adjust zoom level based on conditions
                        mapId: "MY_NEXTJS_MAPID",
                    };

                    // Initialize map
                    const map = new Map(mapRef.current, mapOptions); // mapRef.current should not be null here

                    // Add markers for each post with valid coordinates
                    result.forEach((post) => {
                        const postLatitude = parseFloat(post.latitude);
                        const postLongitude = parseFloat(post.longitude);

                        // Check if latitude and longitude are valid numbers
                        if (!isNaN(postLatitude) && !isNaN(postLongitude)) {
                            const position = { lat: postLatitude, lng: postLongitude };
                            new AdvancedMarkerElement({
                                map: map,
                                position: position,
                                title: post.title, // Optional: show title on hover
                                content: ,
                                gmpClickable: true,

                            });
                        }
                    });

                } catch (error) {
                    console.error("Error loading Google Maps API: ", error);
                }
            }
        };
        initMap();
    }, [props.latitude, props.longitude]); // Add latitude and longitude as dependencies

    return (
        <div className="h-screen w-screen relative">
            <div className="h-full w-full" ref={mapRef} />
        </div>
    );
}

export default FullMapPage;