import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LenisProvider from '@/components/Providers/LenisProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nexora — AI-Powered Proposal Generator',
  description:
    'Nexora helps you create polished, AI-generated business proposals in seconds. Focus on closing deals, not formatting docs.',
  keywords: [
    'Nexora',
    'AI proposal generator',
    'business proposals',
    'automated documents',
    'proposal SaaS',
    'AI writing tools',
  ],
  openGraph: {
    title: 'Nexora — AI-Powered Proposal Generator',
    description:
      'Create stunning business proposals with Nexora’s AI — fast, consistent, and on-brand.',
    url: 'https://nexora.app',
    siteName: 'Nexora',
    images: [
      {
        url: 'https://nexora.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexora App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nexoraapp',
    title: 'Nexora — AI-Powered Proposal Generator',
    description:
      "Create stunning business proposals with Nexora's AI — fast, consistent, and on-brand.",
    images: ['https://nexora.app/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`min-h-screen bg-[#1a1a1a] text-[#e5e5e5] font-sans ${inter.variable} antialiased`}
      >
        <LenisProvider>
          <Navbar />
          <main className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
