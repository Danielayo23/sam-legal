// components/Property.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { CheckCircle, Home, FileText, Handshake, Shield, Phone, Mail, MapPin, ArrowRight, User, Clock, ClipboardList } from "lucide-react";


export default function Property() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        image="/images/Property2.jpg"
        alt="Property Hero"
        text="Shared Ownership offers an excellent way of buying your own property"
      />        
      {/*  Intro Section */}
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
              <li>
                <Link href="/property/residential" className="hover:underline">Residential Property</Link>
              </li>
              <li aria-hidden>››</li>
              <li className="text-gray-900 font-bold">Shared Ownership</li>
            </ol>
          </nav>
                 </div>
        <h1 className="text-3xl  mb-4">Shared Ownership Solicitors</h1>
        <p className="text-gray-600 leading-relaxed">
          Shared Ownership schemes are provided through Housing Associations and are an excellent way of buying your 
          own property when prices throughout the country are so high.
        </p><br></br>
        <p className="text-gray-600 leading-relaxed">
          Shared ownership is a cross between buying and renting and is usually aimed at mainly first time buyers.  
          You are able to buy a share of your home, usually from 25% to 75% of the home’s value, and pay rent on the 
          remaining share.
        </p><br></br>
        <p className="text-gray-600 leading-relaxed">
          You will need to take out a regular mortgage to pay for your share of the home’s purchase price and Shared 
          Ownership properties are always leasehold, not freehold. There are also options to purchase a larger share 
          of the property at a later date.
        </p><br></br>
        <p className="text-gray-600 leading-relaxed">
          You will need to speak to your local Help to Buy agent to see if you qualify for these schemes. We will 
          be able to help you with all of the necessary legal matters relating to purchasing a property and ensure 
          that you are taken care of with skill and understanding as we know that you will want to complete your 
          purchase as soon as possible.
        </p>
      </section>

      {/* Property Categories */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 py-12">
        {/* Commercial Property */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="shadow-lg rounded-xl overflow-hidden bg-white"
        >
          <Image
            src="/images/CommercialProperty.jpg"
            alt="Commercial Property"
            width={500}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Commercial Property</h3>
            <p className="text-gray-600 mb-4">
              If you are involved with Commercial Property we can help you to buy, sell, develop, lease and let all 
              types of business premises – from single units through to large scale residential and commercial developments 
              and factories. Our Commercial team has specialist expertise in working closely with small to medium sized 
              businesses, larger companies, developers, mainstream lenders and high net worth individuals.
            </p>
            <Link
              href="/property/commercial"
              className="text-green-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </motion.div>

        {/* Residential Property */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="shadow-lg rounded-xl overflow-hidden bg-white"
        >
          <Image
            src="/images/ResidentialProperty.jpg"
            alt="Residential Property"
            width={500}
            height={300}
            className="object-cover w-full h-64"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Residential Property</h3>
            <p className="text-gray-600 mb-4">
              Whether you are moving home by selling your current residence and 
              purchasing another, if you are a first time buyer or perhaps you are 
              investing in property as a buy to let landlord, we know that the process 
              can be both complicated and stressful. This is where we step in and take the 
              stress away from you by making your purchase as simplified and as straightforward as possible.
            </p>
            <Link
              href="/property/residential"
              className="text-green-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        </motion.div>
              {/* Related links */}
      <section className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Related Residential Services</h2>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-blue-700">
            {[
              { label: "Remortgaging", href: "/residential/remortgage" },
              { label: "New Build / Help to Buy", href: "/residential/new-build" },
              { label: "Buy to Let", href: "/residential/buy-to-let" },
              { label: "Transfer of Equity", href: "/residential/transfer-equity" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-blue-50">
                  <ArrowRight className="h-4 w-4" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </section>
    </div>
  );
}
