'use client';

import { certifications, education } from '@/app/data';
import SectionDivider from './SectionDivider';

const Certifications = () => {
  return (
    <>
      <SectionDivider variant="wave" color="#faf8f5" flip />
      <section id="certifications" className="py-20 px-8 bg-white dark:bg-background-darkAlt relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cappuccino-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Certifications & Education
        </h2>

        {/* Education */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-cappuccino-100 to-cappuccino-50 dark:from-espresso-700/20 dark:to-gray-800 border border-cappuccino-300 dark:border-espresso-600">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{education.icon}</span>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {education.institution}
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Certifications;
