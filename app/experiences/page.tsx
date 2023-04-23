import Image from "next/image";

export default function About() {
    return (
        <>
            <main className="grid place-content-center">
                <h1>Experinces</h1>
                <div>
                    <h2>C</h2>
                    <Image src="./public/c.png" alt="code v c"></Image>
                </div>
                <div>
                    <h2>Rust</h2>
                    <Image src="./public/rust.png" alt="code v rust"></Image>
                </div>
            </main>
        </>
    );
}