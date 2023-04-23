import Image from "next/image";
import C from "@/public/c.png";
import RUST from "@/public/rust.png"

export default function About() {
    return (
        <>
            <main className="">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Experinces</h1>
                <div>
                    <Image src={C} alt="code v c" sizes="900px"></Image>
                </div>
                <div>
                    <Image src={RUST} alt="code v rust" sizes="500px"></Image>
                </div>
            </main>
        </>
    );
}