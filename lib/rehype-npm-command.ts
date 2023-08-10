/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-02 10:09:56
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-02 10:10:05
 * @FilePath: /nextjs-roadmap/lib/rehype-npm-command.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { UnistNode, UnistTree } from "types/unist"
import { visit } from "unist-util-visit"

export function rehypeNpmCommand() {
  return (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return
      }

      // npm install.
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"]
        node.properties["__npmCommand__"] = npmCommand
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        )
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        )
      }

      // npx create.
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"]
        node.properties["__npmCommand__"] = npmCommand
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        )
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        )
      }

      // npx.
      if (
        node.properties?.["__rawString__"]?.startsWith("npx") &&
        !node.properties?.["__rawString__"]?.startsWith("npx create-")
      ) {
        const npmCommand = node.properties?.["__rawString__"]
        node.properties["__npmCommand__"] = npmCommand
        node.properties["__yarnCommand__"] = npmCommand
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        )
      }
    })
  }
}