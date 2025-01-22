/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  trailingSlash: true, // Optional, but recommended for GitHub Pages
};

export default nextConfig;
