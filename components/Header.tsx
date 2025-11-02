'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile drawer
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown toggle

  // Desktop dropdown menus with nested children
  const desktopMenus: Record<
    string,
    { label: string; href: string; children?: { label: string; href: string }[] }[]
  > = {
    hamburger: [
      { label: 'About Us', href: '/about' },
      { label: 'News', href: '/news' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Meet the Team', href: '/team' },
      { label: 'Community', href: '/community' },
      { label: 'Contact', href: '/contact' },
    ],
    property: [
      {
        label: 'Residential Property',
        href: '/property/residential',
        children: [
          { label: 'Buying/Selling a Home', href: '/property/residential/buy-sell' },
          { label: 'Remortgaging', href: '/property/residential/remortgaging' },
          { label: 'New Build/Help to Buy', href: '/property/residential/new-build' },
          { label: 'Buy to Let', href: '/property/residential/buy-to-let' },
          { label: 'Shared Ownership', href: '/property/residential/shared-ownership' },
          { label: 'Transfer of Equity', href: '/property/residential/transfer-equity' },
        ],
      },
      {
        label: 'Commercial Property',
        href: '/property/commercial',
        children: [
          { label: 'Business Acquisition and Disposable', href: '/property/commercial/business-acquisition' },
          { label: 'Leasehold Land', href: '/property/commercial/lease-land' },
          { label: 'Development', href: '/property/commercial/development' },
          { label: 'Finance and Security', href: '/property/commercial/finance-security' },
          { label: 'Infrastructure and Utilities', href: '/property/commercial/infrastructure' },
          { label: 'Agricultural and Rural Land', href: '/property/commercial/agriculture' },
        ],
      },
    ],
    individuals: [
      {
        label: 'Family',
        href: '/individuals/family',
        children: [
          { label: 'Separation & Divorce', href: '/individuals/family/separation-divorce' },
          { label: 'Pre-Nups, Co-habitation & Agreements', href: '/individuals/family/pre-nups' },
          { label: 'Children', href: '/individuals/family/children' },
          { label: 'Financial & Property Disputes', href: '/individuals/family/disputes' },
          { label: 'Other Family Services', href: '/individuals/family/other-family-services' },
        ],
      },
      {
        label: 'Wills, Trusts & Probate',
        href: '/individuals/wills-trusts-probate',
        children: [
          { label: 'Making a Will', href: '/individuals/wills-trusts-probate/will' },
          { label: 'Lasting Powers of Attorney', href: '/individuals/wills-trusts-probate/attorney' },
          { label: 'Probate/Estate Administration', href: '/individuals/wills-trusts-probate/probate' },
          { label: 'Care Fee Planning', href: '/individuals/wills-trusts-probate/care' },
          { label: 'Other WTP Services', href: '/individuals/wills-trusts-probate/other-wtp-services' },
        ],
      },
      {
        label: 'Employment',
        href: '/individuals/employment',
        children: [
          { label: 'My Employment', href: '/individuals/employment/my-employment' },
          { label: 'My Settlement Agreement', href: '/individuals/employment/settlement' },
          { label: 'Senior Executive & Professional', href: '/individuals/employment/senior' },
        ],
      },
      { label: 'Dispute Resolution', href: '/individuals/dispute-resolution' },
    ],
    commercial: [
      {
        label: 'Employment',
        href: '/commercial/commercial-employment',
        children: [
          { label: 'Day-to-day Advice & Support', href: '/commercial/commercial-employment/day-to-day' },
          { label: 'Business Change', href: '/commercial/commercial-employment/change' },
          { label: 'Protection, Defense & Enforcement', href: '/commercial/commercial-employment/protection' },
          { label: 'Specialized Employment & HR Services', href: '/commercial/commercial-employment/hr' },
        ],
      },
      {
        label: 'Commercial Dispute Resolution',
        href: '/commercial/commercial-disputes',
        children: [
          { label: 'Business Disputes', href: '/commercial/commercial-disputes/business' },
          { label: 'Contract & Consumer Dispute', href: '/commercial/commercial-disputes/contract' },
          { label: 'Professional Negligence', href: '/commercial/commercial-disputes/negligence' },
          { label: 'Property Dispute', href: '/commercial/commercial-disputes/property' },
          { label: 'Other Dispute Resolution', href: '/commercial/commercial-disputes/other-dispute-resolution' },
        ],
      },
      {
        label: 'Corporate Commercial',
        href: '/commercial/corporate-commercial',
        children: [
          { label: 'Business Startup', href: '/commercial/corporate-commercial/startup' },
          { label: 'Commercial Contracts', href: '/commercial/corporate-commercial/contracts' },
          { label: 'Information Technology', href: '/commercial/corporate-commercial/it' },
          { label: 'Intellectual Property', href: '/commercial/corporate-commercial/ip' },
          { label: 'Mergers & Acquisitions', href: '/commercial/corporate-commercial/mergers-acquisitions' },
          { label: 'Partnership & LLPs', href: '/commercial/corporate-commercial/llp' },
        ],
      },
      { label: 'Debt Recovery / Insolvency', href: '/commercial/debt-recovery' },
      { label: 'Supporting Small Businesses', href: '/commercial/small-business' },
    ],
  };

  return (
    <header
      className="
        sticky top-0 z-50
        shadow-md bg-white
        lg:bg-transparent lg:shadow-[0_4px_10px_rgba(0,0,0,0.15)]
        lg:absolute lg:top-0 lg:left-0 lg:w-full
      "
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Hamburger (desktop only) */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/sam-logo.png" alt="SAM Legal Logo" width={50} height={50} priority />
              <span className="text-2xl font-bold tracking-wide text-black lg:text-white">
                <span className="text-blue-700">SAM</span>{' '}
                <span className="text-green-700">LEGAL</span>
              </span>
            </Link>

            {/* Desktop Hamburger Dropdown */}
            <div className="relative hidden lg:block group">
              <button className="text-white font-semibold hover:text-blue-300 flex items-center">
                <Menu size={20} className="mr-1" />
              </button>
              <div
                className="absolute left-0 mt-2 w-44 rounded-md shadow-md 
                  bg-[#d0e8ff]/90 backdrop-blur-sm 
                  transition-all duration-300 ease-in-out transform 
                  opacity-0 invisible -translate-y-2 
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 text-sm"
              >
                <ul className="py-1">
                  {desktopMenus.hamburger.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="block px-3 py-1.5 text-gray-800 hover:bg-blue-100">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-white font-semibold ml-6 text-sm">
            {['property', 'individuals', 'commercial'].map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setOpenMenu(menu)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="flex items-center">
                  <Link href={`/${menu}`} className="hover:text-blue-300">
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  </Link>
                  <button
                    type="button"
                    className="ml-1 text-white hover:text-blue-300 focus:outline-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenMenu(openMenu === menu ? null : menu);
                    }}
                  >
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform duration-200 ${
                        openMenu === menu ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-52 shadow-md 
                    bg-[#d0e8ff]/90 backdrop-blur-sm 
                    transition-all duration-300 ease-in-out transform text-sm
                    ${openMenu === menu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                  `}
                >
                  <ul className="py-1">
                    {desktopMenus[menu].map((item) => (
                      <li key={item.label} className="relative group/submenu">
                        <Link
                          href={item.href}
                          className="block px-3 py-1.5 text-gray-800 hover:bg-blue-100 flex justify-between items-center"
                        >
                          {item.label}
                          {item.children && (
                            <ChevronDown
                              size={12}
                              className="ml-1 transform transition-transform duration-200 group-hover/submenu:rotate-270"
                            />
                          )}
                        </Link>

                        {/* Nested Submenu */}
                        {item.children && (
                          <div
                            className="absolute top-0 left-full ml-0 w-56 shadow-md 
                              bg-[#d0e8ff]/90 backdrop-blur-sm 
                              transition-all duration-300 ease-in-out transform 
                              opacity-0 invisible -translate-y-1
                              group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-y-0 text-sm"
                          >
                            <ul className="py-1">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    className="block px-3 py-1.5 text-gray-800 hover:bg-blue-100 flex justify-between items-center"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button (unchanged) */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-gray-700 focus:outline-none">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (unchanged) */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-[rgba(173,216,230,0.7)]" onClick={() => setIsOpen(false)} />
        <div
          className="relative bg-white w-72 h-full p-5 flex flex-col shadow-[4px_0_10px_rgba(0,0,0,0.3)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            <Link href="/about">About Us</Link>
            <Link href="/news">News</Link>
            <Link href="/jobs">Jobs</Link>
            <Link href="/team">Meet the Team</Link>
            <Link href="/community">Community</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
