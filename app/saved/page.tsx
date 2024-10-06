import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";

export default function page() {
    return (
        <div>
            <DashboardNavBar/>
            <div className={"mt-24"}>
                <hr/>
                <div className={"p-4 flex items-center justify-between"}>
                    <h1 className={"font-medium text-xl"}>View Your Saved Spots</h1>
                </div>
                <hr/>
            </div>
        </div>
    )
}