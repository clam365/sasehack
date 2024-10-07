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
        <div className="h-screen">
            <DashboardNavBar />
            <div className="flex h-full">

                <Image
                    width={1080}
                    height={540}
                    className="hidden lg:block lg:w-1/2 lg:h-full absolute object-cover"
                    aria-label="A mailbox that says Donate inside a national park"
                    src='/support/donation.jpg'
                    alt="donation mailbox"
                />

                <div className="absolute top-0 right-0 bg-white w-full lg:w-1/2 h-full overflow-y-auto">
                    <div className="pt-28 px-14 text-xl">
                        <span className="font-bold  text-3xl lg:text-4xl inline-block pb-5">
                            How to
                            <span className="text-matchaGreen inline"> support </span>
                            parks!
                        </span>
                        <h1 className="font-bold mb-2">Donations</h1>
                        <p>We don&#39;t accept donations, but the National Park Foundation does! Please proceed to
                            their <a
                                href={"https://www.nationalparks.org/other-ways-to-give#ways-to-give"}> <span
                                className="text-forestGreen">website</span></a> if you wish to make a donation to
                            a spot.
                            Alternatively if you want to support<a
                                href={"https://github.com/clam365/sasehack"}><span
                                className="text-forestGreen">&nbsp;Wildscape</span></a> itself you may star this
                            repository!
                        </p>
                        <br/>
                        <h1 className="font-bold mb-2">Volunteer</h1>
                        <p>
                            National parks offer volunteering programs where YOU can help with trail maintenance,
                            clean-up initiatives,
                            or visitor services! Additionally, there may be research projects with wildlife monitoring,
                            plant identification, etc.
                            <a
                                href={"https://www.nps.gov/subjects/volunteer/index.htm"}><span
                                className="text-forestGreen">&nbsp;Volunteer here</span></a>
                        </p>
                        <br/>
                        <h1 className="font-bold mb-2">Visit Responsibly</h1>
                        <p>
                            When visiting national parks, practice responsible tourism by following park rules,
                            staying on marked trails, respecting wildlife, and minimizing your environmental
                            impact.
                        </p>
                        <br/>
                        <h1 className="font-bold mb-2 ">Advocate for Legislation</h1>
                        <p>
                            Whether you are 18+ or not, you have the power to raise awareness and advocate for
                            legislation that protects national parks by engaging in conversations and supporting
                            conservation campaigns. By signing petitions, attending public hearings, and encouraging
                            others to contact lawmakers, you can make a meaningful impact on preserving these natural
                            spaces for future generations.
                        </p>
                        <p className="pt-5 font-bold">Meet our Team Behind this Project</p>
                        <div className="flex flex-row items-center justify-center pt-10 w-full">
                            <AnimatedTooltip items={people}/>
                        </div>
                        <motion.div className="inline-flex items-center pt-5 gap-2">
                            <p className="inline">Thank you from the <span className="text-matchaGreen font-bold">Wildscape team</span>
                            </p>
                            <motion.div
                                className="size-fit inline"
                                animate={{rotate: 360}}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <FaStar className="fill-matchaGreen"/>
                            </motion.div>
                        </motion.div>

                        <p>Jeremy Kurtz, Chris Lam, Arnav Mishra, Brandon Yeu</p>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

