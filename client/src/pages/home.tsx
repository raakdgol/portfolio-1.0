import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import DesktopNav from "@/components/nav/desktop-nav";
import MobileNav from "@/components/nav/mobile-nav";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
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