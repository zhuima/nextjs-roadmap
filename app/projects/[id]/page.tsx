/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-10 11:57:08
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
  return projects.find((project) => project.id === id);
}

export default function Page({ params }) {
  const projectData = filterProjects(projectsData, params.id);

  console.log("videoData", projectData);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-12">
        <DocsPageHeader heading="项目详情" text="." />
      </div>

      <div className="container">
        {/* 123 */}

        {/* 456 */}
      </div>
    </div>
  );
}
