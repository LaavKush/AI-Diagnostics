'use client'

import { footer } from '@/data/data'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Company Name */}
        <div className="text-xl font-bold tracking-wide text-gray-100">
          {footer.companyName}
        </div>

        {/* Copyright */}
        <div className="text-sm md:text-base text-gray-400 text-center md:text-left">
          {footer.copyright}
        </div>

        {/* Email Contact */}
        <div className="text-sm md:text-base text-gray-400 hover:text-white transition-colors duration-300">
          <a href={`mailto:${footer.email}`} className="underline underline-offset-4 hover:no-underline">
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
