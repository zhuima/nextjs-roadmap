/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-16 09:54:12
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-16 11:17:12
 * @FilePath: /nextjs-roadmap/app/api/link-preview/route.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { NextRequest, NextResponse } from 'next/server'
import mql from '@microlink/mql';

export async function GET(request: NextRequest) {

  try {
    const url: string = (request.nextUrl.searchParams.get("url") || '').toString();
    console.log(url)

    const { status, data } = await mql(url, {
      screenshot: true,
      // @ts-ignore
      overlay: {
        background:
          'linear-gradient(225deg, #F472B6 0%, #7A96FC 50%, #26F0C0 100%)',
        browser: 'dark'
      }
    });

  return NextResponse.json({"image": data?.screenshot?.url}, { status: 200 })

  


  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 })
  }
}