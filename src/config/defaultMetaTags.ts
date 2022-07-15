export const appHostname = process.env.VERCEL_URL || 'http://localhost';

const defaultMetaTags = {
    name: 'D1A — NextJS Template',
    title: 'D1A — NextJS Template',
    description: 'Open source NextJS template with TypeScript & Tailwind CSS.',
    image: `${appHostname}/og-image.jpeg`,
};

export default defaultMetaTags;
