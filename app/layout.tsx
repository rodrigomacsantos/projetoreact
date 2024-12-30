

import "./globals.css";
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
    <body>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
  );
}