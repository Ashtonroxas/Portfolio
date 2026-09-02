import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { containerVariants, itemVariants } from "@/lib/animation";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto space-y-16"
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-primary border-b-4 border-secondary inline-block pb-2 bg-white/40 px-2 rounded-xl backdrop-blur-sm">
          Experience & Leadership
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExperienceCard
            title="President"
            organization="UML The Filipino Club"
            date="April 2024 - April 2025"
            icon={Award}
            colorClass="border-t-blue-500 border-x-border/50 border-b-border/50"
            details={[
              "Directed a cross-functional team of 10 officers, managing a semester operating budget of $2,000+.",
              "Spearheaded comprehensive recruitment initiatives, driving active membership up by 25%."
            ]}
          />
          <ExperienceCard
            title="Volunteer"
            organization="Boston Misang Pinoy (Filipino Church)"
            date="December 2020 - Present"
            icon={Heart}
            colorClass="border-t-rose-500 border-x-border/50 border-b-border/50"
            details={[
              "Consistently engaged in community organizing, event support, and logistics for local cultural initiatives."
            ]}
          />
          <ExperienceCard
            title="Shift Lead"
            organization="Gong Cha"
            date="June 2021 - December 2024"
            icon={Coffee}
            colorClass="border-t-amber-500 border-x-border/50 border-b-border/50"
            details={[
              "Managed high-volume order workflows during peak hours, ensuring accuracy and efficiency.",
              "Collaborated with team members to maintain seamless front-of-house operations and resolve customer inquiries."
            ]}
          />
          <ExperienceCard
            title="Software Engineer Intern"
            organization="Sprague Operating Resources LLC — Portsmouth, NH"
            date="June 2026 - Present"
            icon={Award}
            colorClass="border-t-emerald-500 border-x-border/50 border-b-border/50"
            details={[
              "Developed and expanded a production Python data-reconciliation platform that compares counterparty, address, and contact records across enterprise systems and generates reviewer-approved change requests for downstream ETL processing.",
              "Migrated legacy SSIS workflows into reusable Python pipelines that execute parameterized SQL Server stored procedures, normalize output formats, generate deterministic CSV files, and publish billing data to AWS S3.",
              "Implemented feature-flagged rollout support for new reconciliation workflows covering missing and extra addresses, contacts, and counterparty-field discrepancies, enabling controlled delivery of additional automated remediation capabilities."
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceCard({ title, organization, date, details, icon: Icon, colorClass }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div className={`h-full bg-white/80 backdrop-blur-md p-7 rounded-2xl border-t-4 shadow-sm hover:shadow-xl transition-all flex flex-col ${colorClass}`}>
        <div className="flex flex-col mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-muted/50 rounded-xl text-primary shadow-inner">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground leading-tight">{title}</h3>
          </div>
          <p className="text-primary font-bold text-lg">{organization}</p>
          <Badge variant="outline" className="mt-3 w-fit bg-background text-muted-foreground border-border/80 shadow-sm">
            {date}
          </Badge>
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground list-disc list-inside marker:text-primary/40 flex-grow">
          {details.map((detail, idx) => (
            <li key={idx} className="leading-relaxed">{detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}