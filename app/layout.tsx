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
    title: 'Aidan Gurung',
    description:
        'PhD student at Oxford University, studying Education as a Rhodes Scholar.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <body
                className={`${inter.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
                style={{
                    fontFamily:
                        'var(--font-inter), Inter, system-ui, sans-serif',
                }}
            >
                <Navbar />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
