import type {Metadata} from "next";
import "./globals.css";
import {Dancing_Script, Indie_Flower} from 'next/font/google';

const dancing = Dancing_Script({
    subsets: ['latin'],
    variable: '--font-dancing-script',
    display: 'swap',
});

const indie = Indie_Flower({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-indie-flower',
    display: 'swap',
});

export const metadata: Metadata = {
  title: "Fix my heart? 🥺",
  description: "Would you please fix my heart?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancing.variable} ${indie.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
