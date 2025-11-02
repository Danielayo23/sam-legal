import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { CheckCircle, Home, FileText, Handshake, Shield, Phone, Mail, MapPin, ArrowRight, User, Clock, ClipboardList } from "lucide-react";

// Place this file where you want it (e.g. app/residential/buy-sell/page.tsx in Next.js App Router)
// and ensure Tailwind CSS is configured. No external UI libs required.

export default function BuyingSellingHome() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
              image="/images/Property2.jpg"
              alt="Property Hero"
              text="Our guarantee is to provide a top class service at an affordable price whatever the landscape"
            />   
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
              <li className="text-gray-900 font-medium">Buying / Selling a Home</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Buying or Selling a Home
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                Clear, proactive conveyancing to move you from offer to completion with confidence. 
                We keep you updated at every step and work efficiently with agents, lenders and the other side.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-white font-semibold shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Get a Fixed-Fee Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#faqs"
                  className="inline-flex items-center justify-center rounded-xl border border-blue-700 px-5 py-3 text-blue-700 font-semibold hover:bg-blue-700/10"
                >
                  Read FAQs
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { icon: <Clock className="h-5 w-5" />, title: "Swift onboarding" },
                  { icon: <Shield className="h-5 w-5" />, title: "SRA-regulated" },
                  { icon: <Handshake className="h-5 w-5" />, title: "Agent + lender liaison" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-lg px-3 py-2 shadow">
                    <span className="text-blue-700">{f.icon}</span>
                    <span className="text-gray-800 font-medium">{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 bg-white">
                <Image
                  src="/images/conveyancing-keys.jpg"
                  alt="Conveyancing support for buying and selling a home"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key services */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "Buying a Property",
                points: [
                  "Offer review and acceptance guidance",
                  "Searches, enquiries & reporting",
                  "Mortgage coordination and conditions",
                  "Exchange & completion management",
                ],
              },
              {
                title: "Selling a Property",
                points: [
                  "Drafting contract pack promptly",
                  "Title review & remedy of issues",
                  "Responding to buyer enquiries",
                  "Redeeming existing mortgage",
                ],
              },
              {
                title: "Specialist matters",
                points: [
                  "Leasehold & shared ownership",
                  "New builds & Help to Buy",
                  "Transfers of equity",
                  "Buy-to-let & portfolios",
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-blue-700" />
                  <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50" aria-labelledby="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="process" className="text-2xl font-bold text-gray-900">How the process works</h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            Every move is different, but these are the core stages you can expect. We keep you updated and chase proactively.
          </p>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Onboarding", desc: "ID checks, instruction forms, and initial documents so we can open your file quickly.", icon: <User className="h-6 w-6"/> },
              { step: "2", title: "Searches & Enquiries", desc: "We order searches and raise enquiries, reporting clearly on anything that needs action.", icon: <ClipboardList className="h-6 w-6"/> },
              { step: "3", title: "Exchange", desc: "Once all is agreed, we exchange contracts and set a fixed completion date.", icon: <FileText className="h-6 w-6"/> },
              { step: "4", title: "Completion", desc: "Funds are sent, keys are released, and we handle post-completion registration.", icon: <Handshake className="h-6 w-6"/> },
            ].map((s) => (
              <li key={s.step} className="relative rounded-2xl bg-white p-5 shadow-sm border">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white font-bold">{s.step}</span>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">{s.icon}{s.title}</h3>
                </div>
                <p className="mt-3 text-gray-700">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900">Why choose us for your move</h2>
              <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Plain-English advice and clear timeframes",
                  "Proactive chasing of third parties",
                  "Transparent, fixed-fee quotes with no surprises",
                  "Dedicated conveyancer with direct contact details",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Shield className="h-5 w-5 text-blue-700"/> What you get</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>Dedicated case handler</li>
                  <li>Regular updates by email/phone</li>
                  <li>Clear action lists for each stage</li>
                  <li>Secure online document exchange</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="mt-6 divide-y rounded-2xl border bg-white">
            {[
              {
                q: "How long does conveyancing take?",
                a: "Average transactions complete in 8–12 weeks, but chains, leaseholds and lender requirements can lengthen timelines. We provide realistic updates as your matter progresses.",
              },
              {
                q: "What searches will you carry out?",
                a: "For purchases we typically order local authority, drainage & water, and environmental searches, plus any location-specific checks recommended after a title review.",
              },
              {
                q: "When do I pay fees?",
                a: "We ask for funds to cover searches up front. Professional fees and remaining disbursements are usually settled on completion.",
              },
            ].map((item, idx) => (
              <details key={idx} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-gray-900">
                  {item.q}
                  <ChevronListIcon />
                </summary>
                <p className="mt-3 text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote form (simple) */}
      <section id="contact" className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Request a fixed-fee quote</h2>
            <p className="mt-2 text-gray-700">Tell us a few details and we’ll come back quickly.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm text-gray-700">Your name</span>
                <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700">Email</span>
                <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="jane@example.com" />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700">Phone</span>
                <input type="tel" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="01234 567890" />
              </label>
              <label className="block">
                <span className="text-sm text-gray-700">Buying or selling?</span>
                <select className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Both</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm text-gray-700">Anything else we should know?</span>
                <textarea className="mt-1 w-full rounded-lg border px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="e.g. chain-free, leasehold, new build, Help to Buy, target dates" />
              </label>
              <div className="sm:col-span-2 flex items-center justify-between">
                <button type="button" className="inline-flex items-center rounded-xl bg-blue-700 px-5 py-3 text-white font-semibold shadow hover:bg-blue-800">
                  Send enquiry
                </button>
                <div className="text-sm text-gray-600 flex items-center gap-4">
                  <span className="flex items-center gap-1"><Phone className="h-4 w-4"/> 01234 567890</span>
                  <span className="flex items-center gap-1"><Mail className="h-4 w-4"/> conveyancing@example.com</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4"/> Your City</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

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
    </main>
  );
}

function ChevronListIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none text-gray-500 group-open:rotate-180 transition-transform"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 011.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.25 8.31a.75.75 0 01-.02-1.1z" />
    </svg>
  );
}
