import { FaLocationArrow, FaRegFilePdf} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className={cn(
          "absolute top-0 left-0 w-full",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            AI • Cloud • Full-Stack • Innovation
          </p>
          <TextGenerateEffect
            words="Learning to Build Smart, Human-Centered Tech"
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-purple"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m <span className="text-orange-500">Balaji R</span>, an aspiring <span className="text-orange-500">AI/ML Engineer</span> - from Chennai, India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center mt-6">
            <a href="#project">
              <MagicButton
                title="Explore my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <MagicButton
                title="Download My CV"
                icon={<FaRegFilePdf />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;