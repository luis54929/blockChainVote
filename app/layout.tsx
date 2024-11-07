import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import '../styles/globals.css'
import '@/styles/globals.css' // Importación del CSS de shadcn/ui

import { headers } from "next/headers";
import ContextProvider from '../context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "AppKit Example App",
  description: "Powered by WalletConnect"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = (await headers()).get('cookie') || null;

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}