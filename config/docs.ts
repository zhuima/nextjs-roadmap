/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-01 11:26:06
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-10 14:25:26
 * @FilePath: /nextjs-roadmap/config/docs.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "知识库",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "前言",
      items: [
        {
          title: "写在前面",
          href: "/docs",
        },
      ],
    },
    {
      title: "第一章",
      items: [
        {
          title: "内容简介",
          href: "/docs/documentation/chapter1",
        },
        {
          title: "Next.js 演进历史",
          href: "/docs/documentation/chapter1/Introduction-to-Next.js-13-App-Router",
        },
        {
          title: "Next.js App Router 核心功能",
          href: "/docs/documentation/chapter1/Core-Features-of-the-Next.js-13-App-Router",
        },
        {
          title: "App Router 和 Page Router 的区别",
          href: "/docs/documentation/chapter1/Comparison-Between-App-Router-and-Page-Router",
        },
      ],
    },
        {
      title: "第二章",
      items: [
        {
          title: "内容简介",
          href: "/docs/documentation/chapter2",
        },
        {
          title: "React 基础知识",
          href: "/docs/documentation/chapter2/Understanding-React-Fundamentals",
        },
        {
          title: "区分 Next.js 与 React",
          href: "/docs/documentation/chapter2/Differences-between-Next.js.13-and-React",
        },
        {
          title: "使用 Next.js 13 优于 React 的优势",
          href: "/docs/documentation/chapter3/Advantages-of-Using-Next.js-13-Over-React",
        },
      ],
    },
            {
      title: "第三章",
      items: [
        {
          title: "内容简介",
          href: "/docs/documentation/chapter3",
        },
        {
          title: "初学者在开始使用 Next.js 时应注意的事项",
          href: "/docs/documentation/chapter3/Things-Beginners-Should-Be-Aware-of-When-Starting-with-Next.js-13",
        },
        {
          title: "安装和设置 Next.js 环境",
          href: "/docs/documentation/chapter3/Installation-and-Setup-of-Next.js-13",
        },
        {
          title: "使用 Next.js 13 构建简单 hello world 页面",
          href: "/docs/documentation/chapter3/Building-hello-world-page-with-Next.js-13",
        },
      ],
    },
    {
      title: "项目实战",
      items: [
        {
          title: "写在前面",
          href: "/docs/documentation/real-world-project",
        },
        // {
        //   title: "落地页",
        //   href: "/docs/documentation/real-world-project/landing-page",
        // },
        //         {
        //   title: "博客项目",
        //   href: "/docs/documentation/real-world-project/blog",
        // },
      ],
    },
            {
      title: "工具或文档推荐",
      items: [
        {
          title: "写在前面",
          href: "/docs/documentation/tools",
        },
        { 
          title: "JavaScript 优秀教程推荐",
          href: "/docs/documentation/Tools-and-Tutorials/JavaScript-tutorial-recommendation"
        },

        // {
        //   title: "环境要求",
        //   href: "/docs/documentation/tools/requirement",
        // },
        //         {
        //   title: "包管理工具对比",
        //   href: "/docs/documentation/tools/package-manage",
        // },
      ],
    },
  ],
}