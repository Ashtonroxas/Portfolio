import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { itemVariants } from "@/lib/animation";

export default function TiltProjectCard({ title, tech, details, image, githubLink }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set( (e.clientX - rect.left) / rect.width - 0.5);
    y.set( (e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div 
      variants={itemVariants} 
      className="perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-xl">
        <Card style={{ transform: "translateZ(50px)" }} className="h-full flex flex-col bg-white/80 backdrop-blur-md border-border/60 shadow-lg hover:border-secondary transition-colors duration-500 group overflow-hidden">
          
          {image && (
            <div className="w-full h-48 overflow-hidden bg-muted/30">
              <img 
                src={image} 
                alt={`${title} preview`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          )}

          <CardHeader className="flex-grow space-y-4 pt-5">
            <CardTitle className="text-2xl font-extrabold text-foreground flex items-center justify-between">
              {title}
              <GithubIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t} variant="secondary" className="bg-background text-muted-foreground font-bold border border-border/80 text-[10px]">{t}</Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground list-disc list-inside marker:text-primary/50 mt-2">
              {details.map((detail, idx) => ( <li key={idx} className="leading-relaxed">{detail}</li> ))}
            </ul>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

// Local Github icon just for the project cards
function GithubIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}