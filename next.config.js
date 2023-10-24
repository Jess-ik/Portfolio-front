/** @type {import('next').NextConfig} */
const { generateStaticParams } = require('next-locale');
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        IMAGES_URL: process.env.NEXT_PUBLIC_IMAGES_URL,
        RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,
        GTM_ID: process.env.NEXT_PUBLIC_GTM
    },
    experimental: {
        appDir: true,
    },
    async generateStaticParams() {
        // Renvoie les paramètres de routage en fonction de vos besoins
        return await generateStaticParams({
          locales: ['en', 'fr'], // Liste de vos langues
          defaultLocale: 'en', // Langue par défaut
          // Autres options de configuration
        });
      },
    
};

module.exports = nextConfig;