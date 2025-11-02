// AboutUs.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const values = [
    { title: "Integrity", description: "We act honestly and ethically in all we do." },
    { title: "Excellence", description: "Delivering the highest quality legal advice." },
    { title: "Client Focus", description: "Your needs and goals are our top priority." },
  ];

  return (
    <>
      {/* ✅ Force hero flush under header in all viewports */}
      <div
        className="
          hero-under-header
          relative w-full h-[50vh] md:h-[55vh]
          about-top-image
          !mt-[-80px] md:!mt-[-112px]  /* override any leftover gap */
        "
      >
        <Image
          src="/images/About2.jpg"
          alt="About SAM Legal"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Animated panel */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-1/2 translate-y-[calc(-50%+30px)]
                    w-full md:w-1/2 bg-[#d0e8ff]/80 text-black 
                    p-8 md:p-12 flex items-center shadow-lg">
          <p className="text-xl md:text-3xl leading-relaxed">
            Our promise to you is that we’ve got all the legal expertise to get you
            to where you want to go
          </p>
        </motion.div>

      </div>

      {/* Main content */}
      <section className="px-6 py-16 space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About SAM Legal</h1>
          <p className="text-lg text-gray-700">
            Since SAM LEGAL's was set up in 1967 we’ve grown to become one of the top law firms in Herts Beds and Bucks. 
            Over the past five decades we’ve established a great reputation as not only one of the best law firms to 
            deal with, we have also ensured that our very personal and sensitive approach to doing business has meant 
            that our clients feel cared for and confident that they can trust us to achieve the outcomes they want.
          </p>
        </div>

        {/* Split Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-700">
              We&apos;ve had a lot of changes in fifty years and now we are seen as a dynamic and more progressive law firm. 
              We&apos;ve got some of the most experienced, qualified and dedicated legal practitioners in the region, all of 
              whom are committed to getting you the best results.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/About2.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        {/* Split Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <Image
              src="/images/About2.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Meet Our Team</h2>
            <p className="text-gray-700">
              Our diverse team of legal experts is passionate about delivering quality service.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
