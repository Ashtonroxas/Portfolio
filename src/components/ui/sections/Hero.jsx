import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "@/lib/animation";
import TechOrbitProfile from "../shared/TechOrbitProfile.jsx";

export default function Hero() {
  const name = "Ashton Rich Roxas".split("");

  const nameRevealVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center z-10">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="max-w-4xl space-y-8 relative"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6 mt-8">
          <TechOrbitProfile />
        </motion.div>

        <div className="flex justify-center flex-wrap overflow-hidden py-2 px-4">
          {name.map((letter, index) => (
            <motion.span 
              key={index} 
              variants={nameRevealVariants}
              className="text-6xl md:text-8xl font-extrabold tracking-tight text-primary drop-shadow-sm inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="text-xl md:text-2xl text-white font-semibold h-8 flex justify-center items-center gap-2 drop-shadow-md">
            <span>Aspiring Software Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span> Full-Stack Developer</span>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-8">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-10 py-7 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
            <a href="#about">View Portfolio <ChevronDown className="ml-2 w-5 h-5 animate-bounce" /></a>
          </Button>

          <Button asChild variant="outline" className="border-border/60 bg-white/40 backdrop-blur-md hover:bg-secondary hover:text-secondary-foreground text-foreground rounded-full px-8 py-7 shadow-sm transition-all hover:-translate-y-1">
            <a href="/AshtonRich_Roxas_Resume.pdf" download="Ashton_Roxas_Resume.pdf">
              <Download className="mr-2 w-5 h-5" /> Resume
            </a>
          </Button>

          <Button asChild variant="outline" className="border-border/60 bg-white/40 backdrop-blur-md hover:bg-secondary hover:text-secondary-foreground text-foreground rounded-full px-8 py-7 shadow-sm transition-all hover:-translate-y-1">
            <a href="https://linkedin.com/in/ashton-roxas" target="_blank" rel="noreferrer">
              <LinkedinIcon className="mr-2 w-5 h-5" /> LinkedIn
            </a>
          </Button>
          
          <Button asChild variant="outline" className="border-border/60 bg-white/40 backdrop-blur-md hover:bg-secondary hover:text-secondary-foreground text-foreground rounded-full px-8 py-7 shadow-sm transition-all hover:-translate-y-1">
            <a href="https://github.com/Ashtonroxas" target="_blank" rel="noreferrer">
              <GithubIcon className="mr-2 w-5 h-5" /> GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GithubIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}