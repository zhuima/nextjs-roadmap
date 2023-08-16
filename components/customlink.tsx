"use client";
import React, { useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";

export default function CustomLink({ children, href }) {
  let [imagePreview, setImagePreview] = React.useState("");
  let [isHovering, setIsHovering] = React.useState(false);
  let inImagePreview = false;
  let inLink = false;
  const plausible = usePlausible();

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let handleMouseEnterImage = () => {
    inImagePreview = true;
    setIsHovering(true);
  };

  let handleMouseLeaveImage = () => {
    inImagePreview = false;
    setIsHovering(inLink);
  };

  let handleMouseEnterLink = () => {
    inLink = true;
    setIsHovering(true);
  };

  let handleMouseLeaveLink = () => {
    inLink = false;
    setIsHovering(inImagePreview);
  };

  let handleFetchImage = useCallback(
    async (url: string) => {
      const res = await fetch(`${origin}/api/link-preview?url=${url}`);
      const data = await res.json();
      setImagePreview(data.image);
      plausible("Link Preview");
    },
    [origin]
  );

  React.useEffect(() => {
    handleFetchImage(href);

    return () => setImagePreview("");
  }, [href, handleFetchImage]);

  return (
    <span>
      <span className="relative z-10 hidden md:inline-block font-medium underline-offset-4 text-blue-700 dark:text-blue-400 hover:underline active:no-underline sm:hover:text-blue-700 active:text-blue-900 sm:active:text-blue-900">
        <Link
          href={href}
          className={`${isHovering && "underline"}`}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
          onFocus={handleMouseEnterLink}
          onBlur={handleMouseLeaveLink}
        >
          {children}
        </Link>
        {isHovering && (
          <Link href={href} passHref>
            <span
              className="w-56 h-44 absolute -mt-6 top-[-195px] left-1/2 transform -translate-x-[7rem] translate-y-8 flex items-start justify-center"
              onMouseLeave={handleMouseLeaveImage}
              onMouseEnter={handleMouseEnterImage}
              onFocus={handleMouseEnterImage}
              onBlur={handleMouseLeaveImage}
            >
              {imagePreview ? (
                <Image
                  fill
                  className="object-cover object-top w-56 h-40 bg-white rounded-md shadow-lg hover:ring-4 hover:ring-emerald-400"
                  src={imagePreview}
                  alt={children}
                />
              ) : (
                <span className="flex items-center justify-center w-56 h-40 bg-white rounded-md shadow-lg text-slate-800">
                  Loading...
                </span>
              )}
            </span>
          </Link>
        )}
      </span>
      <Link
        href={href}
        className={`${isHovering && "underline"} md:hidden`}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        onFocus={handleMouseEnterLink}
        onBlur={handleMouseLeaveLink}
      >
        {children}
      </Link>
    </span>
  );
}
