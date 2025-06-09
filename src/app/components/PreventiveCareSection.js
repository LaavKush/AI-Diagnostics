'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { preventiveCare } from '@/data/data'

const PreventiveCareSection = () => {
  return (
    <section className="w-full bg-[#fdfaf7] overflow-hidden py-24 px-10 md:px-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-20">

        {/* Left image */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-[24px] shadow-xl h-full">
            <Image
              src={preventiveCare.image}
              alt="Preventive Care Specialist"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-[24px]"
              priority
            />
          </div>
        </div>

        {/* Right text content */}
        <div className="w-full">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0e2716] leading-tight mb-8">
            <span>{preventiveCare.heading.strong} </span>
            <span className="text-[#1b365d] relative inline-block">
              {preventiveCare.heading.regular}
              <span className="absolute -top-6 -right-8 text-[#9ea2f6] text-4xl transform rotate-12">↘</span>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            {preventiveCare.description}
          </p>

          <a
            href={preventiveCare.button.href}
            className="inline-flex items-center gap-3 bg-[#1b365d] text-white font-semibold text-lg px-7 py-4 rounded-xl hover:bg-[#15294a] transition-all duration-300"
          >
            {preventiveCare.button.text}
            <ArrowRight className="w-5 h-5 mt-[1px]" />
          </a>
        </div>
      </div>

      {/* Bottom Call to Action Text */}
    <div className="mt-32 px-4 md:px-20 text-center">
  <p className="text-[#879585] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight animate-fade-up transition-opacity duration-700 ease-in-out">
    Helping people<br />
    <span className="relative inline-block">
      easily take control
      <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#e2ebe5] rounded-full -z-10"></span>
    </span>
    <br />
    of their health.
  </p>
</div>

    </section>
  )
}

export default PreventiveCareSection
