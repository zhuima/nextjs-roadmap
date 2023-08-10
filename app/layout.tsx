/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 15:11:36
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-10 13:44:47
 * @FilePath: /nextjs-roadmap/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTopButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 13 学习之路",
  description:
    "Next.js 13 学习之路, Next.js App Router, Next.js Image, Next.js 13, Next.js 13 Link",
  keywords: ["Next.js 13", "Next.js 13 学习之路", "Next.js 13 Link"],
  alternates: {
    canonical: "https://techrk1688.eu.org/",
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS 订阅" }],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <NextTopLoader />
        <Header />
        {children}
        <Analytics />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
