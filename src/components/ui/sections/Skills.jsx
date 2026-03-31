import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { containerVariants, itemVariants } from "@/lib/animation";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto space-y-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-primary border-b-4 border-secondary inline-block pb-2 bg-white/40 px-2 rounded-xl backdrop-blur-sm">
          Tech Stack & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCategory title="Languages" skills={["Python", "C++", "JavaScript","TypeScript", "Java", "SQL", "Kotlin", "C"]} />
          <SkillCategory title="Cloud & DevOps" skills={["AWS (Lambda, S3, CDK)", "Firebase", "Azure AI", "Docker", "Git", "CI/CD", "GraphQL", "Linux", "Vercel"]} />
          <SkillCategory title="Frameworks" skills={["React.js", "Next.js", "Spring Boot", "Flask", "Tailwind CSS"]} />
        </div>
      </motion.div>
    </section>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-extrabold text-foreground tracking-tight">{title}</h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <Badge key={skill} className="bg-primary/5 hover:bg-secondary hover:text-secondary-foreground text-primary border-primary/10 transition-all px-4 py-2 text-xs font-bold rounded-lg cursor-default">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}