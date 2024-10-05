"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import {ArrowDown} from "lucide-react";

export default function StartPage() {
    // Animation configuration for images
    const imageVariants = {
        hidden: { opacity: 0, y: 20 }, // Start hidden and 20 pixels down
        visible: { opacity: 1, y: 0 },  // End at full opacity and original position
    };

    // Animation configuration for text
    const textVariants = {
        hidden: { opacity: 0, y: 20 }, // Start hidden and 20 pixels down
        visible: { opacity: 1, y: 0 },  // End at full opacity and original position
    };

    const arrowVariants = {
        bounce: {
            y: [0, -10, 0], // Bouncing effect
            transition: {
                duration: 0.7,
                repeat: Infinity, // Repeat indefinitely
                ease: "easeInOut",
            },
        },
    };

    return (
        <section
            id="/"
            className="relative flex items-center justify-center h-screen overflow-hidden"
        >
            {/* Centered Text with margin top */}
            <div className="-mt-80">
                <motion.h1
                    className="font-[600] text-6xl text-center mb-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0 }} // Fade in for title
                >
                    "I know a spot."
                </motion.h1>
                <motion.p
                    className="text-gray-400 font-[500] text-2xl text-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.2 }} // Fade in for subtitle
                >
                    Let's find new places to explore.
                </motion.p>
            </div>

            {/* Image Grid at the Bottom, half-hidden */}
            <div className="absolute -bottom-[15%] w-full grid grid-cols-1 lg:grid-cols-5 gap-x-2">
                {/* Each image wrapped in motion.div for animation */}
                <motion.div
                    className="flex justify-center mt-56"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: 0 }} // No delay for the first image
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
                    transition={{ duration: 0.3, delay: 0.2 }} // Staggered delay for the second image
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
                    transition={{ duration: 0.3, delay: 0.4 }} // Staggered delay for the third image
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
                    transition={{ duration: 0.3, delay: 0.6 }} // Staggered delay for the fourth image
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
                    transition={{ duration: 0.3, delay: 0.8 }} // Staggered delay for the fifth image
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
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            {/* Bouncing Arrow */}
            <motion.div
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 bg-[#a7db42] rounded-full p-1"
                variants={arrowVariants}
                animate="bounce"
            >
                <ArrowDown className="text-white h-8 w-8" />
            </motion.div>
        </section>
    );
}
