import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pratham Rathod | Data Engineer & Software Engineer",
  description:
    "Portfolio of Pratham Rathod, an Information Technology Undergraduate at KJSIT and aspiring Data / Software Engineer. Specializing in Python, SQL, React, Flask, FastAPI, Kubernetes, and Machine Learning.",
  keywords: [
    "Pratham Rathod",
    "Data Engineer",
    "Software Engineer",
    "Portfolio",
    "KJSIT",
    "React Developer",
    "Next.js Portfolio",
    "Kubernetes AI",
    "Blockchain Verification",
  ],
  authors: [{ name: "Pratham Rathod" }],
  openGraph: {
    title: "Pratham Rathod | Data Engineer & Software Engineer",
    description:
      "Information Technology undergraduate with experience in developing full-stack applications, AI-driven systems, analytics dashboards, and scalable software solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Rathod | Data Engineer & Software Engineer",
    description:
      "Information Technology undergraduate with experience in developing full-stack applications, AI-driven systems, analytics dashboards, and scalable software solutions.",
  },
};

// Script to inject initially to prevent flashing light/dark modes
const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme') || 'dark';
      if (theme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
