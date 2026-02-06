import { Header } from '@/app/blog/header';
import { Metadata } from 'next';
import { getAllPostsFrontmatter } from '@/utils/posts';
import { Post } from '@/app/blog/article';
import { Footer } from '@/app/blog/footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.evanferreira.com'),
    title: 'Evan Ferreira - Writing',
    description: 'Software, philosophy, physics and everything in between',
};

export type MetadataProps = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Blog() {
    const posts = await getAllPostsFrontmatter();
    return (
        <main className="flex items-center flex-col lg:py-16 py-8 px-5 h-full min-h-screen">
            <Header />
            <section className="flex flex-col gap-4 max-w-2xl w-full mt-8">
                <h2 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">WRITING</h2>
                {posts
                    ?.filter((post) => {
                        if (
                            process.env.NEXT_PUBLIC_ENV === 'dev' ||
                            post.visibility === 'public'
                        ) {
                            return true;
                        }
                        return false;
                    })
                    .map((post) => (
                        <Post
                            key={post.slug}
                            slug={post.slug}
                            title={post.title}
                            subtitle={post.subtitle}
                            date={post.date}
                        />
                    ))}
            </section>
            <Footer />
        </main>
    );
}
