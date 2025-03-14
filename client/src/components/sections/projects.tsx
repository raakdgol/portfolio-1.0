import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"]
  });

  if (isLoading) {
    return <div className="h-96 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-12 flex items-center"
        >
          <span className="text-emerald-400 font-mono mr-2">03.</span>
          Some Things I've Built
          <span className="h-px bg-border flex-grow ml-4"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-card rounded-lg p-6 hover:bg-accent 
                         transition-all duration-300 shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex justify-between items-start mb-4">
                <motion.h3 
                  className="text-xl font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 dark:text-foreground/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  )}
                  {project.externalUrl && (
                    <motion.a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 dark:text-foreground/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-foreground/80 dark:text-foreground/60 mb-4 group-hover:text-emerald-700 dark:group-hover:text-foreground transition-colors">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="text-emerald-600 dark:text-emerald-400 font-mono text-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}