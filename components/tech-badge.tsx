import React, { ReactNode } from 'react';

export function TechBadge({ children }: { children: ReactNode }) {
    return (
        <div className="text-xs text-text-tertiary bg-bg-section border border-border-light px-2 py-0.5 rounded-md">
            {children}
        </div>
    );
}
