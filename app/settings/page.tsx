import {DashboardNavBar} from "@/app/dashboard/components/DashboardNavbar";
import {CircleUserRound} from "lucide-react";

export default function page() {
    return (
        <div>
            <DashboardNavBar/>
            <div className={"mt-24"}>
                <div className={"mt-24"}>
                    <hr/>
                    <div className={"p-4 flex items-center justify-between"}>
                        <h1 className={"font-medium text-xl"}>Settings</h1>
                    </div>
                    <hr/>
                    <div className={"p-10"}>
                        <div className={"flex items-center justify-between"}>
                            <div>
                                <h1 className={"font-semibold mb-2 text-xl"}>Profile</h1>
                                <p>Update your photo and personal details here.</p>

                            </div>
                            <button
                                className={"text-white font-semibold p-3 rounded-full bg-[#a7db42] hover:bg-[#689917] transition"}>
                                Save
                            </button>
                        </div>
                        <hr className={"mt-2"}/>

                        <div className={"space-y-5 mt-4"}>
                            {/*TODO photo */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-28"}>Photo</h1>
                                <div className={"flex gap-x-2 items-center"}>
                                    <CircleUserRound className={"h-16 w-16"} />
                                    <input
                                        type="file"
                                        accept={"image/*"}
                                        placeholder="Photo"
                                        className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/*TODO username */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-20"}>Username</h1>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/*TODO password */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-20"}>Password</h1>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Password"
                                        className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                            {/*TODO email */}
                            <div className={"flex items-center "}>
                                <h1 className={"font-semibold text-lg mr-[7.5rem]"}>Email</h1>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full border-4 border-gray-300  rounded-xl p-3 mt-1"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}