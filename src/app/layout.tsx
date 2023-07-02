"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import { PageHead } from "./components/pageHead";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <PageHead />
      <RecoilRoot>
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
