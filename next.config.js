/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        IMAGES_URL: process.env.NEXT_PUBLIC_IMAGES_URL,
    },
  };
  
  module.exports = nextConfig;