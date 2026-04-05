import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',       // Static HTML generation — Googlebot reads full content
  trailingSlash: false,
  images: {
    unoptimized: true,    // Required for static export (no Next.js image server)
  },
}

export default nextConfig
