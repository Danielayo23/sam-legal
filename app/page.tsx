// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      
      <div className="hero-under-header">
        <HeroSection />
      </div>

      {/* <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-gray-900">SAM LEGAL</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Professional legal advice and representation you can trust anytime.
          </p>
        </div>
      </section> */}
    </>
  );
}


