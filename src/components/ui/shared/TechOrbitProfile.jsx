import React from "react";
import { motion } from "framer-motion";

export default function TechOrbitProfile() {
  const techLogos = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Go", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "C", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  ];

  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {techLogos.map((logo, i) => {
          const angle = i * (360 / techLogos.length);
          return (
            <div 
              key={logo.name} 
              className="absolute top-1/2 left-1/2 w-14 h-14 -ml-7 -mt-7" 
              style={{ transform: `rotate(${angle}deg) translateY(-130px)` }}
            >
              <div style={{ transform: `rotate(-${angle}deg)` }} className="w-full h-full bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-border/50 flex items-center justify-center">
                <motion.img 
                  src={logo.url} 
                  alt={logo.name}
                  className="w-full h-full object-contain drop-shadow-sm"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-2xl z-10">
        <img
          src="/Profile_pics/profile.jpg"
          alt="Profile Headshot"
          className="w-full h-full object-cover rounded-full border-4 border-background"
        />
      </div>
    </div>
  );
}