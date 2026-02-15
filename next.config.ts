import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "https://standardresume.co/r/wilmoore",
      },
    ];
  },
};

export default nextConfig;
