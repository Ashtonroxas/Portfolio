import React from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { ExternalLink, ChevronDown, MapPin, GraduationCap, HeartHandshake, Code2, Camera, Music, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.3 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

const nameRevealVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const name = "Ashton Rich Roxas".split("");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-secondary/40 relative">
      
      <AnimatedBackground />

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" 
        style={{ scaleX }} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center z-10">
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="max-w-4xl space-y-8 relative"
        >
          {/* Animated Philippine Sun with Profile Picture */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <PhilippineSunProfile />
          </motion.div>

          {/* Letter-by-Letter Reveal with Blur */}
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
              <span>Software Engineer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Full-Stack Developer</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-8">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-10 py-7 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
              <a href="#about">View Portfolio <ChevronDown className="ml-2 w-5 h-5 animate-bounce" /></a>
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

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-32 px-6 bg-white/60 backdrop-blur-2xl border-y border-border/50 shadow-sm relative z-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Side: Profile Picture Box */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-muted group">
              <img 
                src="/Profile_pics/about-profile.PNG" 
                alt="Ashton's Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Decorative inner border */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
              {/* Subtle gradient overlay at the bottom for a premium look */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Side: Text and Info Cards */}
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
                I have a strong passion for engineering scalable solutions and optimizing system performance. Whether I'm building serverless platforms in AWS, developing real-time web applications, or creating high-performance tools in C++, I love tackling complex technical challenges from the ground up.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Beyond the code, I believe in the power of community. Leading the UML Filipino Club has taught me that building great software requires the same core skills as building great teams: clear communication, empathy, and a shared vision. When I'm unplugged from my IDE, you can usually find me playing the guitar, exploring photography, or unwinding with a good video game.
              </motion.p>
              
              <motion.div variants={itemVariants} className="pt-2 flex gap-3 flex-wrap">
                <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors"><Code2 className="w-4 h-4 mr-2"/> Web Dev</Badge>
                <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors"><Camera className="w-4 h-4 mr-2"/> Photography</Badge>
                <Badge variant="outline" className="border-border/80 text-muted-foreground bg-white/50 backdrop-blur-sm px-4 py-2 hover:bg-white hover:text-foreground transition-colors"><Music className="w-4 h-4 mr-2"/> Guitar</Badge>
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

      {/* SKILLS SECTION */}
      <section className="py-32 px-6 relative z-10">
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

      {/* PROJECTS SECTION */}
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
              tech={["Python", "AWS", "CDK", "JavaScript", "GraphQL"]}
              details={["Provisioned a cloud-native music platform utilizing AWS CDK.", "Constructed a serverless GraphQL API backed by Python Lambda resolvers."]}
              image="/project_pics/audiobyte.png"
              githubLink="https://github.com/Ashtonroxas/AudioByte"
            />
            <TiltProjectCard 
              title="GroupTab" 
              tech={["React", "Python(Flask)", "Firebase", "JavaScript"]}
              details={["Developed a real-time synchronization engine using Firestore listeners.", "Architected a serverless backend with Row-Level Security."]}
              image="/project_pics/grouptab.png"
              githubLink="https://github.com/Ashtonroxas/GroupTab"
            />
            <TiltProjectCard 
              title="HawkAdvisor" 
              tech={["Kotlin", "Spring Boot", "Azure AI"]}
              details={["Engineered a career discovery platform for UML students leveraging LLM logic.", "Automated ingestion and parsing of University course catalogs."]}
              image="/project_pics/hawkadvisor.png"
              githubLink="https://github.com/Ashtonroxas/Hawkadvisor"
            />
            <TiltProjectCard 
              title="Sokoban Game" 
              tech={["C++", "SFML", "OOP"]}
              details={["Programmed a high-performance 2D puzzle engine.", "Optimized frame rates via tile-based rendering."]}
              image="/project_pics/sokoban.png"
              githubLink="https://github.com/Ashtonroxas/Sokoban"
            />
            <TiltProjectCard 
              title="Application Tracker" 
              tech={["C++", "CLI"]}
              details={["Built a robust command-line tool in C++ to manage and query job application data locally."]}
              image="/project_pics/applicationtracker.png"
            />
          </div>
        </motion.div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-32 px-6 relative z-10">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-primary border-b-4 border-secondary inline-block pb-2 bg-white/40 px-2 rounded-xl backdrop-blur-sm">
            Experience & Leadership
          </motion.h2>

          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-secondary before:via-secondary/50 before:to-transparent">
            <TimelineItem 
              title="President"
              organization="UML The Filipino Club"
              date="April 2024 - April 2025"
              details={[
                "Directed a cross-functional team of 10 officers, managing a semester operating budget of $2,000+.",
                "Spearheaded comprehensive recruitment initiatives, driving active membership up by 25%."
              ]}
            />
            <TimelineItem 
              title="Volunteer"
              organization="Boston Misang Pinoy"
              date="December 2020 - Present"
              details={[
                "Consistently engaged in community organizing, event support, and logistics for local cultural initiatives."
              ]}
            />
          </div>
        </motion.div>
      </section>

      <footer className="py-16 text-center text-muted-foreground border-t border-border/50 bg-white/80 backdrop-blur-md relative z-10">
        <p className="font-bold text-primary tracking-tight">© {new Date().getFullYear()} Ashton Rich Roxas</p>
        <p className="text-xs font-semibold uppercase tracking-widest mt-2 opacity-50">Built with React & Framer Motion</p>
      </footer>
    </div>
  );
}

// UPDATED SUB-COMPONENTS

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-black">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute inset-0 w-full h-full object-cover opacity-100" 
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

function PhilippineSunProfile() {
  return (
    <div className="relative w-56 h-56 mx-auto flex items-center justify-center">
      {/* Philippine Sun */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-secondary drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {/* The 8 rays of the sun */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((degree) => (
          <g key={degree} transform={`rotate(${degree} 50 50)`}>
            {/* Main Center Ray */}
            <polygon points="48,18 50,-2 52,18" fill="currentColor" />
            {/* Left Sub Ray */}
            <polygon points="45,21 34,7 47.5,19" fill="currentColor" />
            {/* Right Sub Ray */}
            <polygon points="55,21 66,7 52.5,19" fill="currentColor" />
          </g>
        ))}
        {/* Inner circle of the sun */}
        <circle cx="50" cy="50" r="23" fill="currentColor" />
      </motion.svg>

      {/* Profile Picture overlaying the sun center */}
      <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary shadow-2xl z-10">
        <img
          src="/Profile_pics/profile.jpg"
          alt="Profile Headshot"
          className="w-full h-full object-cover rounded-full border-4 border-background"
        />
      </div>
    </div>
  );
}

function InfoCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-md border border-border/60 rounded-2xl shadow-sm hover:border-secondary hover:shadow-md transition-all group">
      <div className="p-3 bg-white rounded-xl group-hover:bg-secondary/20 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">{title}</p>
        <p className="text-base font-extrabold text-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

function TimelineItem({ title, organization, date, details }) {
  return (
    <motion.div variants={itemVariants} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
      <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-white/80 backdrop-blur-md p-7 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-secondary transition-all">
        <div className="flex flex-col mb-4">
          <h3 className="text-2xl font-extrabold text-foreground">{title}</h3>
          <p className="text-primary font-bold">{organization}</p>
          <Badge variant="outline" className="mt-2 w-fit bg-background text-muted-foreground border-border/80">{date}</Badge>
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside marker:text-secondary">
          {details.map((detail, idx) => (
            <li key={idx} className="leading-relaxed">{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
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

function TiltProjectCard({ title, tech, details, image, githubLink }) {
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
          
          {/* Project Image Section */}
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