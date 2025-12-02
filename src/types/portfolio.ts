export interface PortfolioData {
  hero: {
    summary: string;
  };
  about: {
    title: string;
    role: string;
    description: string[];
    details: {
      name: string;
      birthdate: string;
      degree: string;
      email: string;
      address: string;
      availability: string;
      linkedin: string;
      github: string;
      publicRepositories: number;
    };
    hobbies: string[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    description: string[];
  }[];
  education: {
    school: string;
    degree: string;
    dates: string;
  }[];
  skills: {
    [key: string]: string[];
  };
  topStack: {
    name: string;
  }[];
  projects: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    code: string;
  }[];
  certifications: {
    title: string;
    issuer: string;
    link: string;
  }[];
}
