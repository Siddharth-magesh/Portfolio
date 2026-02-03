export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddharth Magesh",
    url: "https://siddharthmagesh.com",
    image: "https://siddharthmagesh.com/profile-image.jpg",
    sameAs: [
      "https://github.com/Siddharth-Magesh",
      "https://linkedin.com/in/siddharth-magesh",
      "https://huggingface.co/siddharth-magesh",
      "https://www.kaggle.com/siddharthmagesh",
      "https://devfolio.co/@SiddharthMagesh",
      "https://dev.to/siddharth_magesh_e12b8505",
      "https://medium.com/@siddharthmagesh007",
    ],
    jobTitle: "AI Researcher",
    worksFor: {
      "@type": "Organization",
      name: "Velammal Engineering College",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "IIT Madras",
        url: "https://www.iitm.ac.in/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Velammal Engineering College",
        url: "https://velammal.edu.in/",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning",
      "Generative AI",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
    description:
      "AI Researcher specializing in Natural Language Processing, Computer Vision, and Generative AI systems. Pursuing advanced research toward Artificial General Intelligence.",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Siddharth Magesh Portfolio",
    url: "https://siddharthmagesh.com",
    description:
      "Professional portfolio of Siddharth Magesh, AI Researcher specializing in NLP, Computer Vision, and Generative AI.",
    author: {
      "@type": "Person",
      name: "Siddharth Magesh",
    },
    publisher: {
      "@type": "Person",
      name: "Siddharth Magesh",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ArticleJsonLdProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  url,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: "Siddharth Magesh",
      url: "https://siddharthmagesh.com",
    },
    publisher: {
      "@type": "Person",
      name: "Siddharth Magesh",
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface ProjectJsonLdProps {
  name: string
  description: string
  url: string
  repositoryUrl?: string
  technologies?: string[]
}

export function ProjectJsonLd({
  name,
  description,
  url,
  repositoryUrl,
  technologies,
}: ProjectJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    author: {
      "@type": "Person",
      name: "Siddharth Magesh",
    },
    ...(repositoryUrl && {
      codeRepository: repositoryUrl,
    }),
    ...(technologies && {
      programmingLanguage: technologies,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
