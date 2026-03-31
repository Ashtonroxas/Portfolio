import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, HeartHandshake, Code2, Target, Headphones, Gamepad2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { containerVariants, itemVariants } from "@/lib/animation";
import InfoCard from "../shared/InfoCard.jsx";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white/60 backdrop-blur-2xl border-y border-border/50 shadow-sm relative z-10">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-muted group">
            <img 
              src="/Profile_pics/about-profile.PNG" 
              alt="Ashton's Profile" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary border-b-4 border-secondary inline-block pb-2">
                About Me
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-xl font-semibold text-foreground">
              Hello! I'm Ashton, a Computer Science senior at UMass Lowell specializing in full-stack development and cloud-native architecture.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I have a strong passion for engineering scalable solutions and optimizing system performance. Whether I'm building serverless 
              platforms in AWS, developing real-time web applications, or creating high-performance tools in C++, I love tackling complex technical 
              challenges from the ground up.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Beyond coding, I believe in the power of community. Leading the UML Filipino Club has taught me that 
              building great software requires the same core skills as building great teams: clear 
              communication, empathy, and a shared vision. When I'm unplugged from my IDE, you can 
              usually find me swinging at the Driving Range, listening to my fire playlists, or at the gym trying to increase my bench press.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-2 flex gap-3 flex-wrap">
              <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors">
                <Target className="w-4 h-4 mr-2"/> Driving Range
              </Badge>
              <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors">
                <Headphones className="w-4 h-4 mr-2"/> Music
              </Badge>
              <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors">
                <Gamepad2 className="w-4 h-4 mr-2"/> Gaming
              </Badge>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard icon={<Code2 className="text-secondary w-6 h-6"/>} title="Focus" subtitle="Cloud & Full-Stack" />
            <InfoCard icon={<MapPin className="text-secondary w-6 h-6"/>} title="Location" subtitle="Manchester, NH" />
            <InfoCard icon={<GraduationCap className="text-secondary w-6 h-6"/>} title="Education" subtitle="UMass Lowell CS '26" />
            <InfoCard icon={<HeartHandshake className="text-secondary w-6 h-6"/>} title="Community" subtitle="UML Filipino Club" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}