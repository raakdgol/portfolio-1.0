import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/cursor.css";
import "../../styles/hero.css";

export default function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden group"
      style={{
        '--cursor-x': `${cursorPosition.x}px`,
        '--cursor-y': `${cursorPosition.y}px`,
      } as React.CSSProperties}
    >
      <div className="cursor-dot" />
      <div className="container mx-auto px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="drop-shadow-[0_1px_1px_white] font-mono text-emerald-400 mb-5 block"
        >
          Hi, my name is
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="drop-shadow-[0_1px_1px_black] text-5xl md:text-7xl font-bold text-gray-200 mb-4"
        >
          Rotimi AR.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="drop-shadow-[0_1px_1px_black] text-4xl md:text-6xl font-bold text-gray-400 mb-6"
        >
          Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="drop-shadow-[0_1px_1px_black] max-w-xl text-gray-400 mb-12 text-lg"
        >
          I'm a web developer specializing in building digital experiences.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#work"
          className="inline-block py-4 px-8 border-2 rounded-2xl border-emerald-400 text-emerald-400 
                     font-mono hover:bg-emerald-400/10 transition-colors "
        >
          - My work -
        </motion.a>
      </div>

      {/* SVG (Visible only on large screens) */}
      <div className="absolute m-15 top-0 right-0 hidden lg:block h-full pt-20 floating-shape">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full object-contain filter blur-[1px]" // Applying blur filter here
      >
      <path
      fill="#3D5C45"
      d="M31.4,-34.1C44.1,-18.7,60.2,-9.3,62.6,2.4C65.1,14.2,53.8,28.4,41.1,36.8C28.4,45.2,14.2,47.9,2.6,45.3C-9,42.7,-17.9,34.8,-32.2,26.4C-46.5,17.9,-66.2,9,-72.8,-6.6C-79.4,-22.1,-72.9,-44.3,-58.6,-59.7C-44.3,-75.2,-22.1,-84,-6.4,-77.6C9.3,-71.2,18.7,-49.6,31.4,-34.1Z"
      transform="translate(100 100)"
      />
      </svg>

      </div>
    </section>
  );
}
