import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

const fadeInRight = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Experience() {
  const { data: experiences, isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"]
  });

  if (isLoading) {
    return <div className="h-96 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
          className="text-2xl font-bold text-foreground mb-12 flex items-center"
        >
          <span className="text-emerald-600 dark:text-emerald-400 font-mono mr-2">02.</span>
          Where I've Worked
          <span className="h-px bg-border flex-grow ml-4"></span>
        </motion.h2>

        <motion.div 
          className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences?.map((experience) => (
            <motion.div
              key={experience.id}
              variants={fadeInRight}
              className="mb-12"
            >
              <h3 className="text-xl text-foreground mb-1">
                <span className="text-emerald-600 dark:text-emerald-400">{experience.title}</span> @ {experience.company}
              </h3>
              <p className="font-mono text-sm text-emerald-700/80 dark:text-foreground/70 mb-4">{experience.range}</p>
              <motion.ul 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
              >
                {experience.duties.map((duty, i) => (
                  <motion.li 
                    key={i} 
                    variants={fadeInRight}
                    className="flex text-foreground/80 dark:text-foreground/70"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                    {duty}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}