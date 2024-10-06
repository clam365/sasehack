import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import PhotoCard from "@/components/ours/PhotoCard";

export default function Page() {
    return (
        <div>
            <DashboardNavBar/>
            <section className={"mt-28 px-10 "}>
                <div className={"grid grid-cols-5 gap-y-5 gap-x-4"}>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>

                </div>

            </section>
        </div>
    )
}