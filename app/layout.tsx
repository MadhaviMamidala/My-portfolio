import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Madhavi M | AI/ML SecOps Engineer",
  description: "AI/ML Ops Engineer with 6 years of experience transforming machine learning prototypes into secure, scalable, production-ready solutions. Specializing in MLOps, LLMOps, DevOps, and ML SecOps.",
  keywords: ["AI/ML Engineer", "MLOps", "DevOps", "Security", "Cloud", "AWS", "Kubernetes", "GenAI", "RAG", "LangChain"],
  authors: [{ name: "Madhavi M" }],
  creator: "Madhavi M",
  openGraph: {
    type: "website",
    title: "Madhavi M | AI/ML SecOps Engineer",
    description: "AI/ML Ops Engineer specializing in MLOps, GenAI, and secure cloud solutions",
    siteName: "Madhavi M Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
