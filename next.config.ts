import type { NextConfig } from 'next'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(isGitHubActions && {
    basePath: '/aghanaashini',
    assetPrefix: '/aghanaashini',
  }),
}

export default nextConfig
