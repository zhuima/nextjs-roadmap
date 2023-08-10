/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-01 15:00:25
 * @FilePath: /nextjs-roadmap/app/projects/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/config/projects";
import { DocsPageHeader } from "@/components/page-header";

export const metadata = {
  title: "教程配套实战项目列表 | Next.js 学习之路",
  description: "Next.js 学习之路, Next.js实战项目。",
  keywords: ["实战项目", "Next.js实战项目", "Next.js项目", "Next.js教程"],
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-12">
        <DocsPageHeader heading="项目列表" text="教程配套实战项目." />
      </div>
      <div className="container">
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {projectsData.map((v) => (
            <article
              key={v.id}
              className="group mx-auto w-full max-w-md transform cursor-pointer rounded-b-xl shadow-xl duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full w-full  flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative flex-shrink-0">
                  <Image
                    src={v.imgSrc}
                    width="640"
                    height="150"
                    className="block w-full rounded-t-xl"
                    unoptimized
                    alt={v.title}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div>
                      {v.title}
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {v.description}
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">
                        #{v.tag}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center p-6 bg-gray-100 relative">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-3 absolute left-4">
                      <div className="text-xs leading-5 text-gray-600">
                        {v.time}
                      </div>
                    </div>
                    <Link
                      href={v.href}
                      className="absolute right-4 mx-auto text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900 ">
                        项目详情
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
