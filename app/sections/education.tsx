import Image from 'next/image';
import { Education as EducationComponent } from '@/components/education';

const EDUCATION = [
    {
        title: 'Oxford University',
        description: 'PhD in Education',
        image: (
            <Image
                width={40}
                height={40}
                src="/oxford.jpeg"
                alt="Oxford University Logo"
                className="rounded-lg"
            />
        ),
        gradDate: '2025 – 2028',
    },
    {
        title: 'Cambridge University',
        description: 'Masters in Education (MEd)',
        image: (
            <Image
                width={40}
                height={40}
                src="/cambridge.png"
                alt="Cambridge University Logo"
                className="rounded-lg"
            />
        ),
        gradDate: '2024 – 2025',
    },
    {
        title: 'The Cansbridge Fellowship',
        description: "Cansbridge Fellow '22",
        image: (
            <Image
                width={40}
                height={40}
                src="/cansbridge.jpeg"
                alt="Cansbridge Fellowship Logo"
                className="rounded-lg"
            />
        ),
        gradDate: '2022',
    },
    {
        title: "Queen's University",
        description: 'Bachelor of Education (BEd)',
        image: (
            <Image
                width={40}
                height={40}
                src="/queens.png"
                alt="Queen's University Logo"
                className="rounded-lg"
            />
        ),
        gradDate: '2019 – 2024',
    },
    {
        title: "Queen's University",
        description: 'Bachelor of Arts (Global Dev Studies)',
        image: (
            <Image
                width={40}
                height={40}
                src="/queens.png"
                alt="Queen's University Logo"
                className="rounded-lg"
            />
        ),
        gradDate: '2019 – 2024',
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
                    ),
                )}
            </div>
        </section>
    );
}
