// components/Hero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  image: string;
  alt: string;
  text: string;
}

export default function Hero({ image, alt, text }: HeroProps) {
  return (
    <div
      className="
        hero-under-header
        relative w-full h-[50vh] md:h-[55vh]
        about-top-image
        !mt-[-80px] md:!mt-[-112px]
      "
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Animated Blue Panel */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-1/2 translate-y-[calc(-50%+30px)]
                  w-full md:w-1/2 bg-[#d0e8ff]/80 text-black 
                  p-8 md:p-12 flex items-center shadow-lg"
      >
        <p className="text-xl md:text-3xl leading-relaxed">{text}</p>
      </motion.div>
    </div>
  );
}
