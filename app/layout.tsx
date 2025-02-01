import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alban LE DINH",
  description: "Explore my work as a Full Stack Developer.",
  keywords:
    "Alban LE DINH, portfolio, developer, full stack, ReactJS, Next.js, TypeScript, web development, software engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alban's Portfolio - Full Stack Developer",
    description:
      "Explore my work as a Full Stack Developer and get to know more about my journey in web development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
