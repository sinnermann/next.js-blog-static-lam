/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lumiere-a.akamaihd.net",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
      },
      {
        protocol: "https",
        hostname: "static.tvtropes.org",
      },
      {
        protocol: "https",
        hostname: "www.looper.com",
      },
    ],
  },
};

module.exports = nextConfig;
