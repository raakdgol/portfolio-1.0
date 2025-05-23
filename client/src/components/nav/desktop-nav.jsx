
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" }
];

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState("");
  

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex fixed top-0 right-0 py-8 px-12 gap-8 z-50 items-center">
      {navItems.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollTo(item.href.substring(1));
            }}
            className={activeSection === item.href.substring(1) ? 'text-emerald-400' : 'text-gray-400'}
          >
            {item.name}
          </button>
        </motion.div>
      ))}
      <ThemeToggle />
    </nav>
  );
}
