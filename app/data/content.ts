export const profile = {
  name: "Sooraj Kakkanatt Manoj",
  role: "Data Scientist & AI/ML Engineer",
  location: "Rochester, NY, USA",
  email: "soorajmanoj@gmail.com",
  phone: "+1 585 540 0455",
  github: "https://github.com/soorajmanoj",
  linkedin: "https://www.linkedin.com/in/sooraj-kakkanatt-manoj-113321202/",
  resumeUrl: "/assets/Resume.pdf",
  photoUrl: "/assets/Profile.jpg",
  tagline:
    "I build ML pipelines, RAG systems, and data infrastructure — currently an MS Data Science student and GTA at RIT, researching bias in AI-generated content.",
};

export const about = {
  title: "Who I am",
  paragraphs: [
    "My name's Sooraj. I'm a Data Scientist and AI/ML engineer based in Rochester, NY, finishing my MS in Data Science at RIT.",
    "I work across the stack — from Spark/Kafka data pipelines to RAG systems and LLM evaluation research — with a focus on building things that hold up in production, not just in a notebook.",
  ],
};

export const skills = {
  "Programming & Databases": ["Python", "SQL", "R", "Java", "JavaScript", "PostgreSQL", "MySQL", "Snowflake", "MongoDB"],
  "Machine Learning & Deep Learning": ["PyTorch", "TensorFlow", "Keras", "LangChain", "CUDA", "NLP", "HuggingFace"],
  "MLOps, Cloud & Deployment": ["AWS", "Azure ML", "Git", "Docker", "Kubernetes", "FastAPI", "Flask"],
  "Data Engineering & Visualization": ["Apache Spark", "Apache Airflow", "Hadoop", "Tableau", "Power BI", "Jupyter", "QGIS", "SPSS"],
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
  date?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Bias in AI Travel Narratives: Indic vs. Western LLMs",
    description:
      "Investigated representational bias in AI-generated travel narratives via a modular 5-layer pipeline ingesting and normalizing 600,000 user comments. Built an automated relevance classifier with the Gemini API and orchestrated a fault-tolerant batch generation workflow across 4 LLMs (LLaMA 3.2, Gemma 2, GPT-2, Sarvam) to produce counterspeech addressing culturally biased narratives.",
    category: "AI Research",
    tags: ["Python", "NLP", "Gemini API", "LLMs"],
    code: "https://github.com/soorajmanoj/Bias-in-AI-Generated-Travel-Narratives",
    demo: "https://github.com/soorajmanoj/Bias-in-AI-Generated-Travel-Narratives",
    featured: true,
    date: "May 2026",
  },
  {
    id: 2,
    name: "AI-Powered YouTube Q&A Assistant",
    description:
      "Fully local RAG pipeline for YouTube Q&A using FastAPI, LangChain, and Ollama (llama3 + nomic-embed-text) — indexing transcripts in under 2s and answering in 8–12s. Session-scoped semantic search with FAISS retrieval and per-video chat memory, plus a pytest suite (13 tests, 71% coverage) with mocked LLM calls for CI reliability.",
    category: "AI Research",
    tags: ["FastAPI", "LangChain", "Ollama", "FAISS", "RAG"],
    code: "https://github.com/soorajmanoj/youtube-ai-assistant",
    demo: "https://github.com/soorajmanoj/youtube-ai-assistant",
    date: "Oct 2025",
  },
  {
    id: 3,
    name: "Dockerized MLOps API with FastAPI",
    description:
      "Containerized a TF-IDF + Logistic Regression sentiment classifier behind a FastAPI service with Pydantic-validated schemas and auto-generated OpenAPI docs. CI via GitHub Actions runs the pytest suite and validates the Docker build on every push/PR.",
    category: "Systems",
    tags: ["FastAPI", "Docker", "scikit-learn", "GitHub Actions"],
    code: "https://github.com/soorajmanoj/dockerized-mlops-api-fastapi",
    demo: "https://github.com/soorajmanoj/dockerized-mlops-api-fastapi",
    date: "Sep 2025",
  },
  {
    id: 4,
    name: "Kafka-Based Credit Card Transaction Processing System",
    description:
      "Real-time + batch transaction pipeline on a Kafka-based Lambda Architecture, streaming 400+ transactions through fraud checks (geolocation mismatch, credit-utilization limits) before batch-layer reconciliation. Stream-layer validation flags 2.5% of transactions for anomalies, then pushes finalized balances/scores back to MySQL.",
    category: "Systems",
    tags: ["Python", "Kafka", "MySQL", "Lambda Architecture"],
    code: "https://github.com/soorajmanoj/credit-card-kafka-pipeline",
    demo: "https://github.com/soorajmanoj/credit-card-kafka-pipeline",
    date: "Apr 2025",
  },
  {
    id: 5,
    name: "Healthcare Data Normalization with PySpark",
    description:
      "Spark ETL pipeline normalizing flat legacy healthcare visit data into a 10-dimension + 1-fact snowflake schema, with automated referential integrity checks across all foreign keys and Tableau dashboards for insight generation.",
    category: "Data Science",
    tags: ["PySpark", "MongoDB", "Tableau"],
    code: "https://github.com/soorajmanoj/pyspark-etl-healthcare-normalization-pipeline",
    demo: "https://github.com/soorajmanoj/pyspark-etl-healthcare-normalization-pipeline",
  },
  {
    id: 6,
    name: "YouTube Content Creator Recommendation System",
    description: "A recommendation system for YouTube content creators.",
    category: "Data Science",
    tags: ["Python", "Recommendation Systems"],
    code: "https://github.com/soorajmanoj/youtube-content-creator-recommendation",
    demo: "https://github.com/soorajmanoj/youtube-content-creator-recommendation",
  },
];

export type ExperienceEntry = {
  id: number;
  era: string;
  range: string;
  title: string;
  org: string;
  location: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    era: "TEACHING & RESEARCH",
    range: "Aug 2025 – Apr 2026",
    title: "Graduate Teaching Assistant — Department of Computer Science",
    org: "Rochester Institute of Technology",
    location: "Rochester, NY",
    description:
      "Mentored 25 students per semester in advanced server programming, backend system logic, and automation concepts, grading 750+ weekly script and data-pipeline assignments across 2 semesters with code reviews. Held 120+ hours of office hours advising 60–90 students on debugging and production-ready code.",
  },
  {
    id: 2,
    era: "INTERNSHIP",
    range: "Jan 2022 – Jul 2024",
    title: "Intern: Analysis & Design of Commissions for Gig Workers",
    org: "One Integral Technologies Pvt. Ltd.",
    location: "Chennai, India",
    description:
      "Designed and optimized performance-based pay models using Digital Twin simulations across 50+ data points, improving worker engagement by 15%. Built a React.js analytics dashboard turning data from 10+ sources into visualizations covering 500+ gigs, and integrated it with the backend Digital Twin system via MongoDB for predictive incentive analysis.",
  },
];

export const stats = [
  { value: "600K+", label: "Comments analyzed" },
  { value: "4", label: "LLMs benchmarked" },
];

export const education = [
  { school: "Rochester Institute of Technology", degree: "MS in Data Science", date: "May 2026" },
  { school: "PSG College of Arts and Science", degree: "BSc in Computer Science with Data Analytics", date: "May 2023" },
];

export const certifications = [
  { name: "Six Sigma White Belt", org: "Council for Six Sigma Certification", date: "Jul 2026" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", org: "Coursera / Microsoft", date: "May 2025" },
  { name: "Diploma in Programming and Data Science", org: "IIT Madras", date: "Aug 2022" },
];
