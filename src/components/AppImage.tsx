import NextImage, { type ImageProps } from 'next/image'

const BASE = '/aghanaashini'

export default function AppImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === 'string' && src.startsWith('/') ? `${BASE}${src}` : src
  return <NextImage src={resolved} {...props} />
}
