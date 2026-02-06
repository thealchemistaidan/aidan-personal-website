import { Badge } from '@/components/badge';
import Link from 'next/link';

export function Post({
    title,
    slug,
    subtitle,
    date,
    badges,
}: {
    title: string;
    slug: string;
    subtitle: string;
    date: string;
    badges?: string[];
}) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="flex flex-col calm-card py-6 justify-start gap-2 w-full overflow-hidden"
        >
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-text-primary">{title}</p>
                <p className="text-text-tertiary text-xs uppercase">{date}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm text-text-secondary">{subtitle}</p>
                <div className="flex gap-2">
                    {badges?.map((badge, index) => (
                        <Badge key={index} color="blue" className="uppercase">
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </Link>
    );
}
