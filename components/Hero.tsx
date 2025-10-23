'use client';

import { personalInfo } from '@/app/data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-20 pt-24 bg-gradient-to-br from-cappuccino-50 via-white to-cream-100 dark:from-background-dark dark:via-background-darkAlt dark:to-espresso-700/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cappuccino-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-espresso-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl text-espresso-500 dark:text-cappuccino-300 font-medium mb-8">
              {personalInfo.title}
            </h2>
            <div className="h-0.5 w-full bg-gradient-to-r from-espresso-500 via-cappuccino-300 to-espresso-500 animate-pulse-slow"></div>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed animate-slide-up max-w-3xl mx-auto mt-12">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-espresso-500 text-white font-medium hover:bg-espresso-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-espresso-500 text-espresso-600 dark:text-cappuccino-300 font-medium hover:bg-cappuccino-100 dark:hover:bg-espresso-700/20 transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Decorative element */}
        <div className="mt-20 flex justify-center gap-3 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-cappuccino-400 animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-cappuccino-300 animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-espresso-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
