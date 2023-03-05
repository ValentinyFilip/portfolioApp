"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    {name: '// Home', href: '/'},
    {name: '// About', href: '/about'},
    {name: '// Blog', href: '/blog'},
    {name: '// Experiences', href: '/experiences'},
    {name: '// Contacts', href: '/contacts'},
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarHorizontal() {
    const pathName = usePathname();

    return (
        <nav className="flex justify-end">
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} className={classNames(pathName == item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium m-5")}>{item.name}</Link>
            ))}
        </nav>
    );
}