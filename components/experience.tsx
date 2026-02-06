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
        <div className="flex calm-card gap-4 items-center">
            <div className="shrink-0 rounded-lg overflow-hidden">
                {image}
            </div>
            <div className="flex flex-col justify-center gap-1 w-full">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-primary">{title}</p>
                    <p className="text-text-tertiary text-xs uppercase">
                        {date}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-text-secondary">
                        {description}
                    </p>
                    <p className="text-xs text-text-tertiary uppercase">
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
}
