export const personalInfo = {
  name: "Madhavi M",
  title: "AI/ML SecOps Engineer",
  email: "Madhavi.m1913@gmail.com",
  phone: "9712366557",
  linkedin: "https://www.linkedin.com/in/madhavim13/",
  github: "https://github.com/madhavim13",
  summary: "AI/ML Ops Engineer with 6 years of experience transforming machine learning prototypes into secure, scalable, production-ready solutions across cloud-native environments. Combines deep expertise in MLOps, LLMOps, DevOps, and ML SecOps to deliver automated pipelines, GenAI systems, and resilient infrastructure across industries like retail, healthcare, and e-commerce.",
  tagline: "Building secure, scalable AI/ML solutions that drive real-world impact"
};

export const experience = [
  {
    company: "Nike",
    location: "TX, USA",
    role: "AI/ML Ops Engineer",
    period: "Jan 2024 – Present",
    description: "Led the design and deployment of a GenAI-based intelligent shopping assistant, integrating large language models into Nike's e-commerce platform.",
    highlights: [
      "Designed RAG pipeline using LangChain, OpenAI GPT-4, and OpenSearch, reducing customer support tickets by 60%",
      "Built end-to-end CI/CD workflows with GitLab and Terraform, reducing release cycles by 50%",
      "Deployed GPU-enabled LLM inference services on Amazon EKS with KServe and Helm",
      "Integrated Crew AI framework and multi-agent architectures for autonomous task management",
      "Implemented self-healing Kubernetes clusters, achieving 40% less downtime"
    ],
    tech: ["LangChain", "GPT-4", "Anthropic Claude", "AWS Bedrock", "Kubernetes", "Terraform", "Crew AI"]
  },
  {
    company: "Mount Sinai Health System",
    location: "NY, USA",
    role: "ML SecOps Engineer",
    period: "Sep 2022 – Dec 2023",
    description: "Secured ML pipelines and cloud environments for HIPAA-compliant healthcare analytics.",
    highlights: [
      "Architected HIPAA-compliant AWS infrastructure with end-to-end encryption",
      "Developed ML pipelines on SageMaker for patient readmission risk prediction, improving accuracy by 20%",
      "Achieved 100% compliance during external audits with AWS Security Hub and Config rules",
      "Spearheaded NLP-based patient triage assistant using GPT-3.5, decreasing wait times by 25%"
    ],
    tech: ["AWS SageMaker", "Kubeflow", "GPT-3.5", "AWS Security Hub", "Terraform", "HIPAA Compliance"]
  },
  {
    company: "Flipkart",
    location: "Hyderabad, India",
    role: "DevOps Engineer",
    period: "Feb 2020 – July 2022",
    description: "Supported large-scale e-commerce systems, deploying ML microservices and optimizing DevOps pipelines.",
    highlights: [
      "Managed Amazon EKS and ECS clusters for recommendation and search microservices",
      "Built CI/CD pipelines using GitLab, ArgoCD, Spinnaker, and Helm",
      "Designed real-time personalization pipelines using Apache Kafka and AWS Kinesis",
      "Implemented concept drift detection using Evidently AI and MLflow"
    ],
    tech: ["Kubernetes", "Docker", "Kafka", "ArgoCD", "Spinnaker", "MLflow", "Terraform"]
  },
  {
    company: "Espier Infolabs",
    location: "Hyderabad, India",
    role: "Jr. DevOps Engineer",
    period: "March 2019 – Jan 2020",
    description: "Contributed to cloud automation and CI/CD initiatives for client projects.",
    highlights: [
      "Automated AWS resource provisioning using Terraform and CloudFormation",
      "Developed Jenkins pipelines for Python ML workflows",
      "Built ML forecasting models using ARIMA and Prophet on SageMaker"
    ],
    tech: ["AWS", "Terraform", "Jenkins", "Python", "SageMaker"]
  }
];

export const projects = [
  {
    title: "GenAI RAG Chatbot",
    description: "Created an enterprise chatbot using LangChain, Bedrock, Pinecone, and Chroma DB to enable conversational, context-aware searches across internal documentation. Enhanced with Crew AI and multi-agent systems for complex, multi-step workflows.",
    tech: ["LangChain", "AWS Bedrock", "Pinecone", "Chroma DB", "Crew AI", "Multi-Agent Systems"],
    impact: "Significantly improved user experience and internal knowledge sharing"
  },
  {
    title: "AIR – AI Robotics Learning App",
    description: "Built an interactive educational app where kids learn AI concepts through block-based coding, doodle-to-image transformation, and storytelling. Integrated AWS services for secure, scalable experience.",
    tech: ["AWS Lambda", "DynamoDB", "API Gateway", "Cognito", "React", "AI/ML"],
    impact: "Making AI education accessible and engaging for children"
  },
  {
    title: "Self-Healing Kubernetes Cluster",
    description: "Designed a Kubernetes cluster that detects node failures with Prometheus alerts and uses Lambda for automatic recovery, eliminating downtime and manual intervention.",
    tech: ["Kubernetes", "Prometheus", "AWS Lambda", "Terraform", "AlertManager"],
    impact: "40% reduction in operational downtime"
  }
];

export const skills = {
  "AI/ML & GenAI": [
    "LangChain",
    "RAG Systems",
    "GPT-4",
    "Anthropic Claude",
    "Crew AI",
    "Multi-Agent Systems",
    "Hugging Face",
    "Kubeflow",
    "MLflow",
    "TensorBoard",
    "Llama Index"
  ],
  "Cloud Platforms": [
    "AWS (EC2, S3, Lambda, ECS, EKS, SageMaker, Bedrock)",
    "Azure (AKS, ML Studio)",
    "OpenSearch",
    "EMR",
    "Kinesis",
    "Glue"
  ],
  "DevOps & Infrastructure": [
    "Docker",
    "Kubernetes",
    "Helm",
    "Terraform",
    "GitLab CI/CD",
    "GitHub Actions",
    "ArgoCD",
    "Spinnaker",
    "Jenkins"
  ],
  "Security & Compliance": [
    "AWS IAM",
    "GuardDuty",
    "Security Hub",
    "WAF",
    "Shield Advanced",
    "HashiCorp Vault",
    "Open Policy Agent (OPA)",
    "Trivy",
    "SAST/DAST"
  ],
  "Data & Streaming": [
    "Apache Kafka",
    "Spark",
    "PySpark",
    "Airflow",
    "PostgreSQL",
    "MongoDB",
    "Snowflake",
    "Redis"
  ],
  "Programming": [
    "Python",
    "Go",
    "Bash",
    "SQL",
    "YAML"
  ],
  "Observability": [
    "Prometheus",
    "Grafana",
    "CloudWatch",
    "ELK Stack",
    "Datadog",
    "OpenTelemetry"
  ]
};

export const certifications = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    icon: "🤖"
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    icon: "☁️"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️"
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "The Linux Foundation",
    icon: "🔒"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    icon: "🛡️"
  }
];

export const education = {
  degree: "Masters in Cybersecurity & Information Assurance",
  institution: "University of Central Missouri",
  icon: "🎓"
};

export const chatbotResponses = {
  // Greetings
  greeting: [
    "Hello! I'm Madhavi's AI assistant. Ask me anything about her experience in AI/ML and security!",
    "Hi there! Want to know about Madhavi's work with GenAI, MLOps, or cloud security?",
    "Hey! I can tell you about Madhavi's projects, skills, or experience. What interests you?"
  ],

  // Skills - General
  skills: "Madhavi specializes in AI/ML Operations with 6 years of experience. Her expertise includes:\n\n🤖 AI/ML & GenAI: LangChain, RAG systems, GPT-4, Anthropic Claude, Crew AI, Multi-Agent Systems, Kubeflow, MLflow\n\n☁️ Cloud: AWS (EC2, EKS, Lambda, SageMaker, Bedrock), Azure (AKS, ML Studio)\n\n🔧 DevOps: Docker, Kubernetes, Terraform, GitLab CI/CD, GitHub Actions, ArgoCD\n\n🔒 Security: AWS IAM, GuardDuty, Security Hub, HashiCorp Vault, OPA, HIPAA compliance",

  // Skills - Specific tech
  langchain: "Madhavi is highly experienced with LangChain! At Nike, she designed a RAG pipeline using LangChain and OpenAI GPT-4 that reduced customer support tickets by 60%. She also uses LangChain for prompt engineering workflows.",

  kubernetes: "Madhavi is a Kubernetes expert with CKS certification. She's implemented self-healing Kubernetes clusters with Prometheus and Lambda, achieving 40% less downtime. She manages EKS clusters at Nike and has deployed GPU-enabled LLM inference services with KServe.",

  aws: "Madhavi has extensive AWS experience across multiple certifications (Cloud Practitioner, Solutions Architect, ML Specialty). She's worked with EC2, EKS, Lambda, SageMaker, Bedrock, and more. At Mount Sinai, she architected HIPAA-compliant AWS infrastructure.",

  genai: "Madhavi is at the forefront of GenAI! She's built RAG pipelines with GPT-4, integrated Anthropic Claude into Slack tools, worked with AWS Bedrock and Titan Embeddings, and implemented Crew AI multi-agent systems for autonomous task management.",

  // Experience - General
  experience: "Madhavi has 6 years of experience:\n\n💼 Nike (2024-Present): AI/ML Ops Engineer building GenAI shopping assistants\n\n🏥 Mount Sinai (2022-2023): ML SecOps Engineer for HIPAA-compliant healthcare analytics\n\n🛒 Flipkart (2020-2022): DevOps Engineer supporting e-commerce ML systems\n\n🚀 Espier Infolabs (2019-2020): Jr. DevOps Engineer for cloud automation",

  // Experience - Specific companies
  nike: "At Nike (Jan 2024 - Present), Madhavi leads GenAI initiatives as an AI/ML Ops Engineer. She designed a RAG pipeline that reduced customer support tickets by 60%, built CI/CD workflows that cut release cycles by 50%, and deployed GPU-enabled LLM inference on EKS. She also integrated Crew AI multi-agent systems!",

  mountsinai: "At Mount Sinai Health System (Sep 2022 - Dec 2023), Madhavi secured ML pipelines for HIPAA-compliant healthcare analytics. She built patient readmission prediction models with 20% improved accuracy and created an NLP-based patient triage assistant that reduced wait times by 25%.",

  flipkart: "At Flipkart (Feb 2020 - July 2022), Madhavi supported large-scale e-commerce with recommendation and search microservices. She built real-time personalization pipelines using Kafka and Kinesis, and implemented concept drift detection with MLflow.",

  // Projects
  projects: "Madhavi's featured projects:\n\n🤖 GenAI RAG Chatbot: Enterprise chatbot using LangChain, Bedrock, Pinecone, and Crew AI for context-aware searches\n\n👶 AIR App: Interactive educational app teaching kids AI concepts with AWS Lambda, DynamoDB, and API Gateway\n\n🔧 Self-Healing K8s Cluster: Automated recovery system with Prometheus and Lambda, reducing downtime by 40%",

  rag: "The GenAI RAG Chatbot is an enterprise solution using LangChain, AWS Bedrock, Pinecone, and Chroma DB. It enables conversational, context-aware searches across internal documentation. Enhanced with Crew AI and multi-agent systems for complex workflows!",

  // Certifications
  certifications: "Madhavi holds 5+ certifications:\n\n☁️ AWS Certified Machine Learning - Specialty\n☁️ AWS Certified Solutions Architect - Associate\n☁️ AWS Certified Cloud Practitioner\n🔒 Certified Kubernetes Security Specialist (CKS)\n🛡️ CompTIA Security+\n\n🎓 Education: Masters in Cybersecurity & Information Assurance from University of Central Missouri",

  // Contact
  contact: "You can reach Madhavi at:\n\n📧 Email: Madhavi.m1913@gmail.com\n💼 LinkedIn: linkedin.com/in/madhavim13\n📱 Phone: 9712366557\n\nShe's always open to discussing new opportunities, collaborations, or chatting about AI/ML and cloud security!",

  // Achievements
  achievements: "Some of Madhavi's key achievements:\n\n• Reduced customer support tickets by 60% with GenAI RAG pipeline at Nike\n• Cut release cycles by 50% with automated CI/CD workflows\n• Achieved 100% compliance during HIPAA audits at Mount Sinai\n• Improved ML model accuracy by 20% for patient predictions\n• Reduced downtime by 40% with self-healing Kubernetes\n• Decreased wait times by 25% with NLP triage assistant",

  // Default
  default: [
    "I can help you learn about Madhavi's skills, experience, projects, certifications, achievements, or how to contact her. What would you like to know?",
    "Great question! Try asking about specific technologies (LangChain, Kubernetes, AWS, GenAI), her work at Nike or Mount Sinai, her projects, or her certifications!",
    "I'm here to help! You can ask about her technical skills, work experience, notable achievements, education, or how to get in touch with her."
  ]
};
