/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-31 14:29:32
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-14 19:12:26
 * @FilePath: /nextjs-roadmap/components/content.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import React from "react";
import Link from "next/link";
import DocContactCard from "@/components/contactcard";
import { IoPerson } from "react-icons/io5";

const Content = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Next.js 学习之路.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          仅以此电子书来记录自己的 Next.js 学习之路，
          希望我的学习之旅也能给你带来少许帮助.
        </p>
        {/* <div className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
          <DocContactCard />
          <div className="flex gap-2 justify-center items-center">
            <IoPerson />
            联系我们
          </div>
        </div> */}
        <div className="flex-1 btn-base text-white text-base text-muted-foreground btn-md sm:btn-lg bg-indigo-500 border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-indigo-600 relative transition-colors">
          <DocContactCard />
          <div className="flex gap-2 justify-center items-center">
            <IoPerson />
            联系我们
          </div>
        </div>
        <div className="space-x-4">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md"
          >
            快速开始
          </Link>
          <Link
            href="https://www.github.com/zhuima"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
