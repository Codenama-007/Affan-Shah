# Portfolio Website --- Structure & Build Specification

## 01. Project Identity

### Concept

Build a personal portfolio website around a **retro-futuristic TVA /
terminal-control-room aesthetic** inspired by the supplied visual
references.

The website should combine:

-   TVA-inspired orange/amber visual language
-   black technical grid background
-   monospace / typewriter typography
-   terminal-style panels
-   compact information cards
-   glowing orange borders and accents
-   system/status indicators
-   subtle CRT/scanline effects
-   modern Next.js architecture
-   smooth scrolling using Lenis

### Important design rule

The website should feel **inspired by the TVA aesthetic without simply
copying the Loki interface or official branding**.

The portfolio itself remains the focus.

The theme should communicate:

> **"Developer profile loaded as a classified system record."**

------------------------------------------------------------------------

# 02. Technology Stack

## Core

``` text
Next.js
React
TypeScript
Tailwind CSS
Lenis
```

## UI / Icons

``` text
Lucide React
```

## Animation

Use only when necessary:

``` text
Framer Motion
GSAP (optional)
```

Do not use multiple animation libraries for the same effect.

## Fonts

Recommended:

``` text
IBM Plex Mono
JetBrains Mono
Space Mono
```

Use a monospace/typewriter-style font as the primary visual language.

------------------------------------------------------------------------

# 03. Main Routes

The website should have the following routes:

``` text
/
├── Home
├── /projects
├── /contact
└── /blogs
```

The home page contains internal sections:

``` text
/
│
├── Hero
├── About
├── Toolkit
├── Education
└── Footer
```

The Navbar provides navigation to:

``` text
HOME
ABOUT ME
EDUCATION
PROJECTS
CONTACT
BLOGS
DOWNLOAD CV
```

------------------------------------------------------------------------

# 04. Recommended Folder Structure

``` text
portfolio/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── projects/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── blogs/
│       └── page.tsx
│
├── components/
│   │
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   │
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Typewriter.tsx
│   │
│   ├── About/
│   │   ├── About.tsx
│   │   ├── ToolkitCard.tsx
│   │   └── SkillProgress.tsx
│   │
│   ├── Education/
│   │   └── Education.tsx
│   │
│   ├── Projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ProjectCategory.tsx
│   │
│   ├── Contact/
│   │   └── ContactForm.tsx
│   │
│   ├── UI/
│   │   ├── TerminalPanel.tsx
│   │   ├── StatusIndicator.tsx
│   │   └── SectionHeading.tsx
│   │
│   └── Effects/
│       ├── GridBackground.tsx
│       ├── CRTOverlay.tsx
│       └── PageLoader.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── education.ts
│
├── public/
│   ├── logo/
│   │   └── tva-logo.png
│   ├── cv/
│   │   └── cv.pdf
│   ├── projects/
│   └── images/
│
├── lib/
│   └── utils.ts
│
└── styles/
    └── globals.css
```

Keep data separate from UI components.

------------------------------------------------------------------------

# 05. Global Visual System

## Background

The primary background should be almost black.

``` text
Background: #050505
```

Add a subtle technical grid.

Concept:

``` css
background-color: #050505;

background-image:
  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px);

background-size: 24px 24px;
```

The grid should remain subtle.

------------------------------------------------------------------------

# 06. Color Palette

Use the orange/amber palette from the supplied reference.

``` text
BLACK
#050505

DARK PANEL
#0A0A0A

GRID
#171717

PRIMARY ORANGE
#FF6500

BRIGHT ORANGE
#FF7A00

MUTED ORANGE
#A94A12

TEXT
#EAEAEA

MUTED TEXT
#777777

BORDER
#454545
```

Orange should be used for:

-   headings
-   active navigation
-   borders
-   buttons
-   status indicators
-   progress bars
-   important labels

Do not make every element glow.

------------------------------------------------------------------------

# 07. Navbar

The provided Navbar component is the structural starting point.

Replace the generic Flowbite content with the portfolio navigation.

## Navbar structure

``` text
┌──────────────────────────────────────────────────────────────┐
│ [TVA LOGO] AFFAN SHAH                                        │
│                                                              │
│ HOME   ABOUT ME   EDUCATION   PROJECTS   CONTACT   BLOGS     │
│                                      [ DOWNLOAD CV ]          │
└──────────────────────────────────────────────────────────────┘
```

### Logo

Use the supplied TVA-inspired logo reference as the visual direction for
the logo.

The logo area should contain:

``` text
[LOGO] AFFAN SHAH
```

The logo should be adapted for the portfolio rather than using the
official Loki/TVA branding directly.

### Navigation

``` text
Home
About Me
Education
Projects
Contact
Blogs
```

### Navigation behavior

``` text
Home
↓
/

About Me
↓
/#about

Education
↓
/#education

Projects
↓
/projects

Contact
↓
/contact

Blogs
↓
/blogs
```

For Home, About Me and Education, use smooth scrolling.

Lenis should handle the scrolling experience.

### CV Button

Add:

``` text
[ DOWNLOAD CV ]
```

The button should download:

``` text
/public/cv/cv.pdf
```

Example behavior:

``` html
<a href="/cv/cv.pdf" download>
    DOWNLOAD CV
</a>
```

------------------------------------------------------------------------

# 08. Navbar Mobile

Desktop:

``` text
LOGO ───── HOME ABOUT EDUCATION PROJECTS CONTACT BLOGS ── CV
```

Mobile:

``` text
┌─────────────────────────┐
│ LOGO   AFFAN       ☰    │
└─────────────────────────┘
```

Opening the menu:

``` text
HOME
ABOUT ME
EDUCATION
PROJECTS
CONTACT
BLOGS

[ DOWNLOAD CV ]
```

Use the provided responsive navbar structure as the starting point.

------------------------------------------------------------------------

# 09. Hero Section

The Hero should be the first major visual experience.

The provided `LightHeroA` component should be redesigned heavily.

Do not keep the original generic marketing copy.

## Hero layout

Desktop:

``` text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  TEMPORAL AUTHORITY                                        │
│  DEVELOPER RECORD                                          │
│                                                            │
│  AFFAN SHAH                                                 │
│                                                            │
│  FULL STACK DEVELOPER                                      │
│  AI / ML ENGINEER                                          │
│                                                            │
│  [ TYPEWRITER TEXT ]                                       │
│                                                            │
│  [ VIEW PROJECTS ]   [ CONTACT ME ]                       │
│                                                            │
│                                      ┌─────────────────┐   │
│                                      │                 │   │
│                                      │  FLIP CARD      │   │
│                                      │                 │   │
│                                      │                 │   │
│                                      └─────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 10. Hero Typewriter Effect

Add a typewriter effect to the Hero.

Possible rotating text:

``` text
I BUILD FULL STACK APPLICATIONS.
I BUILD AI SYSTEMS.
I BUILD RAG APPLICATIONS.
I BUILD AGENTIC AI SYSTEMS.
I TURN IDEAS INTO SOFTWARE.
```

The effect should:

``` text
type
pause
delete
type next sentence
pause
repeat
```

Example:

``` text
AFFAN SHAH

I BUILD | 
I BUILD F|
I BUILD FU|
I BUILD FULL|
...
```

Add a terminal cursor:

``` text
I BUILD AI SYSTEMS █
```

Use a blinking cursor.

The animation should be fast enough that the user does not get bored.

------------------------------------------------------------------------

# 11. Hero Flip Card

The right side of the Hero should contain a **3D flip card**.

This is an important interaction.

## Initial state

When the website first loads:

``` text
CARD BACK
```

should be visible.

Then automatically:

``` text
BACK
  ↓
3D FLIP
  ↓
FRONT
```

The front becomes the primary displayed state.

### Sequence

``` text
PAGE LOAD
    ↓
SHOW CARD BACK
    ↓
SHORT DELAY
    ↓
ROTATE Y 180°
    ↓
SHOW CARD FRONT
```

Recommended:

``` text
delay: ~800–1200ms
duration: ~800–1200ms
```

Do not make the animation too slow.

------------------------------------------------------------------------

# 12. Flip Card Architecture

Use:

``` text
FlipCard
│
├── CardContainer
│
├── CardBack
│
└── CardFront
```

CSS concept:

``` css
perspective: 1000px;
```

Inner:

``` css
transform-style: preserve-3d;
transition: transform 1s ease;
```

Back:

``` css
backface-visibility: hidden;
```

Front:

``` css
transform: rotateY(180deg);
backface-visibility: hidden;
```

The card should not look like a generic glassmorphism card.

It should look like a **TVA personnel/system identification card**.

------------------------------------------------------------------------

# 13. Flip Card --- Back Side

The back should initially show a mysterious system-style panel.

Example:

``` text
┌───────────────────────────────┐
│ TVA DATABASE                  │
│                               │
│ PERSONNEL RECORD              │
│                               │
│ RECORD: A579Y                 │
│ STATUS: LOADING...            │
│                               │
│ █████████████████             │
│                               │
│ ACCESSING PROFILE             │
└───────────────────────────────┘
```

Use:

-   orange border
-   dark background
-   grid
-   system labels
-   loading indicators

------------------------------------------------------------------------

# 14. Flip Card --- Front Side

The front should show your personal profile.

Example:

``` text
┌───────────────────────────────┐
│ PERSONNEL // 001              │
├───────────────────────────────┤
│                               │
│        [ PHOTO ]              │
│                               │
│ AFFAN SHAH                    │
│                               │
│ FULL STACK / AI ENGINEER      │
│                               │
│ PYTHON                        │
│ REACT                         │
│ NEXT.JS                       │
│ RAG                           │
│                               │
│ STATUS: ACTIVE                │
└───────────────────────────────┘
```

The card should feel like an actual system record.

------------------------------------------------------------------------

# 15. About Section

The About section should combine:

1.  Personal introduction
2.  Toolkit / technology capabilities

Suggested layout:

``` text
ABOUT THE DEVELOPER

┌──────────────────────────┐
│ ABOUT ME                 │
│                          │
│ I am a developer focused │
│ on building full-stack   │
│ applications and AI     │
│ systems.                 │
│                          │
│ I enjoy working with    │
│ RAG, LLMs, modern web   │
│ applications and        │
│ backend systems.        │
└──────────────────────────┘

┌────────────────────────────────────────┐
│ SYSTEM TOOLKIT                         │
│                                        │
│ HTML        ████████████████           │
│ CSS         ███████████████            │
│ JS          █████████████              │
│ React       █████████████              │
│ Next.js     ████████████               │
│ ...                                    │
└────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 16. Toolkit Card

The Toolkit should use the compact card style from the second supplied
reference.

It should look like a **system diagnostics screen**.

Example:

``` text
┌──────────────────────────────────────────┐
│ SYSTEM TOOLKIT                           │
│ ---------------------------------------- │
│                                          │
│ FRONTEND SYSTEMS                         │
│                                          │
│ HTML          █████████████████  90      │
│ CSS           ████████████████   85      │
│ JAVASCRIPT    ███████████████    80      │
│ REACT         ███████████████    80      │
│ NEXT.JS       █████████████      75      │
│                                          │
│ BACKEND / DATABASE                       │
│                                          │
│ POSTGRESQL    █████████████      75      │
│ MONGODB       ████████████       70      │
│                                          │
│ AI / ML                                    │
│                                          │
│ TENSORFLOW    ███████████        65      │
│ SCIKIT-LEARN  █████████████      75      │
│ PANDAS        ███████████████    80      │
│ NUMPY         ███████████████    80      │
│ MATPLOTLIB    █████████████      75      │
│                                          │
│ AI SYSTEMS                                │
│                                          │
│ LANGCHAIN     ████████████       70      │
│ LANGGRAPH     ██████████         65      │
│ LLM           █████████████      75      │
│ HUGGINGFACE   ███████████        70      │
│                                          │
└──────────────────────────────────────────┘
```

The numbers should be treated as **visual proficiency indicators**, not
objective measurements.

If uncomfortable with percentages, use labels instead:

``` text
██████████████  ADVANCED
██████████      INTERMEDIATE
███████         LEARNING
```

------------------------------------------------------------------------

# 17. Skill Data

Store the toolkit in:

``` text
data/skills.ts
```

Suggested structure:

``` ts
type Skill = {
  name: string;
  category: string;
  level: number;
};
```

Example:

``` ts
{
  name: "React.js",
  category: "Frontend",
  level: 80
}
```

Categories:

``` text
Frontend
Backend / Database
Data Science
Machine Learning
AI Systems
```

------------------------------------------------------------------------

# 18. Complete Technology List

The Toolkit should include:

## Frontend

``` text
HTML
CSS
JavaScript
React.js
Next.js
```

## Database

``` text
PostgreSQL
MongoDB
```

## Data / ML

``` text
TensorFlow
Scikit-learn
Pandas
NumPy
Matplotlib
```

## AI Systems

``` text
LangChain
LangGraph
LLM
Hugging Face
```

Do not turn this into a wall of logos.

The terminal/progress-line presentation is the primary visual.

------------------------------------------------------------------------

# 19. Education Section

Create a dedicated Education section.

Use a terminal timeline.

Example:

``` text
EDUCATION RECORD
================

01 // HIGHER SECONDARY

COLLEGE
[YOUR 12TH STANDARD COLLEGE]

QUALIFICATION
12th Standard

STATUS
COMPLETED


02 // ENGINEERING

INSTITUTION
[YOUR ENGINEERING COLLEGE]

PROGRAM
Bachelor of Engineering

STATUS
FINAL YEAR
```

The placeholders must eventually be replaced with your real college
names.

Do not invent the college name.

------------------------------------------------------------------------

# 20. Education Visual Design

Use a timeline:

``` text
202X
 │
 │  12TH STANDARD
 │  ┌────────────────────────────┐
 ├──│ COMPLETED                  │
 │  │ [COLLEGE NAME]             │
 │  └────────────────────────────┘
 │
202X
 │
 │  ENGINEERING
 │  ┌────────────────────────────┐
 └──│ FINAL YEAR                 │
    │ BACHELOR OF ENGINEERING    │
    │ [COLLEGE NAME]             │
    └────────────────────────────┘
```

Use orange vertical lines and status indicators.

------------------------------------------------------------------------

# 21. Projects Page

Route:

``` text
/projects
```

The page should contain:

``` text
Navbar
↓
Projects Header
↓
Category Filter
↓
Project Grid
↓
Footer
```

------------------------------------------------------------------------

# 22. Projects Page Header

Example:

``` text
PROJECT DATABASE

ACCESSING DEVELOPER PROJECT ARCHIVE

TOTAL PROGRAMS: 08
STATUS: ONLINE
```

Then:

``` text
SELECT CATEGORY
```

------------------------------------------------------------------------

# 23. Project Categories

At minimum:

``` text
ALL
WEB DEVELOPMENT
AI / ML
AGENTIC AI
RAG
```

Possible future categories:

``` text
FULL STACK
EXPERIMENTAL
OPEN SOURCE
```

Do not create categories just to make the UI look bigger.

Only use categories that actually contain projects.

------------------------------------------------------------------------

# 24. Project Filtering

The user should be able to click:

``` text
[ ALL ]
[ WEB DEVELOPMENT ]
[ AI / ML ]
[ AGENTIC AI ]
[ RAG ]
```

The grid updates accordingly.

Each project should have category metadata.

Example:

``` ts
{
  title: "PDF Intelligence System",
  categories: ["AI / ML", "RAG"],
}
```

------------------------------------------------------------------------

# 25. Project Cards

Use the card style discussed earlier.

Example:

``` text
┌──────────────────────────────────────────┐
│ PROGRAM // 004                           │
│ STATUS: ACTIVE                           │
├──────────────────────────────────────────┤
│                                          │
│ PDF INTELLIGENCE SYSTEM                  │
│                                          │
│ RAG-powered PDF question-answering      │
│ application.                             │
│                                          │
│ STACK                                    │
│ FASTAPI / REACT / PYTHON / RAG           │
│                                          │
│ CATEGORY                                 │
│ AI / ML / RAG                            │
│                                          │
│ [ INSPECT ] [ SOURCE ]                   │
└──────────────────────────────────────────┘
```

Cards should have:

-   program number
-   title
-   description
-   category
-   technologies
-   status
-   buttons

------------------------------------------------------------------------

# 26. Project Data Architecture

Create:

``` text
data/projects.ts
```

Use:

``` ts
type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  status: "ACTIVE" | "BUILDING" | "ARCHIVED";
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
};
```

The ProjectCard should receive this data as props.

Do not hard-code every project card separately.

------------------------------------------------------------------------

# 27. Projects Footer

The Projects page should end with the same global Footer component.

Structure:

``` text
PROJECT DATABASE
       ↓
FOOTER
```

Do not create a completely different footer for every page.

------------------------------------------------------------------------

# 28. Contact Page

Route:

``` text
/contact
```

Structure:

``` text
Navbar
↓
Contact Header
↓
Contact Form
↓
Contact Information
↓
Footer
```

------------------------------------------------------------------------

# 29. Contact Header

Example:

``` text
COMMUNICATION TERMINAL

OPEN CHANNEL
SEND A MESSAGE TO THE DEVELOPER
```

------------------------------------------------------------------------

# 30. Contact Form

Required fields:

``` text
NAME
EMAIL
MESSAGE
```

Example:

``` text
┌────────────────────────────────────────────┐
│ COMMUNICATION CHANNEL                     │
├────────────────────────────────────────────┤
│                                            │
│ NAME                                       │
│ [____________________________________]     │
│                                            │
│ EMAIL                                      │
│ [____________________________________]     │
│                                            │
│ MESSAGE                                    │
│ [____________________________________]     │
│ [____________________________________]     │
│ [____________________________________]     │
│                                            │
│              [ TRANSMIT MESSAGE ]          │
│                                            │
└────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 31. Contact Form Behavior

For the first version, do not build a backend/email service.

On submit:

``` text
preventDefault()
↓
collect form values
↓
console.log(form details)
↓
show success state
```

Example console object:

``` js
{
  name: "...",
  email: "...",
  message: "..."
}
```

The form should be a Client Component:

``` tsx
"use client";
```

Use controlled inputs or React Hook Form if desired.

For this simple requirement, plain React state is sufficient.

------------------------------------------------------------------------

# 32. Contact Information

Below or beside the form:

``` text
DIRECT CHANNELS

PHONE
[YOUR NUMBER]

EMAIL
[YOUR EMAIL]

INSTAGRAM
[YOUR INSTAGRAM]

TWITTER / X
[YOUR TWITTER]

THREADS
[YOUR THREADS]
```

Do not invent the actual contact information.

Use placeholders until the real values are supplied.

------------------------------------------------------------------------

# 33. Footer

The Footer should appear globally.

Suggested design:

``` text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ WANNA BUILD A WEBSITE?                                     │
│                                                             │
│ Let's build something that actually works.                 │
│                                                             │
│ [ CONTACT ME ]                                             │
│                                                             │
│ PHONE                                                       │
│ EMAIL                                                       │
│ INSTAGRAM                                                   │
│ TWITTER                                                     │
│ THREADS                                                     │
│                                                             │
│ ----------------------------------------------------------  │
│                                                             │
│ AFFAN SHAH // DEVELOPER TERMINAL                            │
│ SYSTEM STATUS: ONLINE                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 34. Footer CTA

Main CTA:

``` text
WANNA BUY A WEBSITE FROM ME?
```

However, make the wording more professional in the final design.

Recommended:

``` text
NEED A WEBSITE FOR YOUR BUSINESS?
```

Supporting text:

``` text
Let's build a fast, modern website designed around your business.
```

Button:

``` text
[ START A PROJECT ]
```

This is important if the portfolio is also intended to attract
local-business clients.

------------------------------------------------------------------------

# 35. Social Links

Use icon buttons with:

``` text
Instagram
Twitter / X
Threads
Email
Phone
```

Use Lucide icons where available.

For brands without an exact Lucide icon, use text labels rather than
importing huge icon libraries unnecessarily.

------------------------------------------------------------------------

# 36. Blogs Page

Because the Navbar includes Blogs, create:

``` text
/blogs
```

For the first version:

``` text
BLOG DATABASE

ARTICLES / NOTES / BUILD LOGS
```

Possible categories:

``` text
AI
RAG
WEB DEVELOPMENT
NEXT.JS
PYTHON
SYSTEM DESIGN
```

Blog cards can use the same terminal-card aesthetic.

Example:

``` text
ARTICLE // 001

HOW I BUILT A PDF RAG SYSTEM

CATEGORY: AI / RAG

[ READ ARTICLE ]
```

The blog system can initially be static.

Do not build a CMS unless there is an actual need.

------------------------------------------------------------------------

# 37. Lenis Integration

Use Lenis for smooth scrolling.

The recommended architecture:

``` text
app/layout.tsx
       ↓
SmoothScrollProvider
       ↓
Entire application
```

Suggested component:

``` text
components/
└── SmoothScroll.tsx
```

It should initialize Lenis on the client.

Use it primarily for:

-   Home page section navigation
-   long page scrolling
-   smooth anchor transitions

Do not interfere with native accessibility behavior.

------------------------------------------------------------------------

# 38. Section Navigation

Home page:

``` text
Hero
↓
About
↓
Education
↓
Footer
```

Navbar links:

``` text
ABOUT ME
    ↓
#about

EDUCATION
    ↓
#education
```

Use:

``` html
<section id="about">
```

and:

``` html
<section id="education">
```

For anchor navigation, account for the fixed Navbar so headings are not
hidden underneath it.

------------------------------------------------------------------------

# 39. Fixed Navbar Behavior

The Navbar is fixed:

``` text
position: fixed;
top: 0;
```

Content must have sufficient top spacing.

Recommended:

``` text
Navbar
↓
Hero with top padding
```

Do not allow the fixed Navbar to cover the first section.

------------------------------------------------------------------------

# 40. Page Loading Sequence

Optional boot sequence:

``` text
INITIALIZING TVA DEVELOPMENT TERMINAL...
>
LOADING USER PROFILE...
>
LOADING PROJECT DATABASE...
>
LOADING AI MODULE...
>
SYSTEM READY.
```

Keep it short.

Maximum recommended duration:

``` text
1–2 seconds
```

A portfolio should not force recruiters to sit through a movie intro.

------------------------------------------------------------------------

# 41. CRT Effects

Optional global effects:

``` text
SCANLINES
NOISE
VIGNETTE
SUBTLE FLICKER
```

Implement these with CSS pseudo-elements where possible.

Example:

``` text
body
 ├── grid
 ├── application
 ├── scanline overlay
 └── vignette
```

The overlay must use:

``` css
pointer-events: none;
```

------------------------------------------------------------------------

# 42. Animation Hierarchy

Use animation strategically.

### Hero

``` text
Boot
↓
Typewriter
↓
Flip Card
```

### Section headings

Subtle fade/slide.

### Project cards

Small hover interaction.

### Toolkit

Progress bars can animate when entering the viewport.

### Contact

Input focus glow.

Do not animate every component.

------------------------------------------------------------------------

# 43. Accessibility

The visual style must not damage usability.

Required:

-   semantic HTML
-   keyboard navigation
-   visible focus states
-   proper labels
-   accessible buttons
-   alt text
-   reduced motion support
-   sufficient contrast

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  /* remove unnecessary animations */
}
```

For the Hero flip card, reduced-motion users should simply see the final
front card without the 3D animation.

------------------------------------------------------------------------

# 44. Responsive Layout

## Desktop

``` text
Navbar
────────────────────────────

Hero
TEXT                 FLIP CARD

About
ABOUT                TOOLKIT

Education
TIMELINE

Footer
```

## Tablet

``` text
Hero
TEXT
CARD

About
ABOUT
TOOLKIT

Education
TIMELINE
```

## Mobile

``` text
Navbar
↓
Hero text
↓
Flip card
↓
About
↓
Toolkit
↓
Education
↓
Footer
```

Project cards become:

``` text
1 column
```

Do not allow horizontal overflow.

------------------------------------------------------------------------

# 45. Performance

Avoid:

``` text
huge background videos
massive image files
unnecessary 3D scenes
too many JavaScript animations
multiple animation libraries doing the same job
```

Use:

``` text
Next.js image optimization
lazy loading
CSS effects
server components where possible
minimal client components
```

Only components requiring browser APIs/interactivity should use:

``` tsx
"use client";
```

Examples:

``` text
Navbar mobile menu
Typewriter
Flip Card
Contact Form
Project Filter
Lenis
```

Keep static sections as Server Components when possible.

------------------------------------------------------------------------

# 46. Component Responsibility

## Navbar

Responsible for:

``` text
logo
navigation
mobile menu
CV download
```

## Hero

Responsible for:

``` text
identity
typewriter
CTA
flip card
```

## About

Responsible for:

``` text
personal introduction
toolkit
```

## ToolkitCard

Responsible for:

``` text
skill categories
progress lines
```

## Education

Responsible for:

``` text
academic timeline
```

## ProjectCard

Responsible for:

``` text
project metadata
buttons
status
```

## ProjectGrid

Responsible for:

``` text
rendering project cards
```

## ProjectCategory

Responsible for:

``` text
filtering
```

## ContactForm

Responsible for:

``` text
form state
validation
console.log
success state
```

## Footer

Responsible for:

``` text
CTA
contact information
social links
copyright/system status
```

------------------------------------------------------------------------

# 47. Suggested Home Page Composition

``` tsx
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Education />
      </main>

      <Footer />
    </>
  );
}
```

------------------------------------------------------------------------

# 48. Suggested Projects Page Composition

``` tsx
export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProjectsHeader />

        <ProjectCategory />

        <ProjectGrid />
      </main>

      <Footer />
    </>
  );
}
```

------------------------------------------------------------------------

# 49. Suggested Contact Page Composition

``` tsx
export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHeader />

        <ContactForm />

        <ContactInformation />
      </main>

      <Footer />
    </>
  );
}
```

------------------------------------------------------------------------

# 50. Final Site Structure

The complete experience should be:

``` text
                    PORTFOLIO
                       │
                       ▼
                ┌──────────────┐
                │   NAVBAR     │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │    HERO      │
                │              │
                │ Typewriter   │
                │ Flip Card    │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   ABOUT      │
                │              │
                │ Introduction │
                │ Toolkit      │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │  EDUCATION   │
                │              │
                │ Timeline     │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   FOOTER     │
                │              │
                │ Hire /       │
                │ Contact      │
                └──────────────┘
```

Additional routes:

``` text
/projects
    │
    ├── Navbar
    ├── Project Database
    ├── Category Filters
    ├── Project Cards
    └── Footer


/contact
    │
    ├── Navbar
    ├── Contact Terminal
    ├── Form
    ├── Contact Information
    └── Footer


/blogs
    │
    ├── Navbar
    ├── Blog Database
    ├── Blog Cards
    └── Footer
```

------------------------------------------------------------------------

# 51. Development Order

Build the project in this exact order.

## Phase 1 --- Foundation

``` text
Next.js setup
Tailwind
Fonts
Global colors
Grid background
```

## Phase 2 --- Navigation

``` text
Navbar
Desktop navigation
Mobile navigation
CV download
```

## Phase 3 --- Hero

``` text
Hero layout
Typewriter
CTA buttons
Flip card
Back card
Front card
```

## Phase 4 --- About

``` text
About content
Toolkit card
Progress bars
Skill data
```

## Phase 5 --- Education

``` text
Education timeline
Responsive layout
```

## Phase 6 --- Projects

``` text
Project data
ProjectCard
ProjectGrid
Category filtering
Projects page
```

## Phase 7 --- Contact

``` text
Contact page
Form
Validation
console.log
Success state
```

## Phase 8 --- Blogs

``` text
Blog data
Blog cards
Blog page
```

## Phase 9 --- Footer

``` text
CTA
Social links
Contact details
```

## Phase 10 --- Lenis

``` text
Smooth scrolling
Anchor navigation
```

## Phase 11 --- Visual Effects

``` text
CRT
Scanlines
Glows
Micro-interactions
```

## Phase 12 --- Final Polish

``` text
Mobile
Accessibility
Performance
SEO
Metadata
Deployment
```

------------------------------------------------------------------------

# 52. Critical Design Rule

Do not start by adding GSAP, Three.js, particle systems, fancy shaders,
or ten different effects.

First make:

``` text
STRUCTURE
    ↓
TYPOGRAPHY
    ↓
SPACING
    ↓
CARDS
    ↓
RESPONSIVENESS
    ↓
FUNCTIONALITY
    ↓
ANIMATION
```

If the website only looks good because of animation, the design is weak.

The goal is:

> **A strong portfolio that happens to have an exceptional visual
> identity.**

Not:

> **An animation demo pretending to be a portfolio.**

------------------------------------------------------------------------

# 53. Definition of Done

## Global

-   [ ] Next.js application works
-   [ ] Navbar works on desktop
-   [ ] Navbar works on mobile
-   [ ] CV downloads correctly
-   [ ] Lenis works
-   [ ] Grid background works
-   [ ] Typography is consistent
-   [ ] Responsive layout works

## Home

-   [ ] Hero works
-   [ ] Typewriter works
-   [ ] Flip card starts on back
-   [ ] Flip card automatically shows front
-   [ ] About section works
-   [ ] Toolkit card works
-   [ ] Education section works
-   [ ] Footer works

## Projects

-   [ ] Project page works
-   [ ] Categories work
-   [ ] Cards are reusable
-   [ ] Project data is separated
-   [ ] Footer works

## Contact

-   [ ] Name input works
-   [ ] Email input works
-   [ ] Message input works
-   [ ] Submit works
-   [ ] Details appear in console
-   [ ] Success state appears

## Blogs

-   [ ] Blog route exists
-   [ ] Blog cards work
-   [ ] Navigation works

## Quality

-   [ ] Keyboard accessible
-   [ ] Reduced motion supported
-   [ ] No mobile horizontal overflow
-   [ ] Images optimized
-   [ ] No unnecessary dependencies
-   [ ] No copyrighted show assets required
-   [ ] Site remains usable without animation

------------------------------------------------------------------------

# 54. Final Creative Direction

The final portfolio should feel like:

``` text
TVA TERMINAL
       +
DEVELOPER DATABASE
       +
MODERN NEXT.JS APPLICATION
```

The visual sequence should communicate:

``` text
SYSTEM BOOTS
      ↓
PROFILE LOADED
      ↓
DEVELOPER RECORD
      ↓
TOOLKIT INSPECTED
      ↓
PROJECTS INSPECTED
      ↓
CONTACT CHANNEL OPENED
```

The theme should get the visitor's attention.

Your actual engineering work should make them stay.
