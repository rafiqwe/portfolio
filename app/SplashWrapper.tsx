"use client";
import { useState } from "react";
import { LoadingPage } from "./components/LoadingPage";

export default function SplashWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <div className={`${showSplash ? "overflow-hidden" : ""} h-screen`}>
        {showSplash && <LoadingPage onDone={() => setShowSplash(false)} />}

        <div className={showSplash ? "opacity-0 overflow-hidden" : "opacity-100"}>
          {children}
        </div>
      </div>
    </>
  );
}
