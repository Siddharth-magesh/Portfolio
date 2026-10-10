// Exact historical routes: no broad redirects that can capture current pages.
export const legacyRoutes = {
  "/": "/", "/about": "/about", "/research": "/research", "/projects": "/projects", "/experience": "/experience",
  "/contact": "/#contact", "/hackathons": "/archive/hackathons",
  "/leadership": "/organizations", "/leadership/webops": "/organizations#webops", "/leadership/youth-red-cross": "/organizations#youth-red-cross",
  "/articles": "/archive/articles",
  "/articles/agi-next-step-humanity": "/archive/articles/agi-next-step-humanity",
  "/articles/ai-operating-systems-future": "/archive/articles/ai-operating-systems-future",
  "/articles/ai-replacing-humans-jobs": "/archive/articles/ai-replacing-humans-jobs",
  "/articles/ai-sports-commentary-future": "/archive/articles/ai-sports-commentary-future",
  "/experience/gradgear": "/archive/experience/gradgear",
  "/experience/iitm-brain-centre": "/work/multimodal-neuroscience",
  "/experience/inzpire-solutions": "/work/retail-vision-systems",
  "/experience/scrapify": "/work/ecofloater", "/experience/vec-website": "/work/vec-website",
  "/projects/agrihub": "/work/agrihub", "/projects/breathy-sweet": "/work/breathy-sweet",
  "/projects/crosslink": "/work/crosslink", "/projects/life-connect": "/work/life-connect",
  "/projects/medinote-ai": "/work/medinote-ai", "/projects/sentimatrix": "/work/sentimatrix",
  "/projects/vec-website": "/work/vec-website", "/projects/yrc-website": "/work/yrc-website",
  "/research/ecofloater": "/work/ecofloater", "/research/mterbs": "/work/mterbs", "/research/ossarth": "/work/ossarth",
}
export const archiveRoutes = Object.keys(legacyRoutes).map(route => `/archive${route === "/" ? "" : route}`)
export const redirects = Object.entries(legacyRoutes).filter(([source, destination]) => source !== destination).map(([source, destination]) => ({ source, destination, permanent: true }))
