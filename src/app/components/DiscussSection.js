'use client';

import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { discussSection } from '@/data/data';

const DiscussSection = () => {
  return (
    <section className="bg-[#fdfaf7] py-24 px-6 md:px-24 flex justify-center items-center">
      <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* LEFT: Phone Bubble UI */}
        <div className="relative bg-gradient-to-br from-[#dcffe7] to-[#fef6f4] p-10 rounded-[50px] shadow-2xl flex justify-center items-center">
          <div className="w-[280px] sm:w-[340px] md:w-[360px] h-[690px] bg-white rounded-[36px] border-[6px] border-black flex flex-col overflow-hidden relative">
            {/* Phone Top Bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 rounded-full bg-gray-300"></div>

            {/* Chat Bubbles */}
            <div className="w-full px-5 pt-16 pb-6 space-y-6 overflow-y-auto">
              {discussSection.chatBubbles.map((bubble, i) => {
                const isUser = bubble.sender === 'user';
                const isSystem = bubble.sender === 'system';

                return (
                  <div
                    key={i}
                    className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} items-end gap-3`}
                  >
                    {/* Shield for system messages */}
                    {isSystem && (
                      <div className="shrink-0">
                        <div className="bg-white rounded-full shadow p-1.5 border border-gray-300">
                          <ShieldCheck className="text-gray-700 w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {/* Chat Bubble */}
                    <motion.div
                      initial={{ opacity: 0, x: isUser ? 100 : -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.25, duration: 0.5, type: 'spring' }}
                      viewport={{ once: true }}
                      className={`px-5 py-3 max-w-[85%] rounded-2xl text-base md:text-lg shadow-md break-words ${
                        isUser
                          ? 'bg-emerald-100 text-emerald-900 self-end'
                          : 'bg-white text-gray-800 self-start'
                      }`}
                    >
                      {bubble.text}
                    </motion.div>

                    {/* Avatar for user */}
                    {isUser && bubble.avatar && (
                      <div className="shrink-0">
                        <Image
                          src="/old-woman.jpg"
                          alt="User"
                          width={36}
                          height={36}
                          className="rounded-full border border-gray-300"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Text content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0d1b2a] mb-10 leading-tight">
            {discussSection.heading}
          </h2>

          {discussSection.items.map((item, i) => (
            <div key={i} className="flex items-start gap-5 mb-8">
              <div className="bg-[#fff4e5] text-[#0d1b2a] font-bold rounded-xl shadow px-4 py-2 text-xl">
                {i + 1}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussSection;
