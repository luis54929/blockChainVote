import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';


import { headers } from "next/headers"; // added
import ContextProvider from '../../context'


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
          <body>
            <ContextProvider cookies={cookies}>{children}</ContextProvider>
          </body>
        </html>
      );
  }
  

  