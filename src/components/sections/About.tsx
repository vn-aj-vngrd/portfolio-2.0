import React from "react";
import { Section } from "../ui/Section";
import { AboutBackground } from "../ui/AboutBackground";
import portfolioData from "@/data/portfolio-data.json";

export const About = () => {
  const { about } = portfolioData;

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(about.details.birthdate);

  return (
    <Section id="about" className="relative overflow-hidden">
      <AboutBackground />
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-foreground">
          I bridge the gap between <span className="text-accent">design</span>{" "}
          and <span className="text-accent">engineering</span>.
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>{about.description}</p>
          <p>
            I am {age} years old, hold a {about.details.degree}, and I am
            currently based in {about.details.address}. My passion lies in
            creating software solutions using modern technologies.
          </p>
        </div>
      </div>
    </Section>
  );
};
