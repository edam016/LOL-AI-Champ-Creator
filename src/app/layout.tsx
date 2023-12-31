require('dotenv').config()

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from "next/legacy/image"; 
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });
const cloudinaryURL = 'https://res.cloudinary.com/dsg28e1fv/image/upload/v1697916344/ziggs-bg_k1ma0r.jpg';

export const metadata: Metadata = {
  title: 'LOL AI Champ Creator',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link rel="preload" href={ziggs.src} as="image" /> */}
      <body className={inter.className}>
        <Image
          src={cloudinaryURL}
          alt="Ziggs Background"
          layout="fill"
          objectFit='cover'
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
