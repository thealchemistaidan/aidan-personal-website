import { ReactNode } from 'react';

type color = 'blue' | 'orange' | 'green';

export function Badge({
    children,
    color,
    className,
}: {
    children: ReactNode;
    color: color;
    className?: string;
}) {
    return (
        <span
            className={`${className} w-fit inline px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent rounded-md`}
        >
            {children}
        </span>
    );
}
