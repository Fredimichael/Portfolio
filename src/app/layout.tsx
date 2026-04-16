import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fredi Roa | Frontend & Full-Stack Developer",
  description: "Building Scalable Systems. Full-Stack Developer specialized in transforming complex logic into seamless digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg text-primary-text selection:bg-accent-cyan/30 selection:text-accent-cyan">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
