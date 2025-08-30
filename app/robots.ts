import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://energyworld.ltd/sitemap.xml',
    host: 'https://energyworld.ltd',
  }
}
