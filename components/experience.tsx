import { type ReactNode } from 'react';

export function Experience({
    image,
    date,
    location,
    title,
    description,
}: {
    image: ReactNode;
    date: string;
    location: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex calm-card !py-5 gap-4 items-center overflow-hidden">
            <div className="shrink-0 rounded-lg overflow-hidden">
                {image}
            </div>
            <div className="flex flex-col justify-center gap-1 w-full min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-text-primary truncate">{title}</p>
                    <p className="text-text-tertiary text-xs uppercase whitespace-nowrap shrink-0">
                        {date}
                    </p>
                </div>
                <div className="flex justify-between items-start gap-2">
                    <p className="text-sm text-text-secondary line-clamp-2">
                        {description}
                    </p>
                    <p className="text-xs text-text-tertiary uppercase whitespace-nowrap shrink-0">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
}
