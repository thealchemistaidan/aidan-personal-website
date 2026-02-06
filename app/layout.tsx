import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { Navbar } from '@/components/navbar';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Evan Ferreira',
    description:
        'Business student passionate about software, startups, and side quests.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased min-h-screen flex flex-col relative`}
                style={{ fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}
            >
                {children}
                <Navbar />
                <Analytics />
            </body>
        </html>
    );
}
