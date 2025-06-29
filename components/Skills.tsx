"use client";
import Image from "next/image";
import { skills } from "@/data";

const SkillsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-black-100 text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Technologies & Skills
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Building modern solutions with cutting-edge technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden skill-item"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all duration-300 hover:bg-gray-800 active:scale-95 sm:hover:scale-105 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center relative">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={20}
                    height={20}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base font-medium">
                  {skill.name}
                </span>
              </div>

              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
            <span className="text-gray-400 text-base sm:text-xl">
              Always learning new technologies 😋
            </span>
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

        .group:hover img {
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 0.5)) !important;
        }

        .group:hover img[alt*="Python"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #3776ab) !important;
        }
        .group:hover img[alt*="React"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #61dafb) !important;
        }
        .group:hover img[alt*="JavaScript"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #f7df1e) !important;
        }
        .group:hover img[alt*="TypeScript"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #3178c6) !important;
        }
        .group:hover img[alt*="Docker"] {
          filter: brightness(1.2) drop-shadow(0 0 8px #2496ed) !important;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
