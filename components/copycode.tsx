/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-08-01 18:19:58
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-01 18:20:03
 * @FilePath: /nextjs-roadmap/components/copycode.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";

import { useState } from "react";

export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button disabled={isCopied} onClick={copy}>
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};
