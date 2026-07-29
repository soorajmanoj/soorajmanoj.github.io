// Placeholder content — replace with your own copy.
// This is seeded from the old portfolio so the layout has something to render.

export const profile = {
  name: "Sooraj Kakkanatt Manoj",
  role: "Data Scientist & AI/ML Engineer",
  location: "Rochester, NY, USA",
  email: "soorajmanoj@gmail.com",
  github: "https://github.com/soorajmanoj",
  linkedin: "https://www.linkedin.com/in/sooraj-kakkanatt-manoj-113321202/",
  resumeUrl: "/assets/Resume.pdf",
  photoUrl: "/assets/Profile.jpg",
  tagline:
    "I build data pipelines, ML systems, and full-stack products — currently focused on AI/LLM-driven data work.",
};

export const about = {
  title: "Who I am",
  paragraphs: [
    "My name's Sooraj. I'm a Data Science student driven by AI, Machine Learning, and insights, based in Rochester, NY.",
    "I work on data pipelines, machine learning systems, and full-stack products, and spend my free time exploring new tools in the AI/ML space.",
  ],
};

export type Project = {
  id: number;
  name: string;
  description: string;
  category: "AI Research" | "Data Science" | "Systems" | "Full-Stack";
  tags: string[];
  code?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Bias in AI Travel Narratives: Indic vs. Western LLMs",
    description:
      "Research project analyzing systematic bias and cultural asymmetry in AI-generated travel narratives across LLM families.",
    category: "AI Research",
    tags: ["Python", "NLP", "LLMs"],
    code: "https://github.com/soorajmanoj/Bias-in-AI-Generated-Travel-Narratives",
    demo: "https://github.com/soorajmanoj/Bias-in-AI-Generated-Travel-Narratives",
    featured: true,
  },
  {
    id: 2,
    name: "Kafka-Based Credit Card Transaction Processing System",
    description:
      "Streaming pipeline for processing and analyzing credit card transactions in real time using Kafka and Spark.",
    category: "Data Science",
    tags: ["Python", "MySQL", "Spark", "Kafka"],
    code: "https://github.com/soorajmanoj/credit-card-kafka-pipeline",
    demo: "https://github.com/soorajmanoj/credit-card-kafka-pipeline",
  },
  {
    id: 3,
    name: "Amazon Sales Analysis Dashboard",
    description: "Interactive BI dashboard analyzing Amazon sales trends and performance metrics.",
    category: "Data Science",
    tags: ["Power BI", "MySQL"],
  },
  {
    id: 4,
    name: "AI Recipe Generator",
    description: "Web app that generates recipes from available ingredients using the OpenAI API.",
    category: "Full-Stack",
    tags: ["React", "OpenAI API"],
  },
  {
    id: 5,
    name: "Healthcare Data Normalization with PySpark",
    description: "ETL pipeline normalizing large-scale healthcare data using PySpark and MongoDB.",
    category: "Data Science",
    tags: ["PySpark", "MongoDB"],
    code: "https://github.com/soorajmanoj/pyspark-etl-healthcare-normalization-pipeline",
    demo: "https://github.com/soorajmanoj/pyspark-etl-healthcare-normalization-pipeline",
  },
];

export type ExperienceEntry = {
  id: number;
  era: string;
  range: string;
  title: string;
  org: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    era: "INTERNSHIP",
    range: "2023 – 2024",
    title: "Intern: Analysis & Design of Commissions for Gig Workers",
    org: "One Integral Technologies Pvt. Ltd.",
    description: "Placeholder description — replace with details of scope and impact.",
  },
];

export const stats = [
  { value: "5+", label: "Projects shipped" },
  { value: "2", label: "Research areas" },
];
