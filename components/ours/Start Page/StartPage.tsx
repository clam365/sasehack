"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import {ArrowDown} from "lucide-react";
import { useRef } from "react";

export default function StartPage() {
    // Animation configuration for images
    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Animation configuration for text
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const arrowVariants = {
        bounce: {
            y: [0, -10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const smoothScrollTo = (target: HTMLElement, duration: number) => {
        const startPosition = window.pageYOffset; // Current scroll position
        const targetPosition = target.getBoundingClientRect().top + startPosition; // Target position
        const distance = targetPosition - startPosition; // Total distance to scroll
        let startTime: number | null = null; // Initialize start time

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime; // Set start time

            const timeElapsed = currentTime - startTime; // Calculate elapsed time
            const progress = Math.min(timeElapsed / duration, 1); // Calculate progress

            // Easing function (easeInOut)
            const ease = (t: number) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };

            // Scroll to position
            window.scrollTo(0, startPosition + distance * ease(progress));

            if (progress < 1) {
                requestAnimationFrame(animation); // Continue animation
            }
        };

        requestAnimationFrame(animation); // Start animation
    };
    // Ref for the next section
    const nextSectionRef = useRef(null);
    // Handle scroll to next section
    const handleArrowClick = () => {
        const targetElement = document.getElementById("about");
        if (targetElement) {
            smoothScrollTo(targetElement, 1000); // Adjust the duration as needed (in milliseconds)
        }
    };

    return (
        <section
            id="/"
            className="relative flex items-center justify-center h-screen overflow-hidden"
        >
            <div className="md:-mt-64">
                <motion.h1
                    className="font-[600] text-5xl lg:text-6xl text-center mb-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.5, delay: 0}}
                >
                    &#34;I know a spot.&#34;
                </motion.h1>
                <motion.p
                    className="text-gray-400 font-[500]  text-md lg:text-xl text-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    Let’s discover new spots to explore,
                    because<br/> &#34;knowing a spot&#34; can save a park.
                </motion.p>
            </div>

            <div className="absolute -bottom-[20%] w-full  grid-cols-1 lg:grid-cols-5 gap-x-2 hidden md:flex">
                <motion.div
                    className="flex justify-center mt-56"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay: 0}}
                >
                    <Image
                        src="/aurora.jpg"
                        alt="aurora"
                        width={400}
                        height={300}
                        className="rounded-xl mx-auto object-cover"
                    />
                </motion.div>
                <motion.div
                    className="flex justify-center mt-80"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay: 0.2}}
                >
                    <Image
                        src="/hike.jpg"
                        alt="hike"
                        width={400}
                        height={300}
                        className="rounded-xl mx-auto object-cover"
                    />
                </motion.div>
                <motion.div
                    className="flex justify-center mt-96"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay: 0.4}}
                >
                    <Image
                        src="/lake.jpg"
                        alt="lake"
                        width={400}
                        height={300}
                        className="rounded-xl mx-auto object-cover"
                    />
                </motion.div>
                <motion.div
                    className="flex justify-center mt-80"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay: 0.6}}
                >
                    <Image
                        src="/mountain.jpg"
                        alt="mountain"
                        width={400}
                        height={300}
                        className="rounded-xl mx-auto object-cover"
                    />
                </motion.div>
                <motion.div
                    className="flex justify-center mt-56"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.3, delay: 0.8}}
                >
                    <Image
                        src="/waterfall.jpg"
                        alt="waterfall"
                        width={400}
                        height={300}
                        className="rounded-xl mx-auto object-cover"
                    />
                </motion.div>
            </div>

            {/* White Fade Effect */}
            <div
                className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"/>
            {/* Bouncing Arrow */}
            <div className="flex justify-center items-end absolute inset-0 pointer-events-none">
                <motion.button
                    className="z-10 pointer-events-auto mb-4" // Adjust spacing with mb-4 (bottom margin)
                    variants={arrowVariants}
                    animate="bounce"
                    onClick={handleArrowClick}
                >
                    <div className={"bg-[#a7db42] rounded-full p-1"}>
                        <ArrowDown className="text-white h-8 w-8"/>
                    </div>
                </motion.button>
            </div>

            {/* Next Section to Scroll To */}
            <section ref={nextSectionRef} className="h-screen bg-gray-200 flex items-center justify-center">

            </section>
        </section>
    );
}
