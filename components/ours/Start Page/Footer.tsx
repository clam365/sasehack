import Link from "next/link";

export const Footer = () => {
    return(
        <div>
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

    )
}