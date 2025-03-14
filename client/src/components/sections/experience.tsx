import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-12 flex items-center"
        >
          <span className="text-emerald-400 font-mono mr-2">02.</span>
          Where I've Worked
          <span className="h-px bg-border flex-grow ml-4"></span>
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {experiences?.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-xl text-foreground mb-1">
                <span className="text-emerald-400">{experience.title}</span> @ {experience.company}
              </h3>
              <p className="font-mono text-sm text-foreground/70 mb-4">{experience.range}</p>
              <ul className="space-y-4">
                {experience.duties.map((duty, i) => (
                  <li key={i} className="flex text-foreground/70">
                    <span className="text-emerald-400 mr-2">▹</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}