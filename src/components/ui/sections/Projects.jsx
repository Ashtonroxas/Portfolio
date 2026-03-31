import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation";
import TiltProjectCard from "../shared/TiltProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/60 backdrop-blur-xl border-y border-border/50 relative z-10">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto space-y-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-primary border-b-4 border-secondary inline-block pb-2">
          Personal & Academic Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <TiltProjectCard 
            title="AudioByte" 
            tech={["Python", "AWS", "CDK", "GraphQL"]}
            details={["Provisioned a cloud-native music platform utilizing AWS CDK.", "Constructed a serverless GraphQL API backed by Python Lambda resolvers."]}
            image="/project_pics/audiobyte.png"
            githubLink="https://github.com/Ashtonroxas/AudioByte"
          />
		  
		  <TiltProjectCard 
            title="Nexus" 
            tech={["GUI", "Visual Tool"]}
            details={["Architecting a central hub visual project management tool.", "Implementing responsive UI state management for complex workflows."]}
            image="/project_pics/nexus.png"
            githubLink="https://github.com/Ashtonroxas/Nexus"
          />

          <TiltProjectCard 
            title="GroupTab" 
            tech={["React", "Python(Flask)", "Firebase"]}
            details={["Developed a real-time synchronization engine using Firestore listeners.", "Architected a serverless backend with Row-Level Security."]}
            image="/project_pics/grouptab.png"
            githubLink="https://github.com/Ashtonroxas/GroupTab"
          />
          <TiltProjectCard 
            title="HawkAdvisor" 
            tech={["Kotlin", "Spring Boot", "Azure AI"]}
            details={["Engineered a career discovery platform for UML students leveraging LLM logic.", "Automated ingestion and parsing of University course catalogs."]}
            image="/project_pics/hawkadvisor.png"
            githubLink="https://github.com/Ashtonroxas/HawkAdvisor"
          />
          <TiltProjectCard 
            title="Sokoban Game" 
            tech={["C++", "SFML", "OOP"]}
            details={["Programmed a high-performance 2D puzzle engine.", "Optimized frame rates via tile-based rendering."]}
            image="/project_pics/sokoban.png"
            githubLink="https://github.com/Ashtonroxas/Sokoban"
			
          />

		  <TiltProjectCard 
            title="Job Application Tracker" 
            tech={["C++", "CLI"]}
            details={["Built a robust command-line tool in C++ to efficiently manage, store, and query job application data locally."]}
            image="/project_pics/applicationtracker.png"
            //githubLink="https://github.com/Ashtonroxas/job-log"
          />

        </div>
      </motion.div>
    </section>
  );
}