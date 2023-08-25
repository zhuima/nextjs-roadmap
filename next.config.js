/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-25 14:46:00
 * @FilePath: /nextjs-roadmap/next.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: [
      "tailus.io",
      "api.themoviedb.org",
      "i.ibb.co",
      "img.techrk1688.eu.org",
      "iad.microlink.io",
      "dummyimage.com",
      "d1w019qw3bn26k.cloudfront.net",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/feed.xml",
      },
      {
        source: "/rss.xml",
        destination: "/feed.xml",
      },
      {
        source: "/feed",
        destination: "/feed.xml",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
