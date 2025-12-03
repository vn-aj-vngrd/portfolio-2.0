"use client";

import { Download, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "@/components/ui/Button";

export default function ResumePage() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `Resume_${portfolioData.about.details.name.replace(" ", "_")}`,
  });

  const { about, experience, education, skills, projects, certifications } =
    portfolioData;

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      {/* Controls */}
      <div className="max-w-[210mm] mx-auto mb-8 flex justify-end print:hidden">
        <Button onClick={() => handlePrint()} className="gap-2">
          <Download size={16} />
          Download PDF
        </Button>
      </div>

      {/* Resume Paper */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none print:max-w-none">
        <div
          ref={componentRef}
          className="p-[15mm] md:p-[20mm] bg-white text-slate-900 min-h-[297mm]"
          style={{ fontFamily: "Arial, sans-serif" }} // Safe font for printing
        >
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-6 mb-6">
            <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">
              {about.details.name}
            </h1>
            <h2 className="text-xl font-medium text-slate-600 mb-4">
              {about.role}
            </h2>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Mail size={14} />
                <a
                  href={`mailto:${about.details.email}`}
                  className="hover:underline"
                >
                  {about.details.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>{about.details.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Linkedin size={14} />
                <Link
                  href={about.details.linkedin}
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </div>
              <div className="flex items-center gap-1.5">
                <Github size={14} />
                <Link
                  href={about.details.github}
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={14} />
                <Link href="/" className="hover:underline">
                  Portfolio
                </Link>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {about.description.join(" ")}
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex">
                  <span className="font-semibold w-32 shrink-0 text-slate-800">
                    {category}:
                  </span>
                  <span className="text-slate-700 flex-1">
                    {items.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-200 pb-1">
              Work Experience
            </h3>
            <div className="space-y-5">
              {experience.map((job, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900">{job.role}</h4>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap ml-4">
                      {job.dates}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-2">
                    {job.company}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-sm text-slate-600 pl-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4 border-b border-slate-200 pb-1">
              Key Projects
            </h3>
            <div className="space-y-4">
              {projects.slice(0, 3).map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900">
                      {project.title}
                    </h4>
                    <div className="flex gap-2 text-xs text-slate-500">
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="hover:underline"
                        >
                          Live Demo
                        </Link>
                      )}
                      {project.code && (
                        <Link
                          href={project.code}
                          target="_blank"
                          className="hover:underline"
                        >
                          Code
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium">Tech Stack:</span>{" "}
                    {project.tech.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Education */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-slate-700">{edu.degree}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{edu.dates}</p>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 border-b border-slate-200 pb-1">
                Certifications
              </h3>
              <ul className="space-y-1.5">
                {certifications.slice(0, 5).map((cert, index) => (
                  <li key={index} className="text-sm text-slate-700">
                    <span className="font-medium">{cert.title}</span>
                    <span className="text-slate-500 text-xs block">
                      {cert.issuer}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
