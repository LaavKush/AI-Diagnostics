'use client';

import { supportTexts } from '@/data/data';

const KeyBenefits = () => {
  return (
    <section
      className="py-20 text-gray-700 px-6 md:px-8 lg:px-24 max-w-full"
      style={{ background: "linear-gradient(to right, #fff7ed, #fdfaf7)" }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {supportTexts.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-6">
              <Icon className="w-10 h-10 mt-1 shrink-0" style={{ color: '#2F0089' }} />
              <div>
                <p className="text-3xl font-semibold leading-loose" style={{ color: 'black' }}>
                  {item.heading}
                </p>
                {item.subheading && (
                  <p className="text-base text-gray-600">{item.subheading}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyBenefits;
