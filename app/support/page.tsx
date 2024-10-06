"use client"
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";

const people = [
    {
        id: 1,
        name: "Jeremy Kurtz",
        designation: "Front End CS '26",
        image:"/profiles/jmkurtz.jpg",
    },
    {
        id: 2,
        name: "Chris Lam",
        designation: "Front End CS '26",
        image:
            "/profiles/Clam.jpg"
    },
    {
        id: 3,
        name: "Arnav Mishra",
        designation: "Back End CS '25",
        image:"/profiles/Amishra.jpg"

    },
    {
        id: 4,
        name: "Brandon Yeu",
        designation: "Back End CS '26",
        image:"/profiles/Byeu.jpg",
    },


];

export default function Page() {
    return (
        <div> {/* Set the height of the outer div to full screen */}
            <DashboardNavBar />
            <div className="flex h-full">
                <Image
                    width={1080}
                    height={540}
                    className="absolute object-cover w-full h-full" // Cover the full div
                    aria-label="A mailbox that says Donate inside a national park"
                    src='/support/donation.jpg'
                    alt="donation mailbox"
                />
                <div className={"absolute top-0 right-0 bg-white w-1/2 h-full"}>
                    <div className={"pt-40 px-14 text-xl"}>
                        <span className={"font-bold text-4xl inline-block pb-5"}>
                            How to
                            <span className={"text-matchaGreen inline"}> support </span>
                            us!
                        </span>

                        <p>We don&#39;t accept donations, but the National Park Foundation does! Please proceed to their <a
                            href={"https://www.nationalparks.org/other-ways-to-give#ways-to-give"}> <span
                            className={"text-forestGreen"}>website</span></a> if you wish to make a donation to a <span className={"text-matchaGreen"}>spot</span>.
                            Alternatively if you want to support Wildscape itself you may star this repository on <a
                                href={"https://github.com/clam365/sasehack"}><span
                                className={"text-forestGreen"}>Github</span></a>!
                        </p>
                        <p className={"pt-5 font-bold"}>Meet the team:</p>
                        <div className={"flex flex-row items-center justify-center pt-10 w-full"}>
                            <AnimatedTooltip items={people}/>
                        </div>
                        <motion.div className="inline-flex items-center pt-5 gap-2">
                            <p className="inline">Thank you from the <span className={"text-matchaGreen font-bold"}>Wildscape team</span></p>
                            <motion.div
                                className="size-fit inline"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <FaStar className="fill-matchaGreen" />
                            </motion.div>
                        </motion.div>

                        <p>Jeremy Kurtz, Chris Lam, Arnav Mishra, Brandon Yeu</p>


                    </div>
                </div>
            </div>
        </div>
    );
}
