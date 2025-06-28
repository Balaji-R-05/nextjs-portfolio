import { navItems } from "@/data"
import Divider from "@/components/Divider";

import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import SkillsSection from "@/components/Skills";
import RecentProjects from "@/components/RecentProjects";
import Certificates from '@/components/Certificates'
import Achievements from "@/components/Achievements";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Divider />
        <SkillsSection />
        <Divider />
        <RecentProjects />
        <Divider />
        <Achievements /> 
        <Divider />
        <Certificates />
        <Divider />
        <Experiences />
        <Footer />
      </div>
    </main>
  );
}
