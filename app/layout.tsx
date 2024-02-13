import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

import { Providers } from "./(redux)/provider";


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Sushi Menu",
  description: "Comfy tool for new individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
