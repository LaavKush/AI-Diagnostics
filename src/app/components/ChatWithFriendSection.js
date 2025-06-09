'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { chatSection } from '@/data/data';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const bubbleVariant = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -24 : 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
  exit: { opacity: 0, x: direction === 'left' ? -24 : 24 },
});

export default function ChatWithFriendSection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, {
    once: false,
    margin: '-100px 0px -100px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const bubbles = [
    { id: 1, side: 'left', text: '', delay: 0.0, top: '180px' },
    { id: 2, side: 'right', text: '', delay: 0.3, top: '260px' },
    { id: 3, side: 'left', text: '', delay: 0.6, top: '350px' },
    { id: 4, side: 'right', text: '', delay: 0.9, top: '430px' },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-0 min-h-[120vh] w-full py-16"
      style={{
        background: 'linear-gradient(to right, #fff7ed, #fdfaf7)',
        paddingLeft: '4rem',
        paddingRight: '4rem',
      }}
    >
      {/* LEFT — text content */}
      <div className="w-full md:w-1/2 px-0 text-gray-900 ml-40">
        <h2
          className="font-bold leading-tight mb-12"
          style={{
            fontFamily: 'inherit',
            fontSize: '3.5rem',
            color: '#000',
          }}
        >
          {chatSection.title}
        </h2>

        <ul className="space-y-8">
          {chatSection.features.map((feat, idx) => (
            <li key={feat.heading} className="flex gap-5 items-start">
              <span
                className="rounded-md bg-[#f3eadb] shadow-md flex items-center justify-center font-semibold text-[#2F0089]"
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  fontSize: '1.75rem',
                  lineHeight: 1,
                }}
              >
                {idx + 1}
              </span>

              <div className="max-w-lg">
                <h3
                  className="font-semibold mb-2"
                  style={{
                    color: '#000',
                    fontFamily: 'inherit',
                    fontSize: '2.75rem',
                  }}
                >
                  {feat.heading}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    color: '#4a4a4a',
                    fontSize: '1.25rem',
                  }}
                >
                  {feat.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — phone mock-up & animated bubbles */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center px-0">
        <div className="relative mx-auto rounded-[48px] bg-gradient-to-tr from-[#e8e9f8] via-white to-[#fde8e4] p-16 md:p-20">
          <div className="relative mx-auto w-[320px] h-[640px] rounded-[36px] bg-white shadow-inner border-[10px] border-black overflow-hidden">
            <span className="absolute left-1/2 -translate-x-1/2 top-6 w-28 h-6 rounded-full bg-black/90" />
            <span className="absolute left-1/2 -translate-x-1/2 bottom-8 w-32 h-2 rounded-full bg-[#c1c1c1]" />

            <HealthAndSafetyIcon
              fontSize="large"
              style={{
                display: 'block',
                margin: '80px auto 48px',
                fontSize: '56px',
                color: '#444',
              }}
            />

            <AnimatePresence>
              {bubbles.map(({ id, side, delay, top }) => (
                <motion.div
                  key={id}
                  variants={bubbleVariant(side)}
                  initial="hidden"
                  animate={controls}
                  exit="exit"
                  transition={{ delay }}
                  className={`absolute ${side === 'left' ? 'left-6' : 'right-6'} ${
                    side === 'left' ? 'bg-gray-200' : 'bg-[#829fff]'
                  } rounded-3xl px-6 py-4 min-w-[160px] max-w-[180px]`}
                  style={{
                    top,
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)', // darker shadow
                  }}
                >
                  &nbsp;
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
