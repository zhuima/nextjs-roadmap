/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-07 16:33:57
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-29 14:11:45
 * @FilePath: /nextjs-roadmap/app/sitemap.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// app/sitemap.js
// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

const URL = "https://techrk1688.eu.org";

export default async function sitemap() {
  const routes = [
    "",
    "/docs",
    "/docs/documentation/chapter1",
    "/docs/documentation/chapter1/Introduction-to-Next.js-13-App-Router",
    "/docs/documentation/chapter1/Core-Features-of-the-Next.js-13-App-Router",
    "/docs/documentation/chapter1/Comparison-Between-App-Router-and-Page-Router",
    "/docs/documentation/chapter2",
    "/docs/documentation/chapter2/Understanding-React-Fundamentals",
    "/docs/documentation/chapter2/Differences-between-Next.js.13-and-React",
    "/docs/documentation/chapter2/Advantages-of-Using-Next.js-13-Over-React",
    "/docs/documentation/chapter3",
    "/docs/documentation/chapter3/Things-Beginners-Should-Be-Aware-of-When-Starting-with-Next.js-13",
    "/docs/documentation/chapter3/Installation-and-Setup-of-Next.js-13",
    "/docs/documentation/chapter3/Building-hello-world-page-with-Next.js-13",
    "/docs/documentation/chapter4",
    "/docs/documentation/chapter4/Handling-Errors-in-Next.js-13",
    "/docs/documentation/chapter4/Real-Case-and-Best-Practices-with-Next.js-13",
    "/docs/documentation/real-world-project",
    "/docs/documentation/real-world-project/landing-page",
    "/docs/documentation/Tools-and-Tutorials",
    "/docs/documentation/Tools-and-Tutorials/JavaScript-tutorial-recommendation",
    "/docs/documentation/Tools-and-Tutorials/Best-Cheatsheets-to-Learn-Full-Stack-Development",
    "/projects",
    "/projects/10086",
    "/projects/10087",
    "/projects/10088",
    "/projects/10089",
    "/projects/10090",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
