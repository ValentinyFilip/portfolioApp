import React from 'react';
import Link from 'next/link';
import githubSVG from "@/public/github-mark.svg";
import linkedinSVG from "@/public/icons8-linkedin.svg";
import Image from "next/image";

const navigation = [
    {name: 'GitHub', href: 'https://github.com/ValentinyFilip', icon: githubSVG},
    {name: 'Linkedin', href: 'https://www.linkedin.com/in/filip-valent%C3%ADny-016524240/', icon: linkedinSVG},
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarVertical() {

    return (
        <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg justify-end">
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} target="_blank" >
                    <Image src={item.icon} alt={item.name} width={64} height={64}/>
                </Link>
            ))}
        </nav>
    );
}