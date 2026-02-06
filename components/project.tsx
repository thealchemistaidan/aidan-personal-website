import { Badge } from '@/components/badge';
import { TechBadge } from '@/components/tech-badge';

export function Project({
    badges,
    technologies,
    name,
    description,
    link,
}: {
    badges: string[];
    technologies: string[];
    name: string;
    description: string;
    link: string;
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
            <p className="text-sm text-text-secondary leading-relaxed">
                {description}
            </p>
            <div className="flex gap-1.5 flex-wrap mt-auto">
                {technologies.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                ))}
            </div>
        </a>
    );
}
