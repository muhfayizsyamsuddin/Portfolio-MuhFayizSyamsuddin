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
