import type { Metadata } from "next";
import { Montserrat, Roboto } from 'next/font/google'
import "./globals.css";

import { Providers } from "./(redux)/provider";


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});
const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

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
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
