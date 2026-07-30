"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const hideTimer = setTimeout(() => setHiding(true), 700);
    const goneTimer = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = "";
    }, 1050);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(goneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out motion-reduce:transition-none ${
        hiding ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/brand/logo.svg"
        alt=""
        className={`h-16 w-16 invert dark:invert-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
          hiding ? "scale-90 opacity-0" : "animate-loader-pulse"
        }`}
      />
    </div>
  );
}
