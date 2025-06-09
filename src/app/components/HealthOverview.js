'use client'

import { healthData, healthText } from '@/data/data'

export default function HealthOverview() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#fdfaf7] to-[#fdf4f1] flex items-center justify-center px-6 py-20">
      <div className="max-w-[1600px] w-full grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Cards */}
        <div className="bg-gradient-to-br from-[#eae9f9] to-[#fde8e3] p-16 rounded-[60px] shadow-2xl grid grid-cols-2 gap-12">
          {healthData.map(({ icon: Icon, color, title }, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center justify-center text-center gap-6"
            >
              <Icon className={`w-16 h-16 ${color}`} />
              <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            </div>
          ))}
        </div>

        {/* Right: Text */}
        <div className="space-y-16 px-8">
          <h2 className="text-[3rem] font-extrabold text-gray-900 leading-tight">
            {healthText.heading}
          </h2>
          {healthText.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-8">
              <div className="bg-[#fff8ed] text-black px-6 py-3 rounded-xl text-2xl font-extrabold shadow-md">
                {idx + 1}
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-gray-800">{item.title}</h4>
                <p className="text-2xl text-gray-600 mt-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
