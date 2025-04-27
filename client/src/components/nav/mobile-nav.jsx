
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" }
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  return (
    <div className="md:hidden">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <ThemeToggle />
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? (
            <X className="h-6 w-6 text-emerald-400" />
          ) : (
            <Menu className="h-6 w-6 text-emerald-400" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-40"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      scrollTo(item.href.substring(1));
                    }}
                    className="text-lg font-mono text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="text-emerald-400 mr-2">01.</span>
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
