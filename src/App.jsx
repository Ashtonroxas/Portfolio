import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Framer Motion Variants 
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  },
};

export default function App() {
  return (
    // Dark mode 
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 -z-10" />
        
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="visible"
          className="max-w-3xl space-y-6"
        >
          <motion.h1 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-bold text-slate-50 tracking-tight"
          >
            Ashton Rich Roxas
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-xl md:text-2xl text-emerald-400 font-medium"
          >
            Computer Science Senior at University of Massachusetts Lowell
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-full px-8 py-6 transition-all hover:scale-105">
              <a href="#projects">View Projects <ChevronDown className="ml-2 w-5 h-5" /></a>
            </Button>
            <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-50 rounded-full px-6 py-6 transition-all">
              <a href="https://linkedin.com/in/ashton-roxas" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-50 rounded-full px-6 py-6 transition-all">
              <a href="https://github.com/Ashtonroxas" target="_blank" rel="noreferrer">
                <Github className="mr-2 w-5 h-5" /> GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-24 px-6 bg-slate-900/50">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-50 border-b border-slate-800 pb-4">
            Technical Arsenal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory title="Languages" skills={["Java", "Python", "C++", "TypeScript", "SQL", "Kotlin", "HTML/CSS", "C"]} />
            <SkillCategory title="Cloud & DevOps" skills={["Firebase", "AWS (Lambda, S3, DynamoDB, CDK)", "Azure", "Docker", "CI/CD", "Git"]} />
            <SkillCategory title="Frameworks & Libraries" skills={["React.js", "Next.js", "Vite", "Node.js", "Tailwind CSS", "SFML", "JUnit"]} />
          </div>
        </motion.div>
      </section>

      {/* --- FEATURED PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-6">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-50 border-b border-slate-800 pb-4">
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="AudioByte" 
              tech={["Python", "AWS", "React.js", "GraphQL"]}
              details={[
                "Provisioned a cloud-native music platform using AWS CDK.",
                "Constructed a serverless GraphQL API with Python Lambda resolvers."
              ]}
            />
            <ProjectCard 
              title="GroupTab" 
              tech={["React", "Vite", "Python (Flask)", "Firebase", "Vercel"]}
              details={[
                "Developed a real-time synchronization engine using Firestore listeners.",
                "Architected a serverless backend with Flask.",
                "Secured user data by enforcing Row-Level Security via Firestore Rules."
              ]}
            />
            <ProjectCard 
              title="HawkAdvisor" 
              tech={["Kotlin", "Spring Boot", "SQL", "Azure AI"]}
              details={[
                "Engineered a career discovery platform for UML students leveraging LLM logic.",
                "Automated the ingestion of University course catalogs."
              ]}
            />
            <ProjectCard 
              title="Sokoban Game" 
              tech={["C++", "SFML", "OOP"]}
              details={[
                "Programmed a 2D puzzle engine in C++ and SFML.",
                "Optimized performance via tile-based rendering and OOP principles."
              ]}
            />
          </div>
        </motion.div>
      </section>

      {/* --- LEADERSHIP SECTION --- */}
      <section className="py-24 px-6 bg-slate-900/50">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-50 border-b border-slate-800 pb-4">
            Leadership Experience
          </motion.h2>

          <motion.div variants={fadeInUp} className="border-l-2 border-emerald-500/30 pl-6 ml-4 relative">
            <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            <h3 className="text-2xl font-bold text-slate-50">President</h3>
            <p className="text-emerald-400 font-medium mb-4">UML The Filipino Club | April 2024 - April 2025</p>
            <ul className="space-y-2 text-slate-400 list-disc list-inside marker:text-emerald-500">
              <li>Directed a cross-functional team of 10 officers, managing a semester operating budget of $2,000+.</li>
              <li>Spearheaded recruitment and engagement initiatives, increasing active membership by 25%.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-900">
        <p>© {new Date().getFullYear()} Ashton Rich Roxas. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SkillCategory({ title, skills }) {
  return (
    <motion.div variants={fadeInUp} className="space-y-4">
      <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.div 
            key={skill} 
            whileHover={{ y: -3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge className="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-300 transition-colors px-3 py-1.5 text-sm rounded-full cursor-default">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, tech, details }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card className="h-full bg-slate-950 border-slate-800 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-50 flex items-center justify-between">
            {title}
            <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
          </CardTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="bg-slate-900 text-slate-400">
                {t}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-400 list-disc list-inside marker:text-slate-600">
            {details.map((detail, idx) => (
              <li key={idx} className="leading-relaxed">{detail}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}