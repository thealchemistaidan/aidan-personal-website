import Image from 'next/image';

export function Header() {
    return (
        <header className="flex lg:flex-row flex-col justify-center w-full gap-8 lg:gap-12 items-center">
            <div className="shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-bg-section border border-border-light overflow-hidden shadow-sm">
                    <svg
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                    >
                        <rect width="200" height="200" fill="#FAFAFA" />
                        <circle cx="100" cy="78" r="35" fill="#DFDFDF" />
                        <ellipse
                            cx="100"
                            cy="165"
                            rx="55"
                            ry="45"
                            fill="#DFDFDF"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col  gap-4 text-center lg:text-left">
                <p className="text-base text-text-secondary leading-relaxed max-w-xl">
                    Hey there! I'm Aidan, a PhD student at Oxford University,
                    studying Education as a Rhodes Scholar. Feel free to reach
                    out if your interested in startups, education, or global
                    development!
                </p>
            </div>
        </header>
    );
}
