/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myanimelist.net",
        port: "",
        pathname: "/signature/QingqueE6.png",
      },
    ],
  },
};

export default nextConfig;
