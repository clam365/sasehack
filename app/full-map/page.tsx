"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import FullMapPage from "@/components/ours/Map/FullMapPage";


export default function Page() {
    return (
        <div>
            <DashboardNavBar/>
            <section className={"mt-28 px-10 "}>
                <FullMapPage/>
            </section>
        </div>
)
}