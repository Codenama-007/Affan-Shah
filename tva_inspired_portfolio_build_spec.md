# TVA-Inspired Portfolio Website --- Build Specification

## 1. Creative Direction

Build the portfolio as a **retro-futuristic TVA-inspired developer
terminal** rather than a normal modern portfolio.

The visual language should be based on the two supplied references:

-   **Reference 1:** black technical grid, glowing amber/orange
    typography, large monospace headings, terminal-like labels,
    geometric UI icons, and a dense surveillance/control-room feeling.
-   **Reference 2:** compact amber monochrome panels/cards, old
    CRT/terminal UI, thin borders, small metadata labels, status
    indicators, and dashboard-like information density.

### Core mood

> **Temporal control room × developer workstation × retro terminal**

The site should feel like the visitor has entered an internal system
used to inspect a developer's projects, skills, experience, and
activity.

Do **not** make it a generic "Loki fan website." The portfolio must
remain clearly professional and developer-focused.

Use the references as visual inspiration rather than copying protected
logos, exact screenshots, or show assets.

------------------------------------------------------------------------

# 2. Design Principles

## Color system

Primary palette:

``` text
Background       #050505
Panel            #0B0B0B
Grid             #151515
Border           #4A4A4A
Primary Amber    #FF6A00
Bright Amber     #FF7A00
Muted Amber      #A94A12
Text             #E8E8E8
Muted Text       #777777
Success          #FF8A24
```

The dominant visual color should be **amber/orange on near-black**.

Avoid adding many modern gradient colors. The limitation is intentional.

## Typography

Use a monospace or typewriter-style font.

Recommended:

-   IBM Plex Mono
-   JetBrains Mono
-   Space Mono
-   Courier Prime

Use:

-   uppercase headings
-   generous letter spacing
-   small uppercase metadata
-   terminal-style labels
-   occasional blinking cursor
-   numbers and system IDs as visual elements

Example:

``` text
A579Y // 56PJK 890 L1130

ACTION LIST/////

1. OPTIONS
2. RUN PROGRAM
3. CLEAR CACHE
```

------------------------------------------------------------------------

# 3. Background

The entire application should sit on a dark technical grid.

Create the grid with CSS rather than using a large background image.

Example concept:

``` css
background-color: #050505;
background-image:
  linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
background-size: 24px 24px;
```

Add a subtle CRT effect:

-   scanlines
-   very light noise
-   slight vignette
-   subtle amber glow around important elements

Do not make the effect so strong that it damages readability.

------------------------------------------------------------------------

# 4. Global Layout

Use a dashboard/terminal layout instead of a conventional navbar.

Desktop:

``` text
┌────────────────────────────────────────────────────────────┐
│ SYSTEM ID          TVA-DEV // ACTIVE         TIME / STATUS │
├───────────────┬────────────────────────────────────────────┤
│               │                                            │
│ ACTION LIST   │                 MAIN VIEW                  │
│               │                                            │
│ > PROFILE     │                                            │
│ > PROJECTS    │                                            │
│ > SKILLS      │                                            │
│ > EXPERIENCE  │                                            │
│ > CONTACT     │                                            │
│               │                                            │
│ SYSTEM        │                                            │
│ STATUS        │                                            │
├───────────────┴────────────────────────────────────────────┤
│ TERMINAL // READY                         BUILD 01.2026    │
└────────────────────────────────────────────────────────────┘
```

On mobile, transform the sidebar into:

-   top command bar
-   collapsible menu
-   horizontal system status strip

The site must remain usable without animations.

------------------------------------------------------------------------

# 5. Navigation

Navigation should look like a **TVA control panel**, not a normal
website menu.

Suggested items:

``` text
01 // PROFILE
02 // PROJECTS
03 // SKILLS
04 // EXPERIENCE
05 // ACTIVITY
06 // CONTACT
```

Each item should have:

-   index number
-   label
-   small status marker
-   hover state
-   active state

Example:

``` text
01  PROFILE       ●
02  PROJECTS      ●
03  SKILLS        ●
04  EXPERIENCE    ●
05  ACTIVITY      ●
06  CONTACT       ●
```

Active item:

``` text
> 02 // PROJECTS  [ACTIVE]
```

------------------------------------------------------------------------

# 6. Hero / Profile Screen

The first screen should immediately establish the character of the
portfolio.

Suggested structure:

``` text
TEMPORAL AUTHORITY
DEVELOPER DATABASE

A579Y // AFFAN SHAH

FULL STACK DEVELOPER
AI / ML ENGINEER
RAG SYSTEM BUILDER

STATUS: ACTIVE
CLEARANCE: DEVELOPER
LOCATION: INDIA

[ ACCESS PROFILE ]
[ VIEW PROJECTS ]
```

Hero content should include:

-   name
-   developer role
-   short one-line positioning statement
-   current focus
-   system status
-   CTA buttons

Possible positioning:

> Building practical software systems at the intersection of full-stack
> development and AI.

Keep this concise.

------------------------------------------------------------------------

# 7. Profile Card

Create a terminal-style identity card.

Example:

``` text
┌───────────────────────────────────────┐
│ PERSONNEL RECORD                      │
├───────────────────────────────────────┤
│                                       │
│ NAME      AFFAN SHAH                  │
│ ROLE      AI / FULL STACK DEVELOPER   │
│ STATUS    ACTIVE                      │
│ STACK     PYTHON / REACT / NEXT.JS    │
│ AI        RAG / LLM / ML              │
│                                       │
│ RECORD: 001                           │
└───────────────────────────────────────┘
```

Include a portrait/avatar only if appropriate.

The avatar should look like a **personnel record** rather than a
social-media profile.

------------------------------------------------------------------------

# 8. Projects Section

This is the most important section.

The second supplied reference should directly influence the project
cards.

## Project-card philosophy

Do not use modern cards with:

``` text
image
title
description
button
```

Instead, create compact **system modules**.

Each project card should feel like a monitored program.

Example:

``` text
┌─────────────────────────────────────────┐
│ PROGRAM // 007                          │
│ STATUS: ACTIVE                          │
├─────────────────────────────────────────┤
│                                         │
│ PDF INTELLIGENCE SYSTEM                 │
│                                         │
│ RAG-powered PDF assistant built with    │
│ FastAPI, embeddings and vector search.  │
│                                         │
│ STACK                                   │
│ PYTHON / FASTAPI / REACT / RAG          │
│                                         │
│ [ INSPECT ] [ SOURCE ]                  │
└─────────────────────────────────────────┘
```

## Card visual rules

Each card should contain:

-   program number
-   project name
-   status
-   short description
-   technology list
-   action buttons
-   small decorative system symbols
-   optional miniature preview
-   progress/status indicator

Use amber borders and very subtle glow.

------------------------------------------------------------------------

# 9. Project Card Grid

Desktop:

``` text
┌─────────────────────┐  ┌─────────────────────┐
│ PROGRAM // 001      │  │ PROGRAM // 002      │
│                     │  │                     │
│ AI CODING ASSISTANT │  │ PDF CHATBOT         │
│                     │  │                     │
│ RAG / PYTHON /      │  │ FASTAPI / RAG /     │
│ MONGODB             │  │ REACT               │
│                     │  │                     │
│ [INSPECT]           │  │ [INSPECT]           │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐  ┌─────────────────────┐
│ PROGRAM // 003      │  │ PROGRAM // 004      │
│                     │  │                     │
│ CONNEXUS            │  │ ML CLASSIFIER       │
│                     │  │                     │
│ FLASK / SOCKET.IO   │  │ PYTHON / TENSORFLOW │
│                     │  │                     │
│ [INSPECT]           │  │ [INSPECT]           │
└─────────────────────┘  └─────────────────────┘
```

On mobile, cards become one column.

------------------------------------------------------------------------

# 10. Project Detail View

When the visitor selects a project, open a terminal/modal/detail route.

Example:

``` text
PROGRAM // 002
PDF INTELLIGENCE SYSTEM

STATUS: DEPLOYED
VERSION: 1.4.2

DESCRIPTION
--------------------------------------------------
A RAG-based application that allows users to upload
PDF documents and ask questions against their content.

ARCHITECTURE
--------------------------------------------------

UPLOAD
   ↓
DOCUMENT CLEANING
   ↓
CHUNKING
   ↓
EMBEDDINGS
   ↓
VECTOR SEARCH
   ↓
LLM RESPONSE

TECHNOLOGIES
--------------------------------------------------
PYTHON
FASTAPI
REACT
SQLALCHEMY
VECTOR SEARCH
LLM
RAG

[ LIVE DEMO ]
[ SOURCE CODE ]
[ CLOSE ]
```

This is a strong place to demonstrate actual engineering ability.

------------------------------------------------------------------------

# 11. Skills Section

Avoid a giant list of logos.

Present skills as a **system diagnostic panel**.

``` text
SYSTEM CAPABILITIES
====================

LANGUAGES
PYTHON       ████████████████  90%
JAVASCRIPT   █████████████     80%
TYPESCRIPT   ███████████       70%

FRONTEND
REACT        █████████████     80%
NEXT.JS      ███████████       70%
TAILWIND     █████████████     80%

BACKEND
FASTAPI      █████████████     80%
FLASK        ███████████       70%
SQL          ███████████       70%

AI SYSTEMS
RAG          █████████████     80%
LLM          ███████████       70%
ML           ██████████        65%
```

Do not treat these percentages as scientific measurements.

They are visual indicators only.

------------------------------------------------------------------------

# 12. AI / RAG Specialization Panel

Because AI engineering is a major part of the portfolio, give it a
dedicated module.

``` text
AI SYSTEMS DIVISION

RAG PIPELINES       [ONLINE]
VECTOR SEARCH       [ONLINE]
EMBEDDINGS          [ONLINE]
LLM INTEGRATION     [ONLINE]
LANGGRAPH           [BUILDING]
AGENT SYSTEMS       [BUILDING]
```

Add a small architecture visualization:

``` text
USER
 ↓
QUERY
 ↓
RETRIEVER
 ↓
VECTOR DATABASE
 ↓
CONTEXT
 ↓
LLM
 ↓
RESPONSE
```

This section should make the site feel like the portfolio belongs to
someone who understands systems, not just UI.

------------------------------------------------------------------------

# 13. Experience Section

Display experience as a chronological system log.

``` text
CAREER TIMELINE
===============

2026
│
├── SOFTWARE DEVELOPMENT
│   React / Next.js / FastAPI
│
├── AI SYSTEMS
│   RAG / LangGraph / LLM
│
└── PROJECT DEVELOPMENT
    Production-oriented applications

2025
│
├── MACHINE LEARNING
│   Scikit-learn / TensorFlow
│
└── FULL STACK DEVELOPMENT
    Flask / React / APIs
```

Use terminal log aesthetics.

------------------------------------------------------------------------

# 14. Activity / System Log

Add a small section that makes the portfolio feel alive.

Example:

``` text
SYSTEM LOG

[16:03:21] INITIALIZING PORTFOLIO
[16:03:22] LOADING PROJECT DATABASE
[16:03:23] AI MODULE: ONLINE
[16:03:23] RAG MODULE: ONLINE
[16:03:24] USER ACCESS: GRANTED
[16:03:24] SYSTEM STATUS: OPERATIONAL
```

For a real implementation, these can be generated dynamically.

------------------------------------------------------------------------

# 15. Contact Section

Make contact feel like opening a communication channel.

``` text
OPEN COMMUNICATION CHANNEL

NAME
[____________________________]

EMAIL
[____________________________]

MESSAGE
[____________________________]
[____________________________]

[ TRANSMIT MESSAGE ]

CHANNELS

GITHUB
LINKEDIN
EMAIL
```

Button text should remain in-universe:

-   TRANSMIT
-   SEND MESSAGE
-   OPEN CHANNEL
-   TERMINATE SESSION

Do not make the UX confusing. The labels can be thematic, but their
purpose must still be obvious.

------------------------------------------------------------------------

# 16. Footer

Example:

``` text
------------------------------------------------------------

TVA DEVELOPMENT TERMINAL

SYSTEM STATUS: OPERATIONAL
BUILD: 2026.09
RECORD: AFFAN-SHAH

NO TIMELINE DATA WAS ALTERED.

------------------------------------------------------------
```

Avoid directly reproducing official show branding.

------------------------------------------------------------------------

# 17. Animations

Animations should feel like an old computer system coming alive.

Use:

### Page load

``` text
BOOT SEQUENCE
↓
SYSTEM CHECK
↓
DATABASE LOAD
↓
ACCESS GRANTED
```

Keep the intro short: approximately 1--2 seconds.

### Text

Use:

-   typewriter effect
-   blinking cursor
-   occasional text flicker
-   number counters
-   subtle scanline movement

### Cards

On hover:

-   border becomes brighter
-   very small amber glow
-   status indicator changes
-   tiny translation of 1--2px

Do NOT make cards aggressively bounce or rotate.

That would destroy the industrial/terminal aesthetic.

------------------------------------------------------------------------

# 18. CRT Overlay

Use pseudo-elements for subtle visual texture.

Suggested layers:

``` text
BODY
 ├── GRID
 ├── CONTENT
 ├── CRT SCANLINES
 └── VIGNETTE
```

The overlay must use:

``` css
pointer-events: none;
```

so it never blocks interaction.

------------------------------------------------------------------------

# 19. Responsive Design

Desktop:

-   sidebar navigation
-   dense dashboard
-   2--3 project columns

Tablet:

-   reduced sidebar
-   2 project columns

Mobile:

-   top navigation
-   one project column
-   horizontally scrollable system metadata where necessary
-   no tiny unreadable text
-   no horizontal page overflow

The terminal aesthetic must not become an excuse for bad mobile UX.

------------------------------------------------------------------------

# 20. Suggested Tech Stack

For the frontend:

``` text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide React
```

Optional:

``` text
GSAP
Lenis
```

Use GSAP only where it provides a real advantage.

Do not throw five animation libraries into the project just because they
look impressive.

For a portfolio, engineering discipline is more impressive than
dependency count.

------------------------------------------------------------------------

# 21. Component Architecture

Suggested structure:

``` text
app/
├── page.tsx
├── projects/
│   └── [slug]/
│       └── page.tsx
│
components/
├── terminal/
│   ├── TerminalShell.tsx
│   ├── TerminalHeader.tsx
│   ├── TerminalFooter.tsx
│   └── SystemStatus.tsx
│
├── navigation/
│   ├── Sidebar.tsx
│   └── MobileNav.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── Profile.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── ActivityLog.tsx
│   └── Contact.tsx
│
├── projects/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   └── ProjectDetail.tsx
│
└── effects/
    ├── CRTOverlay.tsx
    ├── GridBackground.tsx
    └── BootSequence.tsx
```

Keep data separate from presentation.

For example:

``` text
data/
└── projects.ts
```

Project cards should be generated from structured project data instead
of manually duplicating JSX.

------------------------------------------------------------------------

# 22. Data Model for Projects

Use something like:

``` ts
type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  status: "ACTIVE" | "BUILDING" | "ARCHIVED";
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  image?: string;
  architecture?: string[];
};
```

Example:

``` ts
{
  id: "pdf-intelligence",
  number: "002",
  title: "PDF INTELLIGENCE SYSTEM",
  description: "RAG-powered PDF assistant.",
  status: "ACTIVE",
  technologies: [
    "Python",
    "FastAPI",
    "React",
    "RAG",
    "LLM"
  ]
}
```

------------------------------------------------------------------------

# 23. Interaction Details

## Cursor

A blinking terminal cursor can appear after headings:

``` text
SYSTEM STATUS: ONLINE █
```

## Status LEDs

Use tiny indicators:

``` text
● ONLINE
○ OFFLINE
◐ BUILDING
```

## Buttons

Buttons should look like command controls:

``` text
[ EXECUTE ]
[ INSPECT ]
[ ACCESS ]
[ RETURN ]
```

But always preserve normal accessibility labels and keyboard behavior.

------------------------------------------------------------------------

# 24. Accessibility

The aesthetic is secondary to usability.

Must support:

-   keyboard navigation
-   visible focus states
-   semantic HTML
-   accessible buttons
-   reduced-motion preference
-   sufficient text contrast
-   screen-reader-friendly labels

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  /* disable unnecessary animation */
}
```

------------------------------------------------------------------------

# 25. Performance Rules

This portfolio should load quickly.

Avoid:

-   enormous background videos
-   unnecessary 3D scenes
-   huge unoptimized images
-   dozens of animation libraries
-   excessive blur filters
-   animation on every DOM element

Use:

-   Next.js image optimization
-   lazy loading
-   CSS effects where possible
-   minimal JavaScript for decorative effects
-   static generation where appropriate

The website should look like a complicated system while actually being a
simple, well-engineered system.

That contrast is the point.

------------------------------------------------------------------------

# 26. Visual Hierarchy

Priority order:

``` text
1. NAME / IDENTITY
2. ROLE
3. PROJECTS
4. AI / RAG SPECIALIZATION
5. SKILLS
6. EXPERIENCE
7. CONTACT
```

Do not bury the projects under a giant animation.

The portfolio exists to get you opportunities, not to win an award for
having the most effects.

------------------------------------------------------------------------

# 27. What NOT To Do

Avoid these:

### ❌ Generic modern portfolio

``` text
Huge gradient
↓
Glassmorphism
↓
Floating blobs
↓
3D card
↓
"Hi, I'm Affan"
```

That would completely miss the reference.

### ❌ Excessive Loki branding

Do not fill the site with:

-   official logos
-   screenshots from the show
-   copyrighted character images
-   copied UI assets

Instead, capture the **retro bureaucratic sci-fi terminal aesthetic**.

### ❌ Too much orange

Orange should be an accent.

If everything glows orange, nothing feels important.

### ❌ Fake complexity

Do not create fake technical terminology everywhere just to look
intelligent.

The actual projects and architecture should carry the credibility.

------------------------------------------------------------------------

# 28. Final Visual Target

The finished website should feel like:

``` text
A developer's personnel record
inside a retro-futuristic control terminal.
```

The visitor should immediately think:

> "This looks like a system."

Then, after exploring:

> "This person actually knows how to build systems."

That second reaction matters more than the first.

------------------------------------------------------------------------

# 29. Build Order

Build in this order:

``` text
PHASE 01
Grid + colors + typography

PHASE 02
Terminal shell + navigation

PHASE 03
Hero / profile

PHASE 04
Project cards

PHASE 05
Project detail pages

PHASE 06
Skills + AI systems

PHASE 07
Experience + activity log

PHASE 08
Contact

PHASE 09
CRT effects + micro-interactions

PHASE 10
Responsive polish

PHASE 11
Accessibility + performance

PHASE 12
Deployment
```

Do not start with GSAP.

Get the architecture and visual system correct first.

------------------------------------------------------------------------

# 30. Definition of Done

The portfolio is finished when:

-   [ ] The visual identity is immediately recognizable as a retro
    terminal/control system.
-   [ ] Navigation works on desktop and mobile.
-   [ ] Projects are the strongest section.
-   [ ] Every project has structured metadata.
-   [ ] Project details can be inspected.
-   [ ] AI/RAG work is clearly visible.
-   [ ] Skills are presented as capabilities rather than logo soup.
-   [ ] Contact form works.
-   [ ] Keyboard navigation works.
-   [ ] Reduced motion is respected.
-   [ ] No horizontal overflow exists on mobile.
-   [ ] Images are optimized.
-   [ ] The site loads quickly.
-   [ ] The design does not depend on copyrighted Loki assets.
-   [ ] The site still looks good when all animations are disabled.

## Final principle

**Build the portfolio like an engineered interface, not like a themed
landing page.**

The theme gets attention.

The projects, architecture, UX, performance, and code quality earn the
opportunity.
