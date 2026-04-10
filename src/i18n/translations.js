export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      aboutMe: "About Me",
      skills: "Skills",
      projects: "Projects",
      experiences: "Experiences",
    },

    // Home
    home: {
      greeting: "Hello, my name is",
      typedStrings: [
        "Full Stack Developer",
        "Backend Specialist",
        "AWS Solutions Architect",
      ],
      bio: "Full Stack Developer focused on backend, specialized in serverless and event-driven architectures on AWS. Experience with async processing pipelines, AI integrations, and regulated domain modeling.",
      tagline: "Transforming ideas into scalable serverless solutions.",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
    },

    // About Me
    aboutMe: {
      title: "About Me",
      bio: "Hello! I'm Ian Toniolo, a Full Stack Developer with a backend focus, specialized in serverless and event-driven architectures on AWS (Lambda, SQS/SNS, DynamoDB, API Gateway). I'm currently pursuing a degree in Computer Science at the Federal University of ABC (UFABC), complementing my previous interdisciplinary degree in Science and Technology. I have experience with async processing pipelines, AI integrations for document analysis, and data modeling in regulated domains. AWS Solutions Architect \u2013 Associate certified.",
    },

    // Skills
    skills: {
      title: "Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        cloud: "Cloud & DevOps",
        databases: "Databases & Testing",
      },
    },

    // Projects
    projects: {
      title: "Projects",
      viewOnGithub: "View on GitHub",
      techStack: "Tech Stack",
      items: [
        {
          title: "LoL Summoner Match Manager",
          description:
            "A tool to manage League of Legends match data for summoners, allowing users to view, analyze, and track their match history.",
        },
        {
          title: "Financial Wallet",
          description:
            "An app that offers a secure way to manage user payments with RESTful APIs. Features NestJS, JWT for auth, and PostgreSQL for data storage.",
        },
        {
          title: "ToDoList Spring Boot API",
          description:
            "ToDoList API in Java with Spring Boot, JWT authentication, PostgreSQL, Docker and automated testing.",
        },
        {
          title: "CNJ Processor",
          description:
            "Web app for consulting and processing CNJ numbers with validation, async queueing, and results tracking. Designed for scalability and automation in judicial data workflows.",
        },
      ],
    },

    // Experiences
    experiences: {
      title: "Experiences",
      items: [
        {
          company: "BT Cr\u00e9ditos",
          role: "Full Stack Developer",
          period: "June 2025 \u2013 Present",
          responsibilities: [
            "Architected and implemented an async payslip processing pipeline with AWS Textract (OCR), Lambda, SQS/SNS, DynamoDB Streams, and WebSockets, reducing document processing time from days to 2\u20135 minutes per file.",
            "Designed new data modeling for the labor KYC system migration, normalizing complex entities into independent tables while maintaining bidirectional sync with the legacy database.",
            "Implemented end-to-end KYC flow with biometric verification (liveness) via idwall integration, connecting Vue.js frontend with serverless Python/AWS Lambda backend.",
            "Integrated AI services for automated analysis of contracts and legal documents on the main case management platform.",
            "Developed admin panel in Angular with role-based access control (RBAC), using AWS Cognito for OAuth authentication.",
            "Structured CI/CD pipelines with GitHub Actions for automated testing, linting, and multi-environment deployment (staging/production) using CloudFormation/SAM as IaC.",
            "Modeled relational databases (PostgreSQL) and DynamoDB with GSIs for case tracking, contracts, and fraud prevention.",
            "Diagnosed and resolved a production incident in the payslip pipeline caused by numeric type incompatibility (float vs Decimal) in DynamoDB, identifying root cause via CloudWatch Logs.",
            "Mentored two colleagues (mid-level and junior) in AWS certification preparation, with both passing successfully.",
          ],
        },
        {
          company: "Zax App",
          role: "Backend Developer",
          period: "May 2024 \u2013 June 2025",
          responsibilities: [
            "Led the Personalized Lists project, enabling merchants to segment customers by multiple filters and trigger automated WhatsApp campaigns, boosting client acquisition and re-engagement.",
            "Built integrations with external partners to automate operational workflows on the Zax 360 platform.",
            "Containerized applications with Docker/Docker Compose, standardizing development environments and simplifying deployments.",
            "Developed microservices in Node.js/NestJS to modularize platform functionalities, separating business domains into independent services.",
          ],
        },
        {
          company: "Zax App",
          role: "Software Engineering Intern",
          period: "September 2022 \u2013 April 2024",
          responsibilities: [
            "Took ownership of the platform's customer service module, being the main developer responsible for its continuity, maintenance, and improvements.",
            "Developed the Zaya Virtual Assistant, a chatbot that handles customer inquiries before human agents and structures information for analysts when it can't resolve autonomously, significantly reducing manual support volume.",
            "Implemented and managed cronjobs for data processing and integrity maintenance, along with backend solutions for recurring process optimization.",
          ],
        },
      ],
    },

    // Footer
    footer: {
      copyright: "Copyright \u00a9 2026 by Ian Toniolo. All rights reserved.",
    },
  },

  pt: {
    // Navbar
    nav: {
      home: "In\u00edcio",
      aboutMe: "Sobre Mim",
      skills: "Habilidades",
      projects: "Projetos",
      experiences: "Experi\u00eancias",
    },

    // Home
    home: {
      greeting: "Ol\u00e1, meu nome \u00e9",
      typedStrings: [
        "Desenvolvedor Full Stack",
        "Especialista Backend",
        "AWS Solutions Architect",
      ],
      bio: "Desenvolvedor Full Stack com foco em backend, especializado em arquiteturas serverless e event-driven na AWS. Experi\u00eancia com pipelines de processamento ass\u00edncrono, integra\u00e7\u00f5es de IA e modelagem de dados em dom\u00ednios regulados.",
      tagline: "Transformando ideias em solu\u00e7\u00f5es serverless escal\u00e1veis.",
      viewProjects: "Ver Projetos",
      contactMe: "Contato",
      downloadResume: "Baixar Curr\u00edculo",
    },

    // About Me
    aboutMe: {
      title: "Sobre Mim",
      bio: "Ol\u00e1! Sou Ian Toniolo, Desenvolvedor Full Stack com foco em backend, especializado em arquiteturas serverless e event-driven na AWS (Lambda, SQS/SNS, DynamoDB, API Gateway). Atualmente cursando Ci\u00eancia da Computa\u00e7\u00e3o na Universidade Federal do ABC (UFABC), complementando meu bacharelado interdisciplinar em Ci\u00eancia e Tecnologia. Tenho experi\u00eancia com pipelines de processamento ass\u00edncrono, integra\u00e7\u00f5es de IA para an\u00e1lise documental e modelagem de dados em dom\u00ednios regulados. Certificado AWS Solutions Architect \u2013 Associate.",
    },

    // Skills
    skills: {
      title: "Habilidades",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        cloud: "Cloud & DevOps",
        databases: "Bancos de Dados & Testes",
      },
    },

    // Projects
    projects: {
      title: "Projetos",
      viewOnGithub: "Ver no GitHub",
      techStack: "Tecnologias",
      items: [
        {
          title: "LoL Summoner Match Manager",
          description:
            "Ferramenta para gerenciar dados de partidas de League of Legends, permitindo visualizar, analisar e acompanhar o hist\u00f3rico de partidas.",
        },
        {
          title: "Financial Wallet",
          description:
            "Aplicativo para gerenciamento seguro de pagamentos com APIs RESTful. Utiliza NestJS, JWT para autentica\u00e7\u00e3o e PostgreSQL para armazenamento.",
        },
        {
          title: "ToDoList Spring Boot API",
          description:
            "API de lista de tarefas em Java com Spring Boot, autentica\u00e7\u00e3o JWT, PostgreSQL, Docker e testes automatizados.",
        },
        {
          title: "CNJ Processor",
          description:
            "Aplica\u00e7\u00e3o web para consulta e processamento de n\u00fameros CNJ com valida\u00e7\u00e3o, enfileiramento ass\u00edncrono e rastreamento de resultados. Projetada para escalabilidade e automa\u00e7\u00e3o em fluxos de dados judiciais.",
        },
      ],
    },

    // Experiences
    experiences: {
      title: "Experi\u00eancias",
      items: [
        {
          company: "BT Cr\u00e9ditos",
          role: "Desenvolvedor Full Stack",
          period: "Jun 2025 \u2013 Presente",
          responsibilities: [
            "Arquitetei e implementei pipeline ass\u00edncrono de processamento de holerites com AWS Textract (OCR), Lambda, SQS/SNS, DynamoDB Streams e WebSockets, reduzindo o tempo de processamento de dias para 2\u20135 minutos por arquivo.",
            "Projetei nova modelagem de dados para migra\u00e7\u00e3o do sistema de KYC jur\u00eddico trabalhista, normalizando entidades complexas em tabelas independentes e mantendo sincronia bidirecional com a base legada.",
            "Implementei fluxo completo de KYC com verifica\u00e7\u00e3o biom\u00e9trica (liveness) via integra\u00e7\u00e3o com idwall, conectando frontend Vue.js com backend serverless em Python/AWS Lambda.",
            "Integrei servi\u00e7os de IA para an\u00e1lise automatizada de contratos e documentos jur\u00eddicos na plataforma principal de gest\u00e3o de casos.",
            "Desenvolvi painel administrativo em Angular com controle de acesso baseado em roles (RBAC), utilizando AWS Cognito para autentica\u00e7\u00e3o OAuth.",
            "Estruturei pipelines de CI/CD com GitHub Actions para testes automatizados, linting e deploy em m\u00faltiplos ambientes (staging/produ\u00e7\u00e3o) utilizando CloudFormation/SAM como IaC.",
            "Modelei banco de dados relacional (PostgreSQL) e DynamoDB com GSIs para rastreamento de casos, contratos e preven\u00e7\u00e3o a fraudes.",
            "Diagnostiquei e resolvi incidente em produ\u00e7\u00e3o no pipeline de holerites causado por incompatibilidade de tipos num\u00e9ricos (float vs Decimal) no DynamoDB, identificando root cause via CloudWatch Logs.",
            "Orientei dois colegas (pleno e j\u00fanior) na prepara\u00e7\u00e3o para certifica\u00e7\u00f5es AWS, com ambos aprovados.",
          ],
        },
        {
          company: "Zax App",
          role: "Desenvolvedor Backend",
          period: "Mai 2024 \u2013 Jun 2025",
          responsibilities: [
            "Liderei o projeto de Listas Personalizadas, permitindo que lojistas segmentem clientes por m\u00faltiplos filtros e disparem campanhas automatizadas de WhatsApp, contribuindo para aumento na capta\u00e7\u00e3o e reengajamento.",
            "Constru\u00ed integra\u00e7\u00f5es com parceiros externos para automa\u00e7\u00e3o de fluxos operacionais na plataforma Zax 360.",
            "Containerizei aplica\u00e7\u00f5es com Docker/Docker Compose, padronizando ambientes de desenvolvimento e simplificando deploys.",
            "Desenvolvi microsservi\u00e7os em Node.js/NestJS para modularizar funcionalidades da plataforma, separando dom\u00ednios de neg\u00f3cio em servi\u00e7os independentes.",
          ],
        },
        {
          company: "Zax App",
          role: "Estagi\u00e1rio de Desenvolvimento",
          period: "Set 2022 \u2013 Abr 2024",
          responsibilities: [
            "Assumi ownership do servi\u00e7o de atendimento da plataforma, sendo principal respons\u00e1vel pela continuidade, manuten\u00e7\u00e3o e implementa\u00e7\u00e3o de melhorias.",
            "Desenvolvi a Assistente Virtual Zaya, chatbot que antecipa atendimentos humanos e estrutura informa\u00e7\u00f5es para analistas quando n\u00e3o resolve autonomamente, reduzindo significativamente o volume de atendimentos manuais.",
            "Implementei e gerenciei cronjobs para processamento de dados e manuten\u00e7\u00e3o de integridade, al\u00e9m de solu\u00e7\u00f5es de backend para otimiza\u00e7\u00e3o de processos recorrentes.",
          ],
        },
      ],
    },

    // Footer
    footer: {
      copyright: "Copyright \u00a9 2026 por Ian Toniolo. Todos os direitos reservados.",
    },
  },
};
