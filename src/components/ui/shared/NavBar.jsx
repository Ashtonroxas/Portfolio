import React from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      className="fixed top-4 w-full px-6 z-50 flex justify-center md:justify-end pointer-events-none"
    >
      <div className="bg-white/70 backdrop-blur-xl border border-border/50 px-6 py-3 rounded-full shadow-lg flex gap-4 md:gap-8 font-extrabold text-xs md:text-sm text-muted-foreground pointer-events-auto">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
      </div>
    </motion.nav>
  );
}