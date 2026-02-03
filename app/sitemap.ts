import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siddharthmagesh.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/research',
    '/experience',
    '/projects',
    '/leadership',
    '/hackathons',
    '/articles',
    '/contact',
  ]

  // Research project pages
  const researchPages = [
    '/research/ossarth',
    '/research/mterbs',
    '/research/ecofloater',
  ]

  // Project pages
  const projectPages = [
    '/projects/sentimatrix',
    '/projects/agrihub',
    '/projects/medinote-ai',
    '/projects/breathy-sweet',
    '/projects/crosslink',
    '/projects/life-connect',
    '/projects/vec-website',
    '/projects/yrc-website',
  ]

  // Experience pages
  const experiencePages = [
    '/experience/gradgear',
    '/experience/inzpire-solutions',
    '/experience/scrapify',
    '/experience/vec-website',
  ]

  // Leadership pages
  const leadershipPages = [
    '/leadership/webops',
    '/leadership/youth-red-cross',
  ]

  // Article pages
  const articlePages = [
    '/articles/agi-next-step-humanity',
    '/articles/ai-operating-systems-future',
    '/articles/ai-replacing-humans-jobs',
    '/articles/ai-sports-commentary-future',
  ]

  const currentDate = new Date().toISOString()

  // Combine all pages with their metadata
  const allPages = [
    // Static pages (higher priority)
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    // Research pages
    ...researchPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Project pages
    ...projectPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Experience pages
    ...experiencePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Leadership pages
    ...leadershipPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Article pages
    ...articlePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return allPages
}
