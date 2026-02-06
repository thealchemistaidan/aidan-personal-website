import Image from 'next/image';
import { Badge } from '@/components/badge';

export function Project({
    badges,
    name,
    description,
    link,
    image,
}: {
    badges: string[];
    name: string;
    description: string;
    link: string;
    image: string;
}) {
    return (
        <a
            href={link}
            className="calm-card flex flex-col gap-3 relative group overflow-hidden"
        >
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text-primary">{name}</p>
                <p
                    className="text-sm text-text-tertiary
                    group-hover:text-accent duration-200 transition-all ease-out"
                >
                    →
                </p>
            </div>
            <div className="flex gap-2 flex-wrap">
                {badges.map((badge) => (
                    <Badge key={badge} color="blue" className="uppercase">
                        {badge}
                    </Badge>
                ))}
            </div>
            <div className="relative w-full h-36 rounded-lg overflow-hidden bg-bg-section border border-border-light">
                <Image
                    src={image}
                    alt={`${name} screenshot`}
                    fill
                    className="object-cover"
                />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
                {description}
            </p>
        </a>
    );
}
