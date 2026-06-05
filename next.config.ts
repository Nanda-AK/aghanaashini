import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/aghanaashini',
  assetPrefix: '/aghanaashini',
}

export default nextConfig
