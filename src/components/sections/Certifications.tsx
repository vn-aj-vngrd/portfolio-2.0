"use client";

import { ExternalLink } from "lucide-react";

import portfolioData from "@/data/portfolio-data.json";

import { Button } from "../ui/Button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Grid } from "../ui/Layout";
import { FadeIn } from "../ui/Motion";
import { Section } from "../ui/Section";
import { Heading, Text } from "../ui/Typography";

const certifications = portfolioData.certifications;

export const Certifications = () => {
  return (
    <Section id="certifications">
      <FadeIn>
        <Heading
          variant="h2"
          className="text-4xl font-semibold mb-16 tracking-tight"
        >
          Certifications
        </Heading>
      </FadeIn>
      <Grid className="gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <FadeIn
            key={index}
            delay={index * 0.1}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
              <CardHeader className="p-0 mb-6 grow">
                <CardTitle className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </CardTitle>
                <Text className="text-base text-muted-foreground font-medium">
                  {cert.issuer}
                </Text>
              </CardHeader>

              <CardFooter className="p-0 mt-auto">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    See Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
      </Grid>
    </Section>
  );
};
