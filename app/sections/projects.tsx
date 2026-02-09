'use client';

import { useState, useRef, useEffect } from 'react';
import { Project } from '@/components/project';

const PROJECTS = [
    {
        name: 'Local Reach',
        description:
            'Local Reach uses AI to replace TV commercial breaks in restaurants & bars with more targeted ads.',
        link: 'https://www.thelocalreach.ca/',
        badges: ['ACQUIRED', 'COMPUTER VISION', 'MACHINE LEARNING'],
        image: '/localreach.jpeg',
    },
    {
        name: 'Monkey Music',
        description:
            'Download every song from your Spotify playlist, offline and free.',
        link: 'https://github.com/Evan-Ferreira/monkey-music',
        badges: ['MOBILE APP', 'FULL STACK'],
        image: '/monkeymusic.png',
    },
    {
        name: 'Stumble',
        description: 'Leetcode platform for dating.',
        link: 'https://github.com/Evan-Ferreira/Stumble_HackTheHill2024',
        badges: ['WEB APP', 'FULL STACK'],
        image: '/stumble.png',
    },
];

const MOBILE_COUNT = 2;
const DESKTOP_COUNT = 4;

export function Writing() {
    const [showAll, setShowAll] = useState(false);
    const extraRef = useRef<HTMLDivElement>(null);
    const [extraHeight, setExtraHeight] = useState(0);
    const [initialCount, setInitialCount] = useState(MOBILE_COUNT);

    useEffect(() => {
        const updateCount = () => {
            setInitialCount(window.innerWidth >= 1024 ? DESKTOP_COUNT : MOBILE_COUNT);
        };
        updateCount();
        window.addEventListener('resize', updateCount);
        return () => window.removeEventListener('resize', updateCount);
    }, []);

    useEffect(() => {
        if (extraRef.current) {
            setExtraHeight(extraRef.current.scrollHeight);
        }
    }, [initialCount]);

    const initialProjects = PROJECTS.slice(0, initialCount);
    const extraProjects = PROJECTS.slice(initialCount);

    return (
        <section className="flex flex-col gap-4 w-full lg:w-2/3">
            <h2 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider lg:mt-2">WRITING</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[1fr] gap-4">
                {initialProjects.map(
                    ({ name, description, link, badges, image }, index) => (
                        <Project
                            key={index}
                            name={name}
                            description={description}
                            link={link}
                            badges={badges}
                            image={image}
                        />
                    )
                )}
            </div>
            {extraProjects.length > 0 && (
                <>
                    <div
                        ref={extraRef}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: showAll ? extraHeight : 0, opacity: showAll ? 1 : 0 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[1fr] gap-4">
                            {extraProjects.map(
                                ({ name, description, link, badges, image }, index) => (
                                    <Project
                                        key={index + initialCount}
                                        name={name}
                                        description={description}
                                        link={link}
                                        badges={badges}
                                        image={image}
                                    />
                                )
                            )}
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={`flex items-center justify-center gap-2 py-0 text-sm text-text-tertiary hover:text-accent transition-all duration-300 ease-in-out cursor-pointer ${showAll ? 'mt-0' : '-mt-4'}`}
                    >
                        <span>{showAll ? 'Show less' : `Show more (${extraProjects.length})`}</span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ease-in-out ${showAll ? 'rotate-180' : ''}`}
                        >
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </>
            )}
        </section>
    );
}
