import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Dhruv Ratan Jayaswal",
    template: "%s | Dhruv Ratan Jayaswal",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  description:
    "Full-stack developer portfolio showcasing projects, skills, and experience in web development",
  keywords: [
    "full-stack developer",
    "web development",
    "software engineering",
    "portfolio",
    "developer portfolio",
  ],
  authors: [{ name: "Dhruv Ratan Jayaswal" }],
  creator: "Dhruv Ratan Jayaswal",
  publisher: "Dhruv Ratan Jayaswal",
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
    <html lang="en" suppressHydrationWarning className="h-screen w-screen overflow-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden flex flex-col bg-[#0B2D72] text-white`}
      >
        <main className="flex-1 flex flex-col overflow-hidden relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
