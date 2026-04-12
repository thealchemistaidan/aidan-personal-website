'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full border-b border-border-light bg-background">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between lg:px-12 px-5 py-4 w-full">
                <Link
                    href="/"
                    className="text-text-primary font-semibold text-base hover:text-accent transition-colors duration-200"
                >
                    Aidan Gurung
                </Link>
                <div className="flex items-center gap-4">
                    <Link
                        href="/habits"
                        className={`text-sm font-medium transition-colors duration-200 ${pathname === '/habits' ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
                    >
                        Habits
                    </Link>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/aidan-gurung-29649219a/
                            "
                            className="flex items-center justify-center text-text-secondary hover:text-accent transition-colors ease-out duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 50 50"
                            >
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                        <a
                            href="mailto:aidangurung1@gmail.com"
                            className="flex items-center justify-center text-text-secondary hover:text-accent transition-colors ease-out duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
