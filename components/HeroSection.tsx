// components/HeroSection.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth <= 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const images = [
    "/images/property-11.jpg",
    "/images/client-1.jpg",
    "/images/will1.webp",
    "/images/family-1.webp",
  ];

  return (
    <div className="relative w-full h-[100vh] md:h-[100vh]">
      <Swiper
        key={isMobile ? "mobile" : "desktop"}
        modules={[Autoplay, EffectFade, Pagination]}
        effect={isMobile ? "fade" : "slide"}
        fadeEffect={isMobile ? { crossFade: true } : undefined}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={isMobile ? 1800 : 1600}
        loop
        className="w-full h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
