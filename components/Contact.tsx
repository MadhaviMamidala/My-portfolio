'use client';

import { personalInfo } from '@/app/data';
import SectionDivider from './SectionDivider';

const Contact = () => {
  return (
    <>
      <SectionDivider variant="curve" color="#ffffff" />
      <section id="contact" className="py-20 px-8 bg-gradient-to-br from-cappuccino-100 via-cappuccino-50 to-cream-100 dark:from-gray-900/50 dark:via-espresso-700/20 dark:to-background-dark relative overflow-hidden">
        {/* Fun background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-10 w-80 h-80 bg-espresso-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cappuccino-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Get In Touch
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just chatting about AI/ML and cloud security!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-8 py-4 rounded-full bg-espresso-500 text-white font-medium hover:bg-espresso-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-espresso-500 text-espresso-600 dark:text-cappuccino-300 font-medium hover:bg-cappuccino-100 dark:hover:bg-espresso-700/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <div className="text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-espresso-600 dark:hover:text-cappuccino-400 transition-colors">
              {personalInfo.email}
            </a>
          </p>
          <p>{personalInfo.phone}</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
