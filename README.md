# Madhavi M - AI/ML SecOps Engineer Portfolio

A minimalist, interactive portfolio website featuring a unique split-personality design with an AI chatbot interface and clean content sections. Built with Next.js, TypeScript, and Tailwind CSS in a warm Cappuccino & Espresso color palette.

## Features

- **Split-Personality Layout**: Content sections on the left, interactive chatbot assistant on the right
- **AI Chatbot Interface**: Smart conversational bot that answers questions about experience, skills, projects, and achievements
- **Minimalist Design**: Clean, spacious layout with Cappuccino & Espresso color scheme
- **Fun Scrolling Experience**: Animated section dividers (wave, curve, diagonal, zigzag) and alternating backgrounds
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Subtle transitions, animated blobs, and smooth scrolling
- **Responsive**: Mobile-friendly design that adapts to all screen sizes
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Cappuccino/Espresso palette
- **Animations**: CSS animations & transitions
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MadhaviMamidala/My-portfolio.git
cd My-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
ai-portfolio/
├── app/
│   ├── data.ts           # Portfolio data (experience, projects, skills, chatbot responses)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page with split layout
├── components/
│   ├── About.tsx         # About section
│   ├── Certifications.tsx # Certifications & education
│   ├── Chatbot.tsx       # Interactive AI chatbot with pattern matching
│   ├── Contact.tsx       # Contact information
│   ├── Experience.tsx    # Work experience timeline
│   ├── Hero.tsx          # Hero/landing section
│   ├── Navigation.tsx    # Sticky navigation header
│   ├── Projects.tsx      # Featured projects
│   ├── SectionDivider.tsx # Animated section transitions
│   ├── Skills.tsx        # Technical skills
│   └── ThemeToggle.tsx   # Dark mode toggle
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration with Cappuccino & Espresso colors
```

## Customization

### Update Personal Information

Edit `app/data.ts` to update:
- Personal info (name, email, phone, LinkedIn, GitHub)
- Professional experience
- Projects
- Skills
- Certifications
- Chatbot responses and pattern matching

### Modify Colors

The Cappuccino & Espresso color palette is defined in `tailwind.config.ts`. You can customize:
- `cappuccino`: Warm, subtle tan tones (#faf8f5 to #9d8066)
- `espresso`: Rich, bright brown tones (#6b5444 to #2d2319)

### Chatbot Customization

The chatbot in `components/Chatbot.tsx` uses regex pattern matching. You can:
- Add new response patterns in the `getResponse` function
- Update responses in `app/data.ts`
- Modify the chatbot UI and positioning

### Adjust Layout

The split-personality layout is in `app/page.tsx`. You can:
- Change chatbot widget dimensions (default: max 700px height, 400px width)
- Modify responsive breakpoints
- Adjust section divider variants

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done!)

2. Import your repository on [Vercel](https://vercel.com)

3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## Design Inspiration

Inspired by modern, minimalist portfolios with a focus on:
- Clean typography and generous white space
- Conversational AI interfaces
- Professional yet approachable aesthetics
- Unique scrolling experiences
- Warm, inviting color palettes

## Key Features

### Smart AI Chatbot
- Pattern-based natural language understanding
- Comprehensive knowledge about professional background
- Responds to questions about specific technologies (LangChain, Kubernetes, AWS, GenAI)
- Company-specific experience details (Nike, Mount Sinai, Flipkart)
- Project information and achievements

### Visual Design
- Alternating section backgrounds with animated blob effects
- Multiple section divider styles (wave, curve, diagonal, zigzag)
- Smooth transitions and hover effects
- Sticky navigation with active section highlighting

## License

This project is open source and available for personal use.

## Contact

**Madhavi M**
- Email: Madhavi.m1913@gmail.com
- LinkedIn: [linkedin.com/in/madhavim13](https://www.linkedin.com/in/madhavim13/)
- Phone: 9712366557

---

Built with ❤️ using Next.js, TypeScript & Tailwind CSS
