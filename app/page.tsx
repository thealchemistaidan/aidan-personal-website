import { Header } from '@/app/sections/header';
import { Education as EducationSection } from '@/app/sections/education';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';

export default function Home() {
    return (
        <main className="py-8 w-full mx-auto flex flex-1 flex-col px-4 lg:px-12 gap-8 overflow-x-hidden">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center gap-6">
                <EducationSection />
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    );
}
