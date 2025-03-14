import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-200 mb-4"
        >
          <span className="text-emerald-400 font-mono block mb-2">04. What's Next?</span>
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-12"
        >
          Although I'm not currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href="mailto:brittany@example.com"
          className="inline-block py-4 px-8 border-2 border-emerald-400 text-emerald-400 
                     font-mono hover:bg-emerald-400/10 transition-colors rounded"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}
