"use client"

import React from 'react';
import Link from 'next/link';
import {BsGithub, BsLinkedin} from "react-icons/bs";

const navigation = [
    {name: 'GitHub', href: 'https://github.com/ValentinyFilip', icon: BsGithub},
    {name: 'Linkedin', href: 'https://www.linkedin.com/in/filip-valent%C3%ADny-016524240/', icon: BsLinkedin},
];

export default function NavbarVertical() {

    return (
        <nav
            className="fixed top-0 left-0 h-screen w-16 hidden sm:flex flex-col bg-white dark:bg-gray-900 shadow-lg justify-end">
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} target="_blank">
                    <item.icon size="50px"/>
                </Link>
            ))}
        </nav>
    );
}