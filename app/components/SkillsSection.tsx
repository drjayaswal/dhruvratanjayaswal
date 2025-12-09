import { useState, useEffect } from 'react';

const skillDomains = [
  {
    title: "Frontend Development",
    subtitle: "Building Beautiful Interfaces",
    description: "Crafting responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
    visual: "monitor",
    skills: [
      { name: "React", level: 40 },
      { name: "Next", level: 65 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 40 },
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Backend Development",
    subtitle: "Powering Server-Side Logic",
    description: "Designing scalable APIs and server architectures that handle complex business logic efficiently.",
    visual: "cpu",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "JWT", level: 90 },
      { name: "Python", level: 85 },
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Deploying at Scale",
    description: "Implementing CI/CD pipelines and cloud infrastructure for reliable, scalable deployments.",
    visual: "cloud",
    skills: [
      { name: "AWS", level: 60 },
      { name: "Docker", level: 55 },
      { name: "Kubernetes", level: 45 },
      { name: "Git", level: 50 },
      { name: "GitHub", level: 50 },
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
  },
  {
    title: "Databases",
    subtitle: "Managing Data Efficiently",
    description: "Architecting database solutions for optimal performance, reliability, and data integrity.",
    visual: "database",
    skills: [
      { name: "MongoDB", level: 60 },
      { name: "MySQL", level: 50 },
      { name: "Redis", level: 50 },
      { name: "Mongoose", level: 65 },
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
  },
  {
    title: "Programming Languages",
    subtitle: "Core Development Skills",
    description: "Strong foundation in multiple programming paradigms and language ecosystems.",
    visual: "code",
    skills: [
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 50 },
    ],
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-200",
  },
];

const VisualIcon = ({ type, gradient }: { type: string; gradient: string }) => {
  const gradientId = `gradient-${type}`;
  
  if (type === "monitor") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
        <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-lg opacity-20 blur-xl animate-pulse`}></div>
        <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
              <stop offset="100%" className="text-cyan-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <rect x="4" y="8" width="56" height="38" rx="3" fill={`url(#${gradientId})`} opacity="0.9"/>
          <rect x="8" y="12" width="48" height="30" rx="1" fill="white" opacity="0.2"/>
          <rect x="26" y="46" width="12" height="6" rx="1" fill={`url(#${gradientId})`}/>
          <rect x="18" y="52" width="28" height="4" rx="2" fill={`url(#${gradientId})`}/>
          <line x1="14" y1="18" x2="50" y2="18" stroke="white" strokeWidth="2" opacity="0.4"/>
          <line x1="14" y1="24" x2="44" y2="24" stroke="white" strokeWidth="2" opacity="0.4"/>
          <line x1="14" y1="30" x2="48" y2="30" stroke="white" strokeWidth="2" opacity="0.4"/>
        </svg>
      </div>
    );
  }
  
  if (type === "cpu") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
        <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-lg opacity-20 blur-xl animate-pulse`}></div>
        <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-purple-500" stopColor="currentColor" />
              <stop offset="100%" className="text-pink-500" stopColor="currentColor" />
            </linearGradient>
          </defs>

          <rect x="16" y="16" width="32" height="32" rx="2" fill={`url(#${gradientId})`} opacity="0.9"/>
          <rect x="22" y="22" width="20" height="20" rx="1" fill="white" opacity="0.3"/>
          <rect x="20" y="10" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="26" y="10" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="32" y="10" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="38" y="10" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="44" y="10" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="20" y="50" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="26" y="50" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="32" y="50" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="38" y="50" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="44" y="50" width="2" height="4" fill={`url(#${gradientId})`}/>
          <rect x="10" y="20" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="10" y="26" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="10" y="32" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="10" y="38" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="10" y="44" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="50" y="20" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="50" y="26" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="50" y="32" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="50" y="38" width="4" height="2" fill={`url(#${gradientId})`}/>
          <rect x="50" y="44" width="4" height="2" fill={`url(#${gradientId})`}/>
        </svg>
      </div>
    );
  }
  
  if (type === "cloud") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
        <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-full opacity-20 blur-xl animate-pulse`}></div>
        <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-orange-500" stopColor="currentColor" />
              <stop offset="100%" className="text-red-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path d="M52 32c0-2.2-1.8-4-4-4 0-6.6-5.4-12-12-12-5.1 0-9.5 3.2-11.3 7.7C23.5 23.3 22.3 23 21 23c-4.4 0-8 3.6-8 8 0 0.3 0 0.6 0.1 0.9C10.6 32.6 9 34.6 9 37c0 3.3 2.7 6 6 6h34c3.9 0 7-3.1 7-7 0-3.5-2.6-6.4-6-6.9V32z" 
                fill={`url(#${gradientId})`} opacity="0.9"/>
          <ellipse cx="28" cy="30" rx="8" ry="4" fill="white" opacity="0.3"/>
        </svg>
      </div>
    );
  }
  
  if (type === "database") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
        <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-full opacity-20 blur-xl animate-pulse`}></div>
        <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-green-500" stopColor="currentColor" />
              <stop offset="100%" className="text-emerald-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <ellipse cx="32" cy="16" rx="18" ry="6" fill={`url(#${gradientId})`} opacity="0.9"/>
          <rect x="14" y="16" width="36" height="32" fill={`url(#${gradientId})`} opacity="0.8"/>
          <ellipse cx="32" cy="32" rx="18" ry="6" fill={`url(#${gradientId})`} opacity="0.9"/>
          <ellipse cx="32" cy="48" rx="18" ry="6" fill={`url(#${gradientId})`} opacity="0.9"/>
          <ellipse cx="32" cy="16" rx="14" ry="4" fill="white" opacity="0.2"/>
          <ellipse cx="32" cy="32" rx="14" ry="4" fill="white" opacity="0.2"/>
          <ellipse cx="32" cy="48" rx="14" ry="4" fill="white" opacity="0.2"/>
        </svg>
      </div>
    );
  }
  
  return (
    <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-lg opacity-20 blur-xl animate-pulse`}></div>
      <svg className="w-16 h-16 relative z-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-indigo-500" stopColor="currentColor" />
            <stop offset="100%" className="text-blue-500" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <path d="M22 16L12 32L22 48" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        <path d="M42 16L52 32L42 48" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
        <line x1="36" y1="16" x2="28" y2="48" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
      </svg>
    </div>
  );
};

export default function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 via-gray to-gray-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #001f3f 0px, #001f3f 2px, transparent 2px, transparent 10px)`,
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Technical <span className="bg-linear-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Full-stack capabilities across modern development ecosystems with a focus on creating scalable, 
            performant, and maintainable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillDomains.map((domain, index) => (
            <div
              key={domain.title}
              className={`bg-white rounded-2xl p-8 border-0 ${domain.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${domain.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  <VisualIcon type={domain.visual} gradient={domain.gradient} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 group-hover:text-gray-800 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 text-center mb-3 group-hover:text-gray-700 transition-colors">
                  {domain.subtitle}
                </p>
                <p className="text-xs text-gray-500 text-center mb-6 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {domain.description}
                </p>
                <div className="space-y-4">
                  {domain.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-800">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold bg-linear-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden shadow-inner">
                        <div
                          className={`bg-linear-to-r ${domain.gradient} h-full rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                          style={{ 
                            width: isMobile || hoveredCard === index ? `${skill.level}%` : '0%'
                          }}
                        >
                          <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${domain.gradient} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}