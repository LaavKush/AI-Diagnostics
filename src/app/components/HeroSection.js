'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { heroTexts } from '@/data/data';
import { HeartPulse } from 'lucide-react';

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroTexts.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Brand Title */}
      <div className="flex items-center justify-center gap-3 py-6 mt-10 mb-12">
        <HeartPulse className="text-black w-15 h-15" />
        <h1 className="text-4xl font-bold text-black tracking-wide font-serif">
          ABC<span className="text-[#130036]"><i>.ai</i></span>
        </h1>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-screen overflow-hidden">
  <Image
    src="/hero-image.jpg"
    alt="Elderly man using phone"
    layout="fill"
    objectFit="cover"
    className="z-0"
    priority
  />


        {/* Overlayed Heading + Subheading */}
        <div
          className={`absolute top-16 left-1/2 transform -translate-x-1/2 z-30 text-center transition-opacity duration-500 ${
            fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ color: '#0A2E18' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {heroTexts[index].heading}
          </h1>
          <p
            className="text-2xl text-black font-normal"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {heroTexts[index].subheading}
          </p>
        </div>

        {/* Join Waitlist Button */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-30">
          <button className="
            bg-[#203C5B] 
            text-white 
            px-10 py-5 
            rounded-md 
            font-semibold 
            shadow-md 
            hover:bg-[#151e29ab]
            transition 
            text-lg sm:text-xl md:text-2xl
          ">
            Join waitlist →
          </button>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
