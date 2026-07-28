import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premium Software Development | Automation & AI Solutions',
  description:
    'Expert in Twilio, Zapier, custom software development, and AI security systems.',
  keywords: 'automation, software development, Twilio, Zapier, AI, security',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    title: 'Premium Software Development | Automation & AI Solutions',
    description:
      'Expert in Twilio, Zapier, custom software development, and AI security systems.',
    images: [
      {
        url: 'https://yoursite.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
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
