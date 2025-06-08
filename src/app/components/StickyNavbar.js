"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const StickyNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showNavbar) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b-2 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-12 h-24">

        {/* 🌟 Left Side: Logo */}
        <div className="flex items-center gap-3 text-3xl font-bold text-green-900">
          <span className="text-4xl">🛡️</span>
          SolidHealth.<i className="text-gray-600">ai</i>
        </div>

        {/* 👉 Right Side: Tabs + CTA Button */}
        <div className="flex items-center gap-10">

          {/* Tabs */}
          <div className="flex gap-8 bg-orange-50 px-6 py-3 rounded-full text-xl text-gray-700 font-semibold shadow-inner">
            {['Overview', 'Features', 'Preventative care'].map(tab => (
              <Link
                key={tab}
                href="#"
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full transition shadow-sm ${
                  activeTab === tab
                    ? 'bg-white text-green-900'
                    : 'hover:text-green-900'
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="#"
            className="bg-[#0D2645] text-white text-xl px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
