"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SavedButton from "@/app/dashboard/components/SavedButton";
import ProfileButton from "@/app/dashboard/components/ProfileButton";
import SearchBar from "@/app/dashboard/components/Searchbar";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {Globe, HeartHandshake} from "lucide-react";

export const DashboardNavBar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(true);
    const controls = useAnimation();

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) { // Add a threshold of 50px
            setScrollingUp(false);
        } else if (currentScrollY < lastScrollY) {
            setScrollingUp(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        if (scrollingUp) {
            controls.start({y: 0}).then();
        } else {
            controls.start({y: "-100%"}).then();
        }
    }, [scrollingUp, controls]);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={controls}
            transition={{ type: "tween", duration: 0.3 }}
            className="bg-white p-6 fixed w-full top-0 z-50"
        >
            <div className="text-black justify-between flex items-center m-auto">
                <div className={"flex items-center"}>
                    <Link href={"/dashboard"} className={"flex gap-x-2.5 items-center"}>
                        <Image src={"/wildscape_logo_green.png"} alt={"Logo"} width={40} height={40}/>
                        <h1 className=" text-[#a7db42] text-xl">Wildscape</h1>
                    </Link>
                    <Link href={"/create"}>
                        <div className="cursor-pointer ml-6 mt-1">
                            <h2 className="relative group text-md font-semibold hidden lg:flex">
                                Create
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                            </h2>
                        </div>
                    </Link>
                </div>


                <SearchBar/>

                <div className="flex gap-x-3 items-center mr-4">
                    <Link href={"/support"}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <HeartHandshake className={"h-9 w-9 hover:text-[#a7db42] transition "}/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Get Involved
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </Link>
                    <div>
                        <Link href={"/full-map"}>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Globe className={"h-9 w-9 hover:text-[#a7db42] transition "}/>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Map!
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                    </div>
                    <SavedButton/>
                    <ProfileButton/>
                </div>

            </div>
        </motion.nav>
    );
};
