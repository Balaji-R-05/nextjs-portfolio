import { navItems } from "@/data"
import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import SkillsSection from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

// import { TimelineDemo } from "@/components/Timeline";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <hr className="my-6 border-t border-gray-400 opacity-30" />
        <SkillsSection />
        <hr className="my-6 border-t border-gray-400 opacity-30" />
        <RecentProjects />
        <hr className="my-6 border-t border-gray-400 opacity-30" />
        <Experiences />
        {/* <TimelineDemo /> */}
        <Footer />
      </div>
    </main>
  );
}
