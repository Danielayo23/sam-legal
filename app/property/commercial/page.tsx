"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function CommercialProperty() {
  return (
    <div className="w-full">
      {/* Hero */}
      <Hero
        image="/images/CommercialProperty.jpg"
        alt="Commercial Property"
        text="We can help you to buy, sell, develop, lease and let all types of business premises commercial properties"
      />

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Commercial Property</h2>
        <p className="text-gray-600 leading-relaxed">
          From office spaces and retail outlets to large industrial sites,
          our expertise in commercial property law ensures smooth transactions
          and secure investments.
        </p>
      </section>

      {/* Example Properties */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-12">
        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/office.jpg" alt="Office Spaces" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Office Spaces</h3>
            <p className="text-gray-600">Premium offices in prime business districts.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/retail.jpg" alt="Retail" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Retail Units</h3>
            <p className="text-gray-600">High-traffic retail spaces for maximum visibility.</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="shadow-lg rounded-xl overflow-hidden bg-white">
          <Image src="/images/warehouse.jpg" alt="Warehouse" width={400} height={250} className="object-cover w-full h-56"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Industrial Warehouses</h3>
            <p className="text-gray-600">Large-scale warehouses with easy logistics access.</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Looking for Commercial Property?</h2>
        <p className="mb-6">Our expert team is ready to assist you with every step of your investment.</p>
        <a href="/contact" className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200">
          Contact Us
        </a>
      </section>
    </div>
  );
}
