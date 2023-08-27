/** @type {import('next').NextConfig} */
const nextConfig = {exportPathMap: function () {
    return {
      '/': { page: '/' },
      // '/blog/nextjs': { page: '/blog/[post]/comment/[id]' },        // wrong
      'app/projects/1': { page: 'app/projects/[slug]' }, // correct
    }
  },}

module.exports = nextConfig
