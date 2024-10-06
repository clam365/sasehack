import Link from "next/link";

export const Footer = () => {
    return (
        <div>
            <hr className={"text-white"}/>
            <section
                id={""}
                className={"group hover:bg-[#a7db42] bg-black transition text-white p-20 justify-between flex items-center"}
            >
                <div className={"text-white group-hover:text-black"}>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU
                        can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>
                        <Link
                            href={""}
                            className={"transition-colors duration-10 rounded-md p-2 hover:!text-white group-hover:text-black"}
                        >
                            Join newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </div>

        /*
        <div>
            <hr className={"text-white"}/>
            <section
                id={""}
                className={"group hover:bg-[#a7db42] bg-black transition text-white p-20 justify-between flex items-center"}
            >
                <div className={"text-white group-hover:text-black"}>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU
                        can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>
                        <Link
                            href={""}
                            className={"transition-colors duration-0 group-hover:text-black hover:text-white"}
                        >
                            Join newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </div>

         */

        /*<div>
            <hr className={"text-white"}/>
            <section
                id={""}
                className={"group hover:bg-[#a7db42] bg-black transition text-white p-20 justify-between flex items-center"}
            >
                <div className={"text-white group-hover:text-black"}>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU
                        can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>
                        <Link
                            href={""}
                            className={"transition-colors duration-200 hover:text-white group-hover:text-black"}
                        >
                            Join newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </div>
         */

        /*<div>
            <hr className={"text-white"}/>
            <section
                id={""}
                className={"hover:bg-[#a7db42] bg-black transition text-white p-20 justify-between flex items-center"}
            >
                <div>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU
                        can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>
                        <Link
                            href={""}
                            className={"transition-colors duration-200 text-white group-hover:text-black hover:text-black"}
                        >
                            Join newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </div>

         */
        /*
        <div>
            <hr className={"text-white"}/>
            <section
                id={""}
                className={"hover:bg-[#a7db42] bg-black transition text-white hover:text-black p-20 justify-between flex items-center"}
            >
                <div>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU
                        can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>
                        <Link href={""} className={"transition-colors duration-200 text-white hover:text-black"}>
                            Join newsletter
                        </Link>
                        </div>
                    </div>
                </section>
            </div>
            */
        /*<div>
            <hr className={"text-white"}/>
            <section id={""} className={"hover:bg-[#a7db42] bg-black transition text-white hover:text-black p-20 justify-between flex items-center"}>
                <div>
                    <h1 className={"text-5xl lg:text-6xl font-light"}>Join our newsletter</h1>
                    <p className={"text-xl lg:text-3xl mt-6 lg:w-[70%]"}>Stay up to date with new spots and see how YOU can be involved to help support our cause!</p>
                    <div className={"mt-6 flex gap-x-5 text-2xl underline underline-offset-2"}>

                        <Link href={""} className={"hover:text-white transition"}>
                            Join newsletter
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        */
    )
}