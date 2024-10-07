"use client";
import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import FullMapPage from "@/components/ours/Map/FullMapPage";


export default function Page() {
    return (
        <div className={""}>
            <DashboardNavBar/>
            <section className={"mt-28 overflow-hidden "}>
                <FullMapPage/>
            </section>
        </div>
)
}