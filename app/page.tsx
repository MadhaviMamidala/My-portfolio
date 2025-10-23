'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Chatbot from '@/components/Chatbot';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(true);

  return (
    <main className="min-h-screen bg-white dark:bg-background-dark transition-colors">
      <Navigation />
      <ThemeToggle />

      {/* Split Layout */}
      <div className="flex min-h-screen">
        {/* Main Content - Left Side */}
        <div className={`flex-1 transition-all duration-300 ${showChatbot ? 'md:mr-[430px]' : 'mr-0'}`}>
          <div className="max-w-7xl mx-auto">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />

            {/* Footer */}
            <footer className="py-8 px-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
              <p>© 2025 Madhavi M. Built with Next.js & Tailwind CSS.</p>
            </footer>
          </div>
        </div>

        {/* Chatbot Sidebar - Right Side */}
        <div
          className={`fixed right-6 top-24 transition-all duration-300 z-20 ${
            showChatbot ? 'w-full md:w-[400px]' : 'w-0'
          } overflow-hidden rounded-2xl shadow-2xl`}
          style={{ height: showChatbot ? 'calc(100vh - 120px)' : '0', maxHeight: '700px' }}
        >
          <Chatbot />
        </div>

        {/* Toggle Button for Mobile */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className={`fixed bottom-6 right-6 z-50 md:hidden shadow-2xl transition-all hover:scale-105 ${
            showChatbot
              ? 'p-4 rounded-full bg-espresso-500 text-white'
              : 'px-5 py-4 rounded-2xl bg-gradient-to-r from-espresso-500 to-espresso-600 text-white flex items-center gap-2'
          }`}
          aria-label="Toggle chatbot"
        >
          {showChatbot ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="text-sm font-bold">Chat</span>
            </>
          )}
        </button>

        {/* Chatbot Toggle for Desktop */}
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className={`hidden md:flex items-center gap-2 fixed bottom-8 z-50 transition-all shadow-2xl hover:shadow-xl hover:scale-105 ${
            showChatbot
              ? 'right-[426px] px-4 py-3 rounded-full bg-espresso-500 text-white hover:bg-espresso-600'
              : 'right-8 px-6 py-4 rounded-2xl bg-gradient-to-r from-espresso-500 to-espresso-600 text-white hover:from-espresso-600 hover:to-espresso-700'
          }`}
          aria-label="Toggle chatbot"
        >
          {showChatbot ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm font-medium">Close</span>
            </>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold">AI Assistant</span>
                <span className="text-xs opacity-90">Ask me anything!</span>
              </div>
            </>
          )}
        </button>
      </div>
    </main>
  );
}
