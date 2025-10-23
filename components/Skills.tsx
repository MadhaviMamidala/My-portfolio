'use client';

import { skills } from '@/app/data';
import SectionDivider from './SectionDivider';

const Skills = () => {
  return (
    <>
      <SectionDivider variant="zigzag" color="#ffffff" flip />
      <section id="skills" className="py-20 px-8 bg-gradient-to-br from-cappuccino-50 to-cream-100 dark:from-gray-900/50 dark:to-espresso-700/10 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-10 left-20 w-72 h-72 bg-espresso-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-cappuccino-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-espresso-600 dark:text-cappuccino-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-espresso-500"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm rounded-lg bg-cappuccino-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-cappuccino-200 dark:border-gray-600 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-colors"
                  >
                    {skill}
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

export default Skills;
