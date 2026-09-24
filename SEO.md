# SEO Strategy & Implementation

## Project

**Website:** Affan Shah Portfolio  
**Framework:** Next.js (App Router)  
**Deployment:** Vercel  
**Primary URL:** `https://affanshahai.vercel.app`

---

# 1. SEO Goals

The primary SEO goals of this portfolio are:

1. Make the website easily discoverable by search engines.
2. Clearly communicate who Affan Shah is and what he does.
3. Make individual projects discoverable through search.
4. Improve visibility for relevant developer and AI-related searches.
5. Make the website understandable to modern search engines and AI-powered search systems.
6. Provide useful metadata when pages are shared on social platforms.
7. Maintain good technical SEO and website performance.

---

# 2. Primary Search Topics

The website should naturally establish relevance around topics such as:

### Personal / Brand

- Affan Shah
- Affan Shah Developer
- Affan Shah AI Engineer
- Affan Shah Portfolio
- Affan Shah Full Stack Developer

### Technical

- AI Engineer
- AI Developer
- Full Stack Developer
- Full Stack AI Developer
- RAG Developer
- RAG Engineer
- Next.js Developer
- React Developer
- Python Developer
- Machine Learning Developer

### Technology

- Next.js
- React
- TypeScript
- Python
- FastAPI
- MongoDB
- RAG
- Vector Databases
- LLM
- AI Agents
- Machine Learning

> Keywords must be used naturally. Do not repeatedly insert keywords simply for SEO.

---

# 3. SEO Architecture

The website should have meaningful, crawlable URLs.

Recommended structure:

```text
/
├── about/
├── projects/
├── projects/pdf-rag/
├── projects/ai-agent/
├── projects/other-project/
├── blog/
└── contact/
```

The exact routes should match the pages that actually exist in the project.

Do not create fake pages only for SEO.

Each public page should have a clear purpose.

---

# 4. Root Metadata

The root `app/layout.tsx` should contain global metadata.

Example:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://affanshahai.vercel.app"),

  title: {
    default: "Affan Shah | AI Engineer & Full-Stack Developer",
    template: "%s | Affan Shah",
  },

  description:
    "Affan Shah is an AI and full-stack developer building intelligent web applications, RAG systems, and modern digital experiences.",

  keywords: [
    "Affan Shah",
    "Affan Shah AI Engineer",
    "AI Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Full Stack AI Developer",
    "RAG Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Machine Learning Developer",
  ],

  authors: [
    {
      name: "Affan Shah",
    },
  ],

  creator: "Affan Shah",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://affanshahai.vercel.app",
    title: "Affan Shah | AI Engineer & Full-Stack Developer",
    description:
      "AI and full-stack developer building intelligent applications and modern web experiences.",
    siteName: "Affan Shah",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Affan Shah - AI Engineer & Full-Stack Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
```

---

# 5. Page-Specific Metadata

Do not use identical metadata on every page.

Each important page should have its own:

- Title
- Description
- Canonical URL
- Relevant Open Graph information when required

Example:

## About

`app/about/page.tsx`

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Affan Shah, an AI and full-stack developer focused on building intelligent applications with Python, React, Next.js, and modern AI technologies.",
};
```

---

## Projects

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Affan Shah's AI, RAG, full-stack, and web development projects.",
};
```

---

## Individual Project

Example:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF RAG Chatbot",
  description:
    "An AI-powered information retrieval system that allows users to upload PDF documents and ask questions using retrieval-augmented generation.",
};
```

Every major project should eventually have its own page if the project contains enough meaningful information.

---

# 6. Sitemap

Create:

```text
app/sitemap.ts
```

Example:

```tsx
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://affanshahai.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
```

Only include routes that actually exist.

This should generate:

```text
https://affanshahai.vercel.app/sitemap.xml
```

The sitemap helps search engines discover the public URLs of the website.

---

# 7. Robots.txt

Create:

```text
app/robots.ts
```

Example:

```tsx
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://affanshahai.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

This should generate:

```text
https://affanshahai.vercel.app/robots.txt
```

The website should allow search engines to crawl public pages.

Private or admin routes should not be publicly indexed.

---

# 8. Open Graph

The website should have a proper Open Graph image.

Recommended file:

```text
app/opengraph-image.png
```

Recommended dimensions:

```text
1200 × 630
```

Suggested content:

```text
AFFAN SHAH

AI ENGINEER
FULL-STACK DEVELOPER

AI • RAG • NEXT.JS • PYTHON
```

The image should be simple and readable.

It will be used when the website is shared on platforms such as:

- LinkedIn
- WhatsApp
- Discord
- X
- Facebook
- Telegram

Open Graph metadata improves how shared links are presented.

---

# 9. Homepage SEO

The homepage is one of the most important pages.

The hero section should immediately communicate:

```text
Who am I?
What do I build?
What technologies do I use?
What problems do I solve?
```

Example positioning:

```text
AI Engineer & Full-Stack Developer

I build AI-powered applications, RAG systems,
and modern full-stack web experiences using
Python, Next.js, React, and modern AI technologies.
```

Avoid having a homepage that only contains:

```text
Hi, I'm Affan.

Welcome to my portfolio.
```

That provides very little contextual information to search engines.

---

# 10. Semantic HTML

Use semantic HTML wherever possible.

Recommended structure:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Avoid building the entire website using generic `<div>` elements.

Semantic structure makes the content easier to understand.

---

# 11. Heading Structure

Each page should have one clear primary heading.

Example:

```html
<h1>AI Engineer & Full-Stack Developer</h1>

<h2>About Me</h2>

<h2>Featured Projects</h2>

<h2>Technical Skills</h2>

<h2>Experience</h2>

<h2>Contact</h2>
```

Avoid jumping randomly between heading levels.

For example:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

The heading structure should represent the content hierarchy.

---

# 12. Project SEO

Projects should contain actual descriptions.

Avoid:

```text
PDF CHATBOT

[View Project]
```

Prefer:

```text
PDF Intelligence System

An AI-powered information retrieval system that allows
users to upload PDF documents and ask questions using
retrieval-augmented generation (RAG).
```

A project page should ideally contain:

- Project name
- Problem
- Solution
- Technologies
- Architecture
- Features
- Challenges
- Results
- GitHub repository
- Live demo
- Screenshots

This provides substantially more useful content than a project card alone.

---

# 13. Project URL Structure

Where appropriate, individual projects should have dedicated pages.

Example:

```text
/projects/pdf-rag
/projects/ai-agent
/projects/connexus
```

Each page can target a specific topic naturally.

Example:

```text
PDF RAG Chatbot
```

can discuss:

```text
Retrieval-Augmented Generation
PDF processing
Embeddings
Vector databases
Semantic search
LLMs
Python
FastAPI
Next.js
```

The content should explain how the technology is actually used.

Do not simply create keyword lists.

---

# 14. Internal Linking

Important pages should link to each other.

Example:

```text
Homepage
   ↓
Projects
   ↓
Project Details
   ↓
GitHub / Live Demo
```

The homepage should link to:

- About
- Projects
- Contact
- Important project pages

Project pages should link back to:

- Projects
- Related projects
- GitHub
- Live demo

Use descriptive link text.

Prefer:

```text
View my PDF RAG project
```

over:

```text
Click here
```

---

# 15. Image SEO

Every meaningful image should have useful `alt` text.

Bad:

```tsx
<img src="/project.png" alt="image" />
```

Better:

```tsx
<img
  src="/project.png"
  alt="PDF RAG chatbot interface showing document question answering"
/>
```

Decorative images can use an empty alt attribute when appropriate.

Images should also be properly sized and optimized.

Use Next.js `Image` where appropriate:

```tsx
import Image from "next/image";
```

---

# 16. Canonical URLs

Important public pages should have canonical URLs.

Example:

```tsx
export const metadata: Metadata = {
  alternates: {
    canonical: "https://affanshahai.vercel.app/about",
  },
};
```

For the homepage:

```tsx
alternates: {
  canonical: "https://affanshahai.vercel.app",
},
```

Canonical URLs help search engines understand the preferred URL when duplicate or similar URLs exist.

---

# 17. Structured Data

Add JSON-LD where it genuinely describes the page.

For the portfolio, a `Person` schema is appropriate.

Example:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Affan Shah",
  url: "https://affanshahai.vercel.app",
  jobTitle: "AI Engineer & Full-Stack Developer",
  sameAs: [
    "https://github.com/Codenama-007",
    // LinkedIn URL
    // Other professional profiles
  ],
};
```

Then:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
```

Only include information that is actually true.

Do not create fake structured-data information.

---

# 18. Social Profiles

Where applicable, connect the website to professional profiles.

Potential profiles:

- GitHub
- LinkedIn
- X
- YouTube
- Other professional platforms

Use the `sameAs` property in structured data where appropriate.

Example:

```tsx
sameAs: [
  "https://github.com/Codenama-007",
  "YOUR_LINKEDIN_URL",
  "YOUR_YOUTUBE_URL",
],
```

---

# 19. Performance SEO

SEO is not only metadata.

The website should also be fast.

Focus on:

- Optimized images
- Correct image dimensions
- Font optimization
- Avoiding unnecessary JavaScript
- Minimizing large client components
- Lazy loading where appropriate
- Efficient animations
- Avoiding unnecessary third-party scripts
- Good Core Web Vitals

Avoid turning every component into a Client Component.

Use Server Components by default when interactivity is not required.

---

# 20. Client Components

Do not add:

```tsx
"use client";
```

to every component.

Use Client Components only when the component needs browser-side functionality such as:

- `useState`
- `useEffect`
- Event handlers
- Browser APIs
- Interactive animations that require client-side execution

Keeping unnecessary components server-rendered can reduce client-side JavaScript.

---

# 21. Content Strategy

Technical SEO alone will not make the website authoritative.

The portfolio should eventually contain useful technical content.

Potential blog topics:

```text
How I Built a PDF RAG Chatbot

Understanding Retrieval-Augmented Generation

How Vector Databases Work

Building AI Applications with Next.js

Building a RAG Backend with FastAPI

How I Built an AI Travel Agent

Building AI Agents with LangGraph

Next.js Authentication and Protected Routes

My Journey Building AI-Powered Applications
```

The articles should contain genuine explanations and experiences.

Do not generate hundreds of low-quality pages simply to target keywords.

---

# 22. Personal Brand SEO

The website should establish a consistent identity.

Use the same name across:

- Website
- GitHub
- LinkedIn
- Other professional profiles

The website should clearly identify:

```text
Affan Shah
AI Engineer & Full-Stack Developer
```

Use this identity naturally throughout the website.

Do not repeatedly write:

```text
Affan Shah AI Engineer
Affan Shah AI Engineer
Affan Shah AI Engineer
```

Keyword stuffing is not the goal.

The goal is to make the website clearly communicate the entity and expertise behind it.

---

# 23. Search Engine Verification

After deployment, configure:

## Google Search Console

Add:

```text
https://affanshahai.vercel.app
```

Submit:

```text
/sitemap.xml
```

Monitor:

- Indexing
- Search queries
- Impressions
- Clicks
- CTR
- Indexed pages
- Crawl issues
- Search performance

---

## Bing Webmaster Tools

Add the website and submit the sitemap.

This provides another search-engine discovery and indexing channel.

---

# 24. AI Search / LLM Discoverability

The website should also be understandable to AI-powered search systems.

The best strategy is not adding an "AI SEO plugin."

Instead:

### Provide clear information

Clearly explain:

```text
Who is Affan Shah?
What does he build?
What technologies does he use?
What projects has he built?
What problems do his projects solve?
```

### Use structured content

Use:

- Clear headings
- Descriptive paragraphs
- Project pages
- Structured data
- Internal links
- Consistent naming
- Author information
- Links to verified professional profiles

### Build authority

Create useful technical content and project documentation.

The goal is for external sources and search systems to have enough reliable information to understand the person and their work.

---

# 25. Vercel Marketplace

Do not install an SEO service simply because it is available in the Vercel Marketplace.

The technical SEO foundation should primarily be implemented through:

```text
Next.js
    +
Metadata API
    +
Sitemap
    +
Robots
    +
Structured Data
    +
Good Content
    +
Performance
```

Use third-party services only when they solve a specific requirement.

---

# 26. SEO Checklist

## Technical SEO

- [ ] Metadata added to root layout
- [ ] Page-specific titles
- [ ] Page-specific descriptions
- [ ] Canonical URLs
- [ ] `sitemap.ts`
- [ ] `robots.ts`
- [ ] Open Graph metadata
- [ ] Open Graph image
- [ ] Structured data
- [ ] Semantic HTML
- [ ] Correct heading hierarchy
- [ ] Image alt text
- [ ] Optimized images
- [ ] Mobile responsive
- [ ] Fast page loading
- [ ] No unnecessary Client Components
- [ ] No broken links
- [ ] No accidental `noindex`

---

## Content SEO

- [ ] Clear homepage positioning
- [ ] About page
- [ ] Projects page
- [ ] Individual project pages
- [ ] Detailed project descriptions
- [ ] Technical skills explained naturally
- [ ] Internal linking
- [ ] Useful technical articles
- [ ] Consistent personal branding

---

## Search Engines

- [ ] Google Search Console configured
- [ ] Sitemap submitted to Google
- [ ] Bing Webmaster Tools configured
- [ ] Sitemap submitted to Bing
- [ ] Indexing checked
- [ ] Search queries monitored
- [ ] Crawl errors monitored

---

# 27. Recommended Implementation Order

Do not attempt everything at once.

## Phase 1 — Technical SEO

Implement:

```text
1. Root Metadata
2. Page Metadata
3. Sitemap
4. Robots
5. Canonical URLs
6. Open Graph
7. Open Graph Image
```

---

## Phase 2 — Content Structure

Implement:

```text
1. Semantic HTML
2. H1/H2/H3 structure
3. Better homepage copy
4. Project descriptions
5. Individual project pages
6. Internal linking
7. Image alt text
```

---

## Phase 3 — Structured Data

Implement:

```text
1. Person Schema
2. Website Schema where appropriate
3. Project-related structured data where appropriate
```

Only use schemas that accurately represent the content.

---

## Phase 4 — Performance

Optimize:

```text
1. Images
2. Fonts
3. Client Components
4. JavaScript
5. Animations
6. Third-party scripts
7. Core Web Vitals
```

---

## Phase 5 — Search & Authority

Set up:

```text
1. Google Search Console
2. Bing Webmaster Tools
3. Sitemap submission
4. Search monitoring
5. Technical blog
6. Project documentation
7. External professional profiles
```

---

# 28. Final SEO Philosophy

SEO should not mean:

```text
Add keywords
        ↓
Add more keywords
        ↓
Install SEO plugin
        ↓
Rank #1
```

The actual strategy should be:

```text
Technical foundation
        ↓
Crawlable website
        ↓
Clear information architecture
        ↓
Useful content
        ↓
Detailed project pages
        ↓
Good performance
        ↓
Structured data
        ↓
Search engine indexing
        ↓
Consistent publishing
        ↓
Authority
        ↓
Continuous improvement
```

The objective is to make the website useful to:

```text
Users
Search Engines
AI-powered Search Systems
Recruiters
Developers
Potential Clients
```

The website should never sacrifice user experience simply to insert keywords.

---

# 29. Target End State

The final portfolio should communicate the following clearly:

```text
Affan Shah
        ↓
AI Engineer & Full-Stack Developer
        ↓
AI Applications
RAG Systems
AI Agents
Full-Stack Applications
        ↓
Python
Next.js
React
TypeScript
FastAPI
Machine Learning
LLMs
Vector Databases
        ↓
Detailed Projects
        ↓
Technical Articles
        ↓
GitHub / LinkedIn / Professional Profiles
```

The result should be a technically optimized, content-rich personal website rather than a website that merely contains SEO metadata.