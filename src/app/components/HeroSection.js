'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import heroTexts from '@/data/data'; 
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
      <div className="flex items-center justify-center gap-3 py-6 mt-10 mb-12">
        <HeartPulse className="text-black w-15 h-15" />
        <h1 className="text-4xl font-bold text-black tracking-wide font-serif">
          SolidHealth<span className='text-[#130036]'><i>.ai</i></span> 
        </h1>
      </div>

    <div
  className={` mb-14 text-center transition-opacity duration-500 transform ${
    fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
  }`}
  style={{ color: '#2F0089' }}
>
  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
    {heroTexts[index].heading}
  </h1>
 <p
  className="text-2xl mb-6 text-black font-normal"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  {heroTexts[index].subheading}
</p>

</div>


      <div className="relative w-full overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Elderly man using phone"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />

        <div className="absolute top-12 sm:top-16 md:top-20 left-1/2 transform -translate-x-1/2 z-30">
          <button className="
            bg-[#2F0089] 
            text-white 
            px-10 py-5 
            rounded-md 
            font-semibold 
            shadow-md 
            hover:bg-blue-700 
            transition 
            text-lg sm:text-xl md:text-2xl
          ">
            Join waitlist →
          </button>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-white via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
