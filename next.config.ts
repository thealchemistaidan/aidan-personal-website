import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // The new static site lives in /public; these map clean URLs to its pages.
    async rewrites() {
        return [
            { source: '/', destination: '/home.html' },
            { source: '/writing', destination: '/writing.html' },
            { source: '/bookshelf', destination: '/bookshelf.html' },
            { source: '/about', destination: '/about.html' },
        ];
    },
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
    },
});

export default withMDX(nextConfig);
