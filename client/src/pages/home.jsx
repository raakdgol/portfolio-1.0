
import Hero from "@/components/sections/hero";
import DesktopNav from "@/components/nav/desktop-nav";
import MobileNav from "@/components/nav/mobile-nav";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <DesktopNav />
      <MobileNav />
      <main>
        <Hero />
      </main>
    </div>
  );
}
