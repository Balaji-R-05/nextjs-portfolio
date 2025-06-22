import { 
  Code, 
  Globe, 
  Zap, 
  Sparkles, 
  Palette, 
  Minimize2, 
  Briefcase,
  Smartphone,
  Type,
  FileText,
  Hash,
  MousePointer,
  Workflow,
  Layers,
  Box
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', icon: Code, category: 'programming' },
    { name: 'TensorFlow', icon: Zap, category: 'ai' },
    { name: 'Azure', icon: Globe, category: 'cloud' },
    { name: 'React', icon: Code, category: 'frontend' },
    { name: 'Next.js', icon: Globe, category: 'frontend' },
    { name: 'Node.js', icon: Code, category: 'backend' },
    { name: 'TypeScript', icon: FileText, category: 'programming' },
    { name: 'JavaScript', icon: Code, category: 'programming' },
    { name: 'Docker', icon: Box, category: 'devops' },
    { name: 'AWS', icon: Globe, category: 'cloud' },
    { name: 'MongoDB', icon: Hash, category: 'database' },
    { name: 'PostgreSQL', icon: Hash, category: 'database' },
    { name: 'GraphQL', icon: Hash, category: 'api' },
    { name: 'REST API', icon: Globe, category: 'api' },
    { name: 'Machine Learning', icon: Zap, category: 'ai' },
    { name: 'Data Science', icon: Sparkles, category: 'ai' },
    { name: 'UI/UX Design', icon: Palette, category: 'design' },
    { name: 'Figma', icon: Layers, category: 'design' },
    { name: 'Git', icon: Code, category: 'tools' },
    { name: 'Linux', icon: Code, category: 'os' }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Technologies & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building modern solutions with cutting-edge technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer">
                  <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {skill.name}
                  </span>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Additional decorative elements */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-400 text-sm">Always learning new technologies</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;