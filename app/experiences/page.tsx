import Image from "next/image";
import C from "@/public/c.png";
import RUST from "@/public/rust.png"

export default function About() {
    return (
        <>
            <main className="">
                <h1>Experinces</h1>
                <div>
                    <h2>C</h2>
                    <Image src={C} alt="code v c"></Image>
                </div>
                <div>
                    <h2>Rust</h2>
                    <Image src={RUST} alt="code v rust"></Image>
                </div>
            </main>
        </>
    );
}