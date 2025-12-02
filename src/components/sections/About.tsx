import React from "react";
import { Section } from "../ui/Section";

export const About = () => {
  return (
    <Section id="about">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-foreground">
          I bridge the gap between <span className="text-accent">design</span>{" "}
          and <span className="text-accent">engineering</span>.
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            With over 6 years of experience, I believe that the best products
            are built at the intersection of robust technical architecture and
            intuitive user experience.
          </p>
          <p>
            Currently, I'm focused on building accessible design systems and
            optimizing performance for high-traffic applications. I enjoy
            solving complex problems with simple, maintainable code.
          </p>
        </div>
      </div>
    </Section>
  );
};
