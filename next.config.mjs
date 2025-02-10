/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pypjkgawoihjghosiuab.supabase.co",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;




