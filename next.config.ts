import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phone on Wi‑Fi hits the Mac via LAN IP — without this, Next blocks
  // /_next/* JS and client features never hydrate on the real device.
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    "172.20.*.*",
    "172.21.*.*",
    "172.22.*.*",
    "172.23.*.*",
    "172.24.*.*",
    "172.25.*.*",
    "172.26.*.*",
    "172.27.*.*",
    "172.28.*.*",
    "172.29.*.*",
    "172.30.*.*",
    "172.31.*.*",
  ],
  images: {
    // Local photos in /public — Next optimizes them automatically
  },
};

export default nextConfig;
