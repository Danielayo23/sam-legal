"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function ResidentialProperty() {
  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        image="/images/ResidentialProperty.jpg"
        alt="Residential Property"
        text="We ensure families and individuals secure their perfect homes"
      />

      {/* Intro */}
      {/* <section className="max-w-5xl mx-auto px-6 py-12 text-center"> */}
           <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 text-center ">
                <div className="max-w-7xl mx-auto px-4 sm:px-0.5 lg:px-0.5 py-5 lg:py-5">
                  <nav aria-label="Breadcrumb" className="mb-6 text-sm bg-[#8ed1fc] py-3 px-5">
                    <ol className="flex items-center gap-2 text-gray-600">
                      <li>
                        <Link href="/" className="hover:underline">Home</Link>
                      </li>
                      <li aria-hidden>››</li>
                      <li>
                        <Link href="/property" className="hover:underline">Property</Link>
                      </li>
                      <li aria-hidden>››</li>
                        <li className="text-gray-900 font-medium">Residential Property</li>
                    </ol>
                 </nav>
                 </div>
        <h2 className="text-3xl  mb-4">Residential Property & Conveyancing Solicitors</h2>
        <p className="text-gray-600 leading-relaxed">
          Whether you are looking to buy your first home, upgrade, or invest
          in rental properties, we provide tailored solutions that make your
          journey stress-free and rewarding.
        </p>
      </section>

      {/* Example Properties */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-12">
        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/apartment.jpg" alt="Apartments" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Apartments</h3>
            <p className="text-gray-600">Modern apartments with world-class amenities.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/villa.jpg" alt="Villas" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Family Villas</h3>
            <p className="text-gray-600">Spacious villas with private gardens and pools.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/land.jpg" alt="Residential Land" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Residential Land</h3>
            <p className="text-gray-600">Secure land plots for building your dream home.</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Find Your Dream Home</h2>
        <p className="mb-6">Our residential specialists will help you every step of the way.</p>
        <a href="/contact" className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
          Get Started
        </a>
      </section>
    </div>
  );
}
