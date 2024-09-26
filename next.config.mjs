/** @type {import('next').NextConfig} */
const nextConfig = {
     experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['mongoose'],
    serverActions: true, // Enable Server Actions feature
  },
  images: {
      remotePatterns: [
      {
          protocol: 'https',
        hostname: '*'
      },
        {
          protocol: 'http',
        hostname: '*'
        }
      ]
  }
};

export default nextConfig;
