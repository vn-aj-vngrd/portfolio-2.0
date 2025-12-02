# Modern Minimal Portfolio

A high-performance, accessible, and minimal portfolio website built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Features

- **Minimal Design**: Clean aesthetic with a focus on typography and content.
- **Performance**: Optimized for speed with Next.js App Router and Server Components.
- **Accessibility**: Semantic HTML, keyboard navigation, and visible focus states.
- **Responsive**: Fully responsive layout from mobile to desktop.
- **SEO**: Meta tags, OpenGraph support, and semantic structure.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Content

- **Personal Info**: Update `src/components/sections/Hero.tsx` and `src/components/sections/About.tsx`.
- **Projects**: Edit the `projects` array in `src/components/sections/Projects.tsx`.
- **Experience**: Edit the `experience` array in `src/components/sections/Experience.tsx`.
- **Skills**: Edit the `skills` object in `src/components/sections/Skills.tsx`.
- **Contact**: Update the email in `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`.

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`.
  - `--accent`: Change this to your preferred accent color.
- **Fonts**: The site uses `Geist Sans` and `Geist Mono` by default. You can change this in `src/app/layout.tsx`.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, BitBucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## License

MIT
