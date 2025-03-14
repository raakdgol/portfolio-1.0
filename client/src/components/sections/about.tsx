import { motion } from "framer-motion";

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function About() {
  const skills = [
    "JavaScript (ES6+)", 
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInScale}
          className="text-2xl font-bold text-foreground mb-12 flex items-center"
        >
          <span className="text-emerald-600 dark:text-emerald-400 font-mono mr-2">01.</span>
          About Me
          <span className="h-px bg-border flex-grow ml-4"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            className="text-foreground/90 dark:text-foreground/70 space-y-4"
          >
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at various companies.
              My main focus these days is building accessible, inclusive products and digital
              experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>

            <motion.ul 
              className="grid grid-cols-2 gap-2 mt-4"
              variants={staggerList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  variants={listItem}
                  className="flex items-center font-mono text-sm text-emerald-700 dark:text-emerald-400/90"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            className="relative"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-emerald-400/20 rounded translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-emerald-400 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}