//Heroslider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";

interface HeroSliderProps {
  isMobile: boolean;
}

export default function HeroSlider({ isMobile }: HeroSliderProps) {
  const slides = [
    { src: "/images/property-11.jpg", alt: "Slide 1" },
    { src: "/images/family-1.webp", alt: "Slide 2" },
    { src: "/images/client-1.jpg", alt: "Slide 3" },
    { src: "/images/will1.webp", alt: "Slide 4" },
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect={isMobile ? "fade" : "slide"} // fade for mobile, slide for desktop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={isMobile ? 1000 : 800}
      loop
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[60vh] md:h-[80vh]">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
