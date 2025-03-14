import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import DesktopNav from "@/components/nav/desktop-nav";
import MobileNav from "@/components/nav/mobile-nav";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <DesktopNav />
      <MobileNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
