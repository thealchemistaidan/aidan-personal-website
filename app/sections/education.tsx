import { Education as EducationComponent } from '@/components/education';

const EDUCATION = [
    {
        title: "Queen's University",
        description: 'Bachelor of Commerce, Smith School of Business',
        image: (
            <div className="w-10 h-10 rounded-lg bg-bg-section border border-border-light flex items-center justify-center">
                <span className="text-sm font-semibold text-text-secondary">Q</span>
            </div>
        ),
        gradDate: 'GRADUATING APR 2028',
    },
];

export function Education() {
    return (
        <section className="flex lg:flex-1 w-full flex-col gap-4">
            <h2 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mt-2">
                EDUCATION
            </h2>
            <div className="grid grid-cols-1 auto-rows-[1fr] gap-4">
            {EDUCATION.map(
                ({ title, description, image, gradDate }, index) => (
                    <EducationComponent
                        key={index}
                        title={title}
                        description={description}
                        image={image}
                        gradDate={gradDate}
                    />
                )
            )}
            </div>
        </section>
    );
}
