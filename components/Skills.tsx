"use client";
import { skills } from "@/data";
import { ColourfulText } from "./ui/ColourfulText";

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-black-100 text-white hidden sm:block">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text  text-purple"> 
            {/* text-transparent */}
            Technologies & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto ">
            Building modern solutions with cutting-edge technologies
          </p>
          {/* <ColourfulText text="Building modern solutions with cutting-edge technologies" />  */}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden skill-item"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all duration-300 hover:bg-gray-800 hover:scale-105 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img 
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      filter: 'invert(1) brightness(1.2)',
                    }}
                    // onLoad={(e) => {
                    //   // Color the icon based on brand color on hover
                    //   (e.target as HTMLImageElement).style.filter = 'brightness(0.9)';
                    // }}
                    // onError={(e) => {
                    //   // Create a fallback icon using CSS
                    //   (e.target as HTMLImageElement).style.display = 'none';
                    //   const fallback = document.createElement('div');
                    //   fallback.className = 'w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white';
                    //   fallback.style.backgroundColor = skill.color;
                    //   fallback.textContent = skill.name.charAt(0);
                    //   ((e.target as HTMLImageElement).parentNode as HTMLElement)?.appendChild(fallback);
                    // }}
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {skill.name}
                </span>
              </div>
              
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                style={{
                  background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
            {/* <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div> */}
            <span className="text-gray-400 text-xl">Always learning new technologies 😋</span>
            {/* <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div> */}
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
        
        .skill-item {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Icon hover effects */
        .group:hover img {
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.5)) !important;
        }

        /* Custom coloring for specific icons on hover */
        .group:hover img[alt*="Python"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #3776AB) !important;
        }
        .group:hover img[alt*="React"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #61DAFB) !important;
        }
        .group:hover img[alt*="JavaScript"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #F7DF1E) !important;
        }
        .group:hover img[alt*="TypeScript"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #3178C6) !important;
        }
        .group:hover img[alt*="Docker"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #2496ED) !important;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;