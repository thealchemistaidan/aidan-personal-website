import { type ReactNode } from 'react';

export function Education({
    image,
    gradDate,
    title,
    description,
}: {
    image: ReactNode;
    gradDate: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex calm-card gap-3 items-center overflow-hidden">
            <div className="shrink-0 rounded-lg overflow-hidden">{image}</div>
            <div className="flex flex-col justify-center gap-1 w-full min-w-0">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-primary">
                        {title}
                    </p>
                    <p className="text-text-tertiary text-xs uppercase">
                        {gradDate}
                    </p>
                </div>
                <p className="text-sm text-text-secondary">{description}</p>
            </div>
        </div>
    );
}
