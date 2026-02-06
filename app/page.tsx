import { Header } from '@/app/sections/header';
import { Experience as ExperienceSection } from '@/app/sections/experience';
import { Projects as ProjectsSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';

export default function Home() {
    return (
        <main className="lg:py-16 py-8 lg:max-w-5xl mx-auto flex flex-1 flex-col lg:px-8 px-5 gap-12">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center gap-8">
                <ExperienceSection />
                <ProjectsSection />
            </div>
            <Footer />
        </main>
    );
}
