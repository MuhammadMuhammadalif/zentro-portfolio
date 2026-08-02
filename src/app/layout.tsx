import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Abubakar | Full-Stack Developer & CS Student',
  description:
    'BS Computer Science student at UET Lahore. Full-stack developer specializing in React, Node.js, AI/ML, and building scalable web applications.',
  keywords: 'Full-Stack Developer, React, Node.js, AI, Machine Learning, Computer Science, UET Lahore, Web Development, Software Engineering',
  authors: [{ name: 'Muhammad Abubakar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadabubakar.dev',
    title: 'Muhammad Abubakar | Full-Stack Developer & CS Student',
    description:
      'BS Computer Science student at UET Lahore. Full-stack developer specializing in React, Node.js, AI/ML, and building scalable web applications.',
    siteName: 'Muhammad Abubakar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abubakar | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Node.js, and AI/ML',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg text-text-primary antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
