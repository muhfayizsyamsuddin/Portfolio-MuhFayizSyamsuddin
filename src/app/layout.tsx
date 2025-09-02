import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000"
  ),
  title: {
    default: "Muh. Fayiz Syamsuddin - Software Developer & Full-Stack Engineer",
    template: "%s | Muh. Fayiz Syamsuddin",
  },
  description:
    "Experienced Software Developer specializing in React, Next.js, TypeScript, and Node.js. Creating innovative web applications and digital solutions. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Muh. Fayiz Syamsuddin",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Freelance Developer",
    "Indonesia",
  ],
  authors: [
    {
      name: "Muh. Fayiz Syamsuddin",
      url: process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000",
    },
  ],
  creator: "Muh. Fayiz Syamsuddin",
  icons: {
    icon: [
      {
        url: "/icon.svg?v=2",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico?v=2",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg?v=2",
        color: "#3b82f6",
      },
    ],
  },
  publisher: "Muh. Fayiz Syamsuddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000",
    title: "Muh. Fayiz Syamsuddin - Software Developer",
    description:
      "Experienced Software Developer creating innovative web applications and digital solutions.",
    siteName: "Fayiz Syamsuddin Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muh. Fayiz Syamsuddin - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muh. Fayiz Syamsuddin - Software Developer",
    description:
      "Experienced Software Developer creating innovative web applications and digital solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
