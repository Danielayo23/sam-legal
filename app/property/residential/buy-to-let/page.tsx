// components/Property.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function Property() {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <Hero
        image="/images/Property2.jpg"
        alt="Property Hero"
        text="We support landlords or investors looking to purchase properties to rent"
      />        
      {/* ✅ Intro Section */}
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
              <li className="text-gray-900 font-bold">Buy To Let</li>
            </ol>
          </nav>
                 </div>
        <h1 className="text-3xl  mb-4">Buy To Let & Coveyancing Solicitors</h1>
        <p className="text-gray-600 leading-relaxed">
          Many people are now looking to invest in property as something for their retirement, especially since the 
          change in legislation allowing people to cash in their pensions.
        </p><br></br>
        <p className="text-gray-600 leading-relaxed">
            Buy to Let is the term that means you are buying a property specifically to rent it out and not to live 
            there yourself. We have acted for many landlords or investor clients looking to purchase properties to 
            rent out to tenants.
        </p><br></br>
        <p className="text-gray-600 leading-relaxed">
           The process is the same as purchasing any property. If you obtain mortgage finance there will be certain 
           Tenancy Conditions that you will need to comply with when arranging a tenancy agreement.  We will expertly 
           guide you through the process and give you total peace of mind so that you can become a legitimate landlord.
        </p><br></br>
        {/* <p className="text-gray-600 leading-relaxed">
            Our professional teams of property & conveyancing solicitors based in Lagos will 
            give you the very best expert advice and bring your transaction in on time and on budget. We completely 
            understand how important your transaction is for you and we work closely with you to ensure that you 
            achieve the outcome you want, as quickly and economically as possible, keeping you informed every step of 
            the way.
        </p> */}
      </section>

      {/* ✅ Property Categories */}
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
      </section>
    </div>
  );
}


