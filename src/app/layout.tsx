import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Van AJ Vanguardia | Full Stack Developer",
  description:
    "Full Stack Developer based in Cebu, Philippines, specializing in building scalable, high-performance web applications using the JavaScript ecosystem, .NET, and PHP. Passionate about creating intuitive user experiences and solving complex problems.",
  keywords: [
    "Van AJ Vanguardia",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "ASP.NET Core",
    "TypeScript",
    "Cebu",
    "Philippines",
  ],
  authors: [{ name: "Van AJ Vanguardia" }],
  openGraph: {
    title: "Van AJ Vanguardia | Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable web applications, design systems, and performance optimization.",
    url: "https://vanajvanguardia.com", // Replace with actual URL if available
    siteName: "Van AJ Vanguardia Portfolio",
    images: [
      {
        url: "/images/profile.jpg", // Using the profile image as OG image
        width: 800,
        height: 800,
        alt: "Van AJ Vanguardia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Van AJ Vanguardia | Full Stack Developer",
    description:
      "Building digital products with precision and purpose. Specializing in React, Next.js, and .NET.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 h-full w-full bg-background transition-colors duration-300">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300/30 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-indigo-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
