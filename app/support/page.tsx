"use client"
import { DashboardNavBar } from "@/app/dashboard/components/DashboardNavbar";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';

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
                        <motion.div className="inline-flex items-center pt-20 gap-2">
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

                        <p>Chris Lam, Jeremy Kurtz, Brandon Yeu, Arnav Mishra</p>


                    </div>
                </div>
            </div>
        </div>
    );
}
