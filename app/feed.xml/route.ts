/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-11 10:32:26
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-10 13:48:43
 * @FilePath: /nextjs-roadmap/app/feed.xml/route.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import RSS from 'rss'

export async function GET() {
  const feed = new RSS({
    title: 'Next.js 13 学习之路',
    description:  "Next.js 13 学习之路, Next.js App Router, Next.js Image, Next.js 13, Next.js 13 Link",
    site_url: 'https://techrk1688.eu.org/', // 你的网站域名
    feed_url: 'https://techrk1688.eu.org/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: 'https://techrk1688.eu.org/opengraph-image.png', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: 'JavaScript', // 想写什么就写什么，也可以不提供
  })
 
  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml'
    }
  })
}