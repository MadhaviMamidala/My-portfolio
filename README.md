# Madhavi M - AI/ML SecOps Engineer Portfolio

A minimalist, interactive portfolio website featuring a unique split-personality design with an AI chatbot interface and clean content sections. Built with Next.js, TypeScript, and Tailwind CSS in Frost & Teal color palette.

## Features

- **Split-Personality Layout**: Interactive chatbot sidebar on the left, content sections on the right
- **AI Chatbot Interface**: Conversational bot that answers questions about experience, skills, and projects
- **Minimalist Design**: Clean, spacious layout with Frost & Teal color scheme
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Subtle transitions and animations throughout
- **Responsive**: Mobile-friendly design that adapts to all screen sizes
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & CSS animations
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd ai-portfolio
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
│   ├── data.ts           # Portfolio data (experience, projects, skills, etc.)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page with split layout
├── components/
│   ├── About.tsx         # About section
│   ├── Certifications.tsx # Certifications & education
│   ├── Chatbot.tsx       # Interactive AI chatbot
│   ├── Contact.tsx       # Contact information
│   ├── Experience.tsx    # Work experience timeline
│   ├── Hero.tsx          # Hero/landing section
│   ├── Projects.tsx      # Featured projects
│   ├── Skills.tsx        # Technical skills
│   └── ThemeToggle.tsx   # Dark mode toggle
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration with Frost & Teal colors
```

## Customization

### Update Personal Information

Edit `app/data.ts` to update:
- Personal info (name, email, phone, LinkedIn)
- Professional experience
- Projects
- Skills
- Certifications
- Chatbot responses

### Modify Colors

The Frost & Teal color palette is defined in `tailwind.config.ts`. You can customize:
- `frost`: Subtle blue-gray tones
- `teal`: Bright accent colors

### Adjust Layout

The split-personality layout is in `app/page.tsx`. You can:
- Change chatbot sidebar width (default: 400px)
- Modify responsive breakpoints
- Adjust animations

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

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
- Accessibility and user experience

## License

This project is open source and available for personal use.

## Contact

**Madhavi M**
- Email: Madhavi.m1913@gmail.com
- LinkedIn: [linkedin.com/in/madhavim13](https://www.linkedin.com/in/madhavim13/)

---

Built with ❤️ using Next.js & Tailwind CSS
