import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
    <nav className="hidden md:flex fixed top-0 right-0 py-8 px-12 gap-8 z-50">
      {navItems.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <Link href={item.href}>
            <a className={`text-sm font-mono relative py-2 px-4 
              ${activeSection === item.href.substring(1) ? 'text-emerald-400' : 'text-gray-400'}
              hover:text-emerald-400 transition-colors`}
            >
              <span className="text-emerald-400 mr-1">0{i + 1}.</span>
              {item.name}
            </a>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
