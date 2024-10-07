"use client";

import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import FullMapPage from "@/components/ours/Map/FullMapPage";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Import the useSearchParams hook

// Create a new component to handle search parameters
const FullMapWithParams = () => {
    const searchParams = useSearchParams(); // Get search parameters from the URL

    // Retrieve latitude and longitude from search parameters
    const latitude = searchParams.get('lat') ?? undefined; // Use nullish coalescing to set to undefined if null
    const longitude = searchParams.get('lng') ?? undefined; // Use nullish coalescing to set to undefined if null

    return (
        <FullMapPage latitude={latitude} longitude={longitude} />
    );
};

export default function Page() {
    return (
        <div className={""}>
            <DashboardNavBar />
            <section className={"mt-28 overflow-hidden "}>
                <Suspense fallback={<FullMapPage latitude={undefined} longitude={undefined} />}>
                    <FullMapWithParams /> {/* Wrap in Suspense */}
                </Suspense>
            </section>
        </div>
    );
}

// "use client";
//
// import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
// import FullMapPage from "@/components/ours/Map/FullMapPage";
// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react"; // Import the useSearchParams hook
//
// export default function Page() {
//     const searchParams = useSearchParams(); // Get search parameters from the URL
//
//     // Retrieve latitude and longitude from search parameters
//     const latitude = searchParams.get('lat') ?? undefined; // Use nullish coalescing to set to undefined if null
//     const longitude = searchParams.get('lng') ?? undefined; // Use nullish coalescing to set to undefined if null
//
//     return (
//         <div className={""}>
//             <DashboardNavBar />
//             <section className={"mt-28 overflow-hidden "}>
//                 <Suspense fallback={<FullMapPage latitude={undefined} longitude={undefined} />}>
//                     <FullMapPage latitude={latitude} longitude={longitude} /> {/* Pass parameters as props */}
//                 </Suspense>
//             </section>
//         </div>
//     );
// }