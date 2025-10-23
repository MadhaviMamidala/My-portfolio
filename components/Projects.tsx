'use client';

import { projects } from '@/app/data';
import SectionDivider from './SectionDivider';

const Projects = () => {
  return (
    <>
      <SectionDivider variant="diagonal" color="#f5f1ea" />
      <section id="projects" className="py-20 px-8 bg-white dark:bg-background-dark relative">
        {/* Fun background shapes */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cappuccino-300 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-espresso-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-cappuccino-200 dark:border-gray-700 hover:border-espresso-400 dark:hover:border-cappuccino-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-espresso-600 dark:group-hover:text-cappuccino-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-espresso-600 dark:text-cappuccino-400 mb-2">
                  Impact:
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-md bg-cappuccino-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
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

export default Projects;
