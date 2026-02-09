import { Header } from '@/app/sections/header';
import { Education as EducationSection } from '@/app/sections/education';
import { Writing as WritingSection } from '@/app/sections/projects';
import { Footer } from '@/app/sections/footer';

export default function Home() {
    return (
        <main className="py-4 lg:py-8 w-full mx-auto flex flex-1 flex-col px-4 lg:px-12 lg:gap-6 gap-4 overflow-x-hidden">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center gap-6">
                <EducationSection />
                <WritingSection />
            </div>
            <Footer />
        </main>
    );
}
