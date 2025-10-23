'use client';

import { experience } from '@/app/data';
import SectionDivider from './SectionDivider';

const Experience = () => {
  return (
    <>
      <SectionDivider variant="curve" color="#ffffff" flip />
      <section id="experience" className="py-20 px-8 bg-gradient-to-br from-cappuccino-100 to-cappuccino-50 dark:from-gray-900/50 dark:to-espresso-700/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-espresso-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-espresso-400 dark:border-cappuccino-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-espresso-500 ring-4 ring-white dark:ring-gray-900"></div>

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <span className="px-3 py-1 text-sm rounded-full bg-cappuccino-100 dark:bg-espresso-700/30 text-espresso-700 dark:text-cappuccino-300">
                  {exp.period}
                </span>
              </div>

              <div className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                <strong>{exp.company}</strong> · {exp.location}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-espresso-500 mt-1">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;
