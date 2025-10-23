'use client';

import { personalInfo } from '@/app/data';
import SectionDivider from './SectionDivider';

const About = () => {
  return (
    <>
      <SectionDivider variant="wave" color="#faf8f5" />
      <section id="about" className="py-20 px-8 bg-white dark:bg-background-darkAlt relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="animate-slide-up">
              {personalInfo.summary}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-cappuccino-50 dark:bg-gray-800/50 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all animate-slide-up">
                <div className="text-3xl mb-3">6+</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Years of Experience</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">In AI/ML & Cloud Security</div>
              </div>

              <div className="p-6 rounded-2xl bg-cappuccino-50 dark:bg-gray-800/50 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="text-3xl mb-3">3</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Major Projects</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">GenAI & MLOps Solutions</div>
              </div>

              <div className="p-6 rounded-2xl bg-cappuccino-50 dark:bg-gray-800/50 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl mb-3">5+</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Certifications</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">AWS, Kubernetes & Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
