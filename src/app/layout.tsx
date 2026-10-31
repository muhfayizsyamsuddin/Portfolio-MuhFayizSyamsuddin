import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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

// Di dalam src/app/layout.tsx, ganti blok export const metadata dengan ini:

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://faizms.my.id"
  ),
  title: {
    default: "Muh. Fayiz Syamsuddin — Full-Stack Developer, Backend & AI Engineer",
    template: "%s | Muh. Fayiz Syamsuddin",
  },
  description:
    "Full-Stack Developer & Backend/AI Engineer specializing in TypeScript (Next.js, Node.js), PHP (Laravel), Python, n8n AI workflows, and self-hosted Docker & Traefik infrastructure.",
  keywords: [
    "Muh. Fayiz Syamsuddin",
    "Faizms",
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Laravel Developer",
    "Python",
    "n8n Automation",
    "Docker",
    "Traefik",
    "Microservices",
    "Software Engineer Indonesia",
    "Makassar",
  ],
  authors: [
    {
      name: "Muh. Fayiz Syamsuddin",
      url: "https://faizms.my.id",
    },
  ],
  creator: "Muh. Fayiz Syamsuddin",
  publisher: "Muh. Fayiz Syamsuddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faizms.my.id",
    title: "Muh. Fayiz Syamsuddin — Full-Stack, Backend & AI Engineer",
    description:
      "Architecting production-ready web platforms, scalable backend services, and intelligent AI workflows with Next.js, Laravel, Python, and Docker.",
    siteName: "Muh. Fayiz Syamsuddin Portfolio",
    images: [
      {
        url: "/faiz.jpg",
        width: 800,
        height: 800,
        alt: "Muh. Fayiz Syamsuddin — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muh. Fayiz Syamsuddin — Full-Stack, Backend & AI Engineer",
    description:
      "Architecting production-ready web platforms, scalable backend services, and intelligent AI workflows.",
    images: ["/faiz.jpg"],
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
          <Suspense
            fallback={
              <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto px-4">
                  <div className="h-8 bg-muted rounded-lg w-3/4 mx-auto"></div>
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
                  <div className="h-32 bg-muted rounded-lg"></div>
                </div>
              </div>
            }
          >
            {children}
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
