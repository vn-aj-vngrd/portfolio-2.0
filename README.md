# Van AJ Vanguardia - Portfolio 2.0

A high-performance, product-driven portfolio website built with Next.js 15, Tailwind CSS, and TypeScript. This project showcases my work as a Full Stack Developer, featuring a modern bento-grid layout, smooth animations, and a focus on user experience.

## Features

- **Modern Design**: Bento-grid layout inspired by modern design trends.
- **Dark Mode**: Fully supported dark mode with a toggle switch.
- **Animations**: Smooth transitions and scroll animations using Framer Motion.
- **Dynamic Content**: All content (experience, projects, skills, etc.) is managed via a single JSON file.
- **Responsive**: Fully responsive layout optimized for all devices.
- **SEO Optimized**: Comprehensive metadata and Open Graph support.
- **Performance**: Built on Next.js App Router for optimal speed and SEO.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd portfolio-2.0
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

All portfolio data is centralized in `src/data/portfolio-data.json`. You can easily update your information without touching the component code.

- **Personal Info**: Update `about` section.
- **Experience**: Update `experience` array.
- **Projects**: Update `projects` array.
- **Skills**: Update `skills` object.
- **Top Stack**: Update `topStack` array for the highlights section.
- **Hobbies**: Update `hobbies` array.

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`.
- **Theme**: The theme toggle is handled in `src/components/ui/ThemeToggle.tsx`.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## License

MIT
