import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Assets
import ashtonLogo from "./assets/ar.png";

// Shared Components
import AnimatedBackground from "./components/ui/shared/AnimatedBackground.jsx";
import NavBar from "./components/ui/shared/NavBar.jsx";

// Page Sections
import Hero from "./components/ui/sections/Hero.jsx";
import About from "./components/ui/sections/About.jsx";
import Skills from "./components/ui/sections/Skills.jsx";
import Projects from "./components/ui/sections/Projects.jsx";
import Experience from "./components/ui/sections/Experience.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/40 relative">
      
      {/* Background Video/Effect */}
      <AnimatedBackground />

      {/* Global Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* Navigation */}
      <NavBar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>

      {/* Footer */}
      <footer className="py-16 flex flex-col items-center justify-center text-center text-muted-foreground border-t border-border/50 bg-white/80 backdrop-blur-md relative z-10">
        
        {/* Ashton's Custom Logo */}
        <motion.img 
          src={ashtonLogo} 
          alt="Ashton Roxas Logo" 
          className="w-16 h-16 mb-6 drop-shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />

        <p className="font-bold text-primary tracking-tight">
          © {new Date().getFullYear()} Ashton Rich Roxas
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest mt-2 opacity-50">
          Built with React & Framer Motion
        </p>
      </footer>
    </div>
  );
}