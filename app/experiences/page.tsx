import Image from "next/image";
import C from "@/public/c.png";
import RUST from "@/public/rust.png"

export default function About() {
    return (
        <>
            <main className="">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Experinces</h1>
                <div>
                    <h2 className="text-4xl font-bold dark:text-white">C</h2>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">I have the most experience in C</p>
                    <Image src={C} alt="code v c" sizes="900px"></Image>
                </div>
                <div>
                    <h2 className="text-4xl font-bold dark:text-white">RUST</h2>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Rust is the language that i aspire to get job in</p>
                    <Image src={RUST} alt="code v rust" sizes="500px"></Image>
                </div>
            </main>
        </>
    );
}