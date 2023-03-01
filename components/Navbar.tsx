import React from 'react';
import Link from 'next/link';

const navigation = [
    {name: '// Home', href: '/', current: true},
    {name: '// About', href: '/about', current: false},
    {name: '// Blog', href: '/blog', current: false},
    {name: '// Experiences', href: '/experiences', current: false},
    {name: '// Contacts', href: '/contacts', current: false},
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <nav className="">
            <h1>Valentiny Filip</h1>
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} className={classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "px-3 py-2 rounded-md text-sm font-medium")}>{item.name}</Link>
            ))}
        </nav>
    );
}