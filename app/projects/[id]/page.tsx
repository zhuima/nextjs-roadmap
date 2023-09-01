/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-25 18:39:48
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 10:57:48
 * @FilePath: /nextjs-roadmap/app/projects/[id]/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 10:55:43
 * @FilePath: /nextjs-roadmap/app/projects/[id]/page.tsx
 * @Description: https://www.bilibili.com/video/BV1Ce411N7pV/
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/config/projects";
import { DocsPageHeader } from "@/components/page-header";
import ZoomImage from "@/components/zoomimage";
import DocFooter from "@/components/doc-footer";
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
        <DocsPageHeader heading={project.title} text="" />
      </div>
      <div className="container">
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="mt-6 overflow-hidden bg-gray-100 rounded-xl">
              <Image
                src={project.imgSrc}
                width="640"
                height="150"
                className="block w-full rounded-t-xl"
                unoptimized
                alt={project.title}
              />
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="flex justify-between w-full lg:mt-10">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    概要
                  </h2>

                  <h2 id="information-heading" className="sr-only">
                    项目信息
                  </h2>
                  <div className="flex items-center mt-2">
                    <Link href="https://github.com/Tailus-UI" target="_blank">
                      <Image
                        className="rounded-full flex-shrink-0 mr-3"
                        alt="Tailus avatar"
                        width="24"
                        height="24"
                        src="https://d1w019qw3bn26k.cloudfront.net/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2c5056efaa642e15f433c6915f8581d03680525/Tailus"
                      ></Image>
                    </Link>{" "}
                    <div className="text-md">
                      <span className="text-gray-600">By </span>
                      <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {project.author}
                      </Link>
                    </div>
                  </div>
                </div>

                <p className="ml-4 text-3xl font-bold sm:ml-6 text-indigo-600 font-display">
                  Free
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-700 text-17px">
              {project.description}
            </p>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2">
              <Link
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-2xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                target="_blank"
                href="https://github.com/nextjs-roadmap"
              >
                获取源码
              </Link>
              <Link
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 border border-transparent rounded-2xl bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                target="_blank"
                href="https://landing-page.techrk1688.eu.org/"
              >
                查看demo
              </Link>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 ">
              <div className="font-medium leading-6 tracking-wider text-left text-gray-500 uppercase text-md">
                技术栈
              </div>
              <div className="mt-4 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 ">
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>Next.js</div>
                </div>
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>Tailwind CSS</div>
                </div>
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>Chakra UI</div>
                </div>
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>Vercel</div>
                </div>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 ">
              <div className="font-medium leading-6 tracking-wider text-left text-gray-500 uppercase text-md">
                其他
              </div>
              <div className="mt-4 text-gray-800">
                <div className="flex justify-between my-3">
                  <div className="w-full font-medium leading-8 text-gray-500 text-md max-w-xxxs">
                    Tags
                  </div>
                  <div className="leading-8 text-right max-w-xxs">
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      landing page
                    </Link>
                    ,{" "}
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      startup
                    </Link>
                    ,{" "}
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      saas
                    </Link>
                    ,{" "}
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      marketing
                    </Link>
                    ,{" "}
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      start
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between my-3">
                  <div className="w-full font-medium leading-8 text-gray-500 text-md max-w-xxxs">
                    Stack
                  </div>
                  <div className="leading-8 text-right max-w-xxs">
                    <Link
                      className="text-md font-medium text-indigo-600 hover:text-indigo-500"
                      href="#"
                    >
                      Next.js
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <div className="pb-5 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                关于 {project.title}
              </h3>
            </div>
            <div className="py-3 prose text-gray-700 break-words xl:pt-6 xl:pb-0 prose-indigo max-w-none">
              <div className="trix-content">
                <div>
                  基于 Next.js 13 + TailwindCSS + TypeScript 实现 Landing Page
                  的搭建。
                </div>
                <h3>项目结构</h3>
                <div>本项目结构如下:</div>

                <div className="mt-6 overflow-hidde rounded-xl">
                  <ZoomImage
                    src={project.project_layout}
                    height="404"
                    // @ts-ignore
                    width="auto"
                    unoptimized
                    alt={project.title}
                    priority={true}
                    placeholder="blur"
                  />
                </div>
                <DocFooter pageTitle={project.title} />
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
