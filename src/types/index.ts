export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  dates: string;
}

export interface AboutDetails {
  name: string;
  age: string;
  degree: string;
  email: string;
  address: string;
}

export interface About {
  title: string;
  description: string;
  details: AboutDetails;
}

export interface Certification {
  title: string;
  issuer: string;
  link: string;
}

export interface PortfolioData {
  about: About;
  experience: Experience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
}
