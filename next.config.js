/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        IMAGES_URL: process.env.NEXT_PUBLIC_IMAGES_URL,
        RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
                port: '',
                pathname: '**',
                domains: ['strapi-h2ev.onrender.com'],
                formats: ["image/webp"],
          },
        ],
      },
  };
  
  module.exports = nextConfig;