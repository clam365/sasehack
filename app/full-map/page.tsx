"use client";

import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import FullMapPage from "@/components/ours/Map/FullMapPage";
import { useSearchParams } from "next/navigation"; // Import the useSearchParams hook

export default function Page() {
    const searchParams = useSearchParams(); // Get search parameters from the URL

    // Retrieve latitude and longitude from search parameters
    const latitude = searchParams.get('lat');
    const longitude = searchParams.get('lng');

    return (
        <div className={""}>
            <DashboardNavBar />
            <section className={"mt-28 overflow-hidden "}>
                <FullMapPage latitude={latitude} longitude={longitude} /> {/* Pass parameters as props */}
            </section>
        </div>
    );
}