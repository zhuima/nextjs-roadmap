/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-25 17:39:58
 * @FilePath: /nextjs-roadmap/app/projects/[id]/page.tsx
 * @Description: https://www.bilibili.com/video/BV1Ce411N7pV/
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/config/projects";
import { DocsPageHeader } from "@/components/page-header";

function filterProjects(projects, id) {
  // console.log("full project data", projects);
  const project = projects.find((project) => project.id.toString() === id);
  if (project) {
    return project;
  } else {
    return null;
  }
}

export default function Page({ params }) {
  const project = filterProjects(projectsData, params.id);

  console.log("videoData id", params.id);

  console.log("videoData", project);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-12">
        <DocsPageHeader heading="项目描述" text="" />
      </div>
      <div className="container">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                项目名称
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {project.title}
              </h1>
              <div className="flex mb-4">
                <button className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  描述
                </button>
                <button className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  其他功能
                </button>
                <button className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  其他功能
                </button>
              </div>
              <p className="leading-relaxed mb-4">{project.description}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">框架</span>
                <span className="ml-auto text-gray-900">Next.js</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">UI</span>
                <span className="ml-auto text-gray-900">Chakra UI </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">部署</span>
                <span className="ml-auto text-gray-900">Vercel</span>
              </div>
              <div className="flex">
                <Link
                  href={project ? project.href : "/projects"}
                  target="_blank"
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  点击访问
                </Link>
              </div>
            </div>

            <Image
              src={project.imgSrc}
              width="400"
              height="400"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              unoptimized
              alt={project.title}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
