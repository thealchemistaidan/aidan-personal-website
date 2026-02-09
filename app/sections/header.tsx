import Image from 'next/image';

export function Header() {
    return (
        <header className="flex lg:flex-row flex-col justify-center w-full gap-4 lg:gap-12 items-center">
            <div className="shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-bg-section border-2 border-border-light overflow-hidden shadow-sm">
                    <Image
                        src="/pfp.jpeg"
                        alt="Aidan Gurung"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
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
