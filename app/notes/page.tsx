'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { verifyPassword } from './actions';

const NotesContent = dynamic(() => import('@/content/notes.mdx'));

export default function NotesPage() {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const valid = await verifyPassword(password);
        if (valid) {
            setAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    }

    if (authenticated) {
        return (
            <main className="max-w-[700px] mx-auto w-full px-5 lg:px-0 py-12">
                <NotesContent />
            </main>
        );
    }

    return (
        <main className="max-w-[700px] mx-auto w-full px-5 lg:px-0 py-12 flex flex-col items-center justify-center min-h-[60vh]">
            <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
                <label htmlFor="password" className="text-sm font-medium text-text-secondary">
                    Enter password to view notes
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(false);
                    }}
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-border-medium rounded-md bg-background text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    autoFocus
                />
                {error && (
                    <p className="text-sm text-red-500">Incorrect password.</p>
                )}
                <button
                    type="submit"
                    className="px-4 py-2 bg-text-primary text-white rounded-md font-medium hover:bg-accent transition-colors"
                >
                    Submit
                </button>
            </form>
        </main>
    );
}
