'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    return (
        <div
            className="text-text-primary text-sm font-medium flex items-center bottom-8 left-1/2 -translate-x-1/2 
        calm-navbar w-fit py-3 px-5 gap-1 z-50"
        >
            <Link
                href="/"
                className={`px-3 py-1 rounded-md w-fit hover:text-accent transition-all ease-out duration-200 ${
                    pathname === '/' ? 'nav-link-active' : ''
                }`}
            >
                Home
            </Link>
            <Link
                href="/blog"
                className={`px-3 py-1 rounded-md hover:text-accent transition-all ease-out duration-200 ${
                    pathname.includes('/blog') ? 'nav-link-active' : ''
                }`}
            >
                Blog
            </Link>
        </div>
    );
}
