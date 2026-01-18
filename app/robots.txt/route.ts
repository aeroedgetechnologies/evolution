import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://energyworld.ltd/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1

# Disallow admin or private areas if any
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /about/
Allow: /services/
Allow: /parts-tooling/
Allow: /references/
Allow: /partners/
Allow: /news/
Allow: /contact/
Allow: /career/`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
