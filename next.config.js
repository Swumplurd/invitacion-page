/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mx.habcdn.com",
        port: "",
        pathname: "/photos/business/medium/fachadas-casas-modernas-de-dos-plantas-en-esquina-1-457876.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
