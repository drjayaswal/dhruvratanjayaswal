"use client";

import ProjectCard from "./Projects";

const projects = [
  {
    name: "Mud AI",
    imageName: "mud-ai-card.png",
    liveLink: "https://mud-ai-frontend.vercel.app",
    githubLink: "https://github.com/drjayaswal/mud-ai-frontend"
  },
  {
    name: "Cricstock11",
    imageName: "cricstock11-card.png",
    liveLink: "Project temporarily unavailable due to goverment's regulatories",
    githubLink: "https://github.com/cybergaz/cricket-frontend-nextjs"
  },
  {
    name: "Xegality",
    imageName: "xegality-card.png",
    liveLink: "https://xegality.vercel.app/student",
    githubLink: "https://github.com/drjayaswal/xegality-backend"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-gray-50 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #001f3f 0px, #001f3f 2px, transparent 2px, transparent 10px)`,
      }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Remarkable Works
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <div key={project.name} className="relative group transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute top-3 left-5 z-20 bg-white/80 text-black backdrop-blur-md px-3 py-2 rounded-2xl font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {project.name}
              </div>
              <ProjectCard
                project={project.name}
                imageName={project.imageName}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/drjayaswal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.90909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            Other Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
