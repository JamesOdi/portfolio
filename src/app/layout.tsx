import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'James Odike',
  description: "This is James Odike's official portfolio page",
  creator: 'James Odike',
  metadataBase: new URL('https://jamesodike.com'), // Insert the base URL
  keywords: ['Portfolio', 'Software Engineer', 'Web Developer'],
  icons: {
    icon: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://jamesodike.com',
    creator: '@Kanderel',
  },
  openGraph: {
    type: 'website',
    url: 'https://jamesodike.com',
    title: 'James Odike',
    description: "This is James Odike's official portfolio page",
    siteName: 'James Odike',
    images: [
      {
        url: 'https://jamesodike.com/images/profile.jpg',
        width: 1200,
        height: 1200,
        alt: 'James Odike',
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
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600 max-w-full p-4`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
