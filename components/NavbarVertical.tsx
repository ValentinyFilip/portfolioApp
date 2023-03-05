import React from 'react';
import Link from 'next/link';

const navigation = [
    {name: '', href: '/'},
    {name: '', href: '/about'},
    {name: '', href: '/blog'},
    {name: '', href: '/experiences'},
    {name: '', href: '/contacts'},
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarVertical() {

    return (
        <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
            {navigation.map((item) => (
                <Link href={item.href} key={item.name} className={classNames("text-gray-300 hover:bg-gray-700 hover:text-white bg-black", "px-3 py-2 rounded-md text-sm font-medium m-5")}>{item.name}</Link>
            ))}
        </nav>
    );
}