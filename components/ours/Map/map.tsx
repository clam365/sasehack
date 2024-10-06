"use client"

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            try {
                const loader = new Loader({
                    apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                    version: "weekly",
                });

                const { Map } = await loader.importLibrary("maps");
                const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

                const position = {
                    lat: 43.642693,
                    lng: -79.3871189,
                };

                const mapOptions: google.maps.MapOptions = {
                    center: position,
                    zoom: 17,
                    mapId: "MY_NEXTJS_MAPID",
                };

                const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

                new Marker({
                    map: map,
                    position: position,
                });
            } catch (error) {
                console.error("Error loading Google Maps API: ", error);
            }
        };

        initMap();
    }, []);

    return <div className="h-[600px]" ref={mapRef} />;
}
