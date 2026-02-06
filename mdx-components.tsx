import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
    // Style unordered lists
    ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside ml-4 space-y-1.5 my-3 text-text-primary" {...props}>
            {children}
        </ul>
    ),

    // Style list items
    li: ({ children, ...props }) => (
        <li className="text-base text-text-primary leading-relaxed" {...props}>
            {children}
        </li>
    ),

    // Style headings
    h1: ({ children, ...props }) => (
        <h1 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3 mt-8" {...props}>
            {children}
        </h1>
    ),

    // Style paragraphs
    p: ({ children, ...props }) => (
        <p className="mb-5 text-base text-text-primary leading-relaxed" {...props}>
            {children}
        </p>
    ),

    // Style blockquotes
    blockquote: ({ children, ...props }) => (
        <blockquote
            className="border-l-2 border-border-medium pl-4 my-4 text-base text-text-secondary"
            {...props}
        >
            {children}
        </blockquote>
    ),
};

export function useMDXComponents(): MDXComponents {
    return components;
}
