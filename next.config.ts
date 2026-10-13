import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Phones get phone-sized files. No 3840px images.
    deviceSizes: [360, 414, 640, 828, 1080, 1280],
    imageSizes: [96, 160, 256, 384],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
