export const fullVersionLink = "https://bombnp.dev";
export const sourceLink = "https://github.com/bombnp/resume";
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg";

export const introData = {
  name: "Nut Pinyo",
  nickname: "Bomb",
  phone: "",
  email: "bomb.np@gmail.com",
  github: "bombnp",
  linkedin: "bombnp",
  location: "Bangkok, Thailand",
  website: "bombnp.dev",
};

// TODO: add nested subsections for readability
export const technologies = [
  {
    section: "Languages:",
    details:
      "<strong>Go, TypeScript</strong>, Node.js, Python, Java, C, C++, Bash, SQL",
  },
  {
    section: "Frameworks and Libraries:",
    details:
      "<strong>Go Fiber, NestJS</strong>, Express.js, React, Next.js, Django, TailwindCSS, Prisma, GORM, GraphQL, go-ethereum, PayloadCMS, Strapi",
  },
  {
    section: "Databases:",
    details:
      "<strong>PostgreSQL, MongoDB, Redis</strong>, MySQL, InfluxDB, CrateDB, Prometheus, ElasticSearch",
  },
  {
    section: "Tools:",
    details:
      "Git, Terraform, Docker, Kubernetes, Docker Swarm, Helm, Kafka, Kafka Connect, RabbitMQ, Grafana, Nginx, Traefik, Protobuf, Avro",
  },
  {
    section: "Cloud and DevOps:",
    details: "AWS, GCP, Firebase, Vercel, GitHub Actions, GitLab CI",
  },
];

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details:
      "Chulalongkorn University, TH. 2020-Present (Expected Diploma: 2023)",
  },
];

export const workExperiences = [
  {
    position: "Data Platform Engineer (Intern)",
    company: "Agoda",
    url: "https://careersatagoda.com",
    years: ["Jun 2022", "Jul 2022"],
    details: [
      "Developed a distributed, fault-tolerant Kafka Connect cluster for ingesting data from Kafka to ElasticSearch, up to 60k messages/min.",
      "Pioneered the use of Kafka Connect in Agoda Data Platform team, and migrated part of the data ingestion pipeline from Apache NiFi to Kafka Connect.",
      'Developed a monitoring system for Connect nodes using custom time-series database "WhiteFalcon" and Grafana.',
      "Won 1st place in Agoda Intern Pitch Competition with 10K baht grand prize.",
    ],
  },
  {
    position: "Software Engineer",
    company: "AltoTech",
    url: "https://altotech.net",
    years: ["Nov 2021", "Feb 2022"],
    details: [
      "Developed a data pipeline to ingest data from more than 30+ edge devices using Kafka and Kafka Connect.",
      "Developed a web API for querying time-series data from CrateDB, as well as real-time video feed API up to 30 FPS using Django and Socket.IO.",
      "Developed a CI/CD pipeline using GitHub Actions to deploy the API and data pipeline to on-premise servers.",
    ],
  },
  {
    position: "Junior Software Engineer (Intern)",
    company: "Cleverse",
    url: "https://cleverse.com",
    years: ["Jun 2021", "Jul 2021"],
    details: [
      "Developed backend microservices to fetch data from up to 100k smart contracts with Go, go-ethereum, Redis, and PostgreSQL.",
      "Designed a microservice architecture to support real-time data processing pipeline using Kubernetes, Google Cloud Pub/Sub, and Protobuf.",
      "Developed and maintained Docker containers using GitOps with ArgoCD.",
    ],
  },
  {
    position: "Software Engineer, Backend (Intern)",
    company: "Wongnai Media (now LINEMAN Wongnai)",
    url: "https://wongnai.com/about",
    years: ["Jun 2020", "Jul 2020"],
    details: [
      "Developed and maintained Java APIs for core backend services.",
      "Developed and maintained a new service for sending monthly sales reports to restaurant owners using LINE Messaging API and Spring Framework.",
    ],
  },
];

export const extracurricularActivities = [
  {
    position: "Senior Software Engineer, Co-Founder",
    company: "CU Get Reg",
    url: "https://cugetreg.com",
    years: ["Feb 2021", "Present"],
    details: [
      "A one-stop-service planning tool for the university's course registration, used by more than 30k students in Chula and up to 5k users/day during registration season.",
      "Developed and maintained multiple backends services using NestJS, GraphQL and MongoDB.",
      "Designed database models and indices for optimal query performance.",
      "Developed a course scraper to fetch up to 50k courses from Reg Chula's course portal, and store in MongoDB.",
      "Helped mentor junior engineers on the backend and data team.",
    ],
  },
  {
    position: "President",
    company: "Thinc. (Thailand Incubator)",
    url: "https://thinc.in.th",
    years: ["Jun 2020", "May 2022"],
    details: [
      "A student run organization which aims to motivate student to bring technology to the community and make impact to the society.",
      'Hosted club activities, events, and workshop sessions for students interested in software development. Events include "Thinc. First Act", "10 Days Project", "Intro to Git", "First Step towards Data Science", "Intro to Web3", and more.',
      "Oversee multiple projects and engineering teams.",
      "Mentored first-time engineers to launch production-grade products.",
    ],
  },
  {
    position: "Technical Director",
    company: "Student Government of Chulalongkorn University (SGCU)",
    url: "",
    years: ["Jun 2020", "May 2022"],
    details: [
      "Led a team of 20 developers to develop more than 6 software development projects using Scrum framework.",
      "Gathered requirements from stakeholders and designed software architecture for each project.",
    ],
  },
  {
    position: "Director of Information Technology",
    company: "Engineering Student Committee (ESC)",
    url: "https://esc.eng.chula.ac.th",
    years: ["Jun 2020", "May 2021"],
    details: [
      "Led a team of developers to develop websites to support engineering students and clubs.",
      "Maintained organization website and servers.",
    ],
  },
];

export const projects = [
  {
    name: "CHU Magazine",
    details:
      "A blog platform for Editorial Department, Student Government of Chulalongkorn University. Made with Directus CMS, Next.js, NestJS.",
    url: "chu.in.th",
  },
  {
    name: "Sports Center Booking",
    details:
      "Online court booking system for sports center at Chulalongkorn University. Made with React, NestJS, and MongoDB.",
    url: "book.cusc.chula.ac.th",
  },
  {
    name: "Intania Election",
    details:
      "Online election system for Engineering Student Committee. Used for electing student representatives and event managers.",
    url: "elect.esc.eng.chula.ac.th",
  },
  {
    name: "Intania Clubs",
    details:
      "A collection of engineering student clubs. Made with Gatsby's static site generation.",
    url: "esc.eng.chula.ac.th/clubs",
  },
  {
    name: "Intania Orientation",
    details:
      "A collection of resources for freshmen, including first-year course details, advisor contacts, and more.",
    url: "esc.eng.chula.ac.th/or65",
  },
  {
    name: "20th Larngear Camp ",
    details:
      "Registration system for 20th Larngear Camp, a 4-day academic camp for freshmen. Used by more than 2k students each year. Made with React, MUI, Express",
    url: "larngear.in.th",
  },
  {
    name: "Terraform Midterm Project for SOFT DEF SYS course",
    details:
      "Terraform modules for deploying a WordPress app on a new VPC, connected to a MariaDB EC2 instance on a private subnet, and configured to use S3 for media offload.",
    url: "github.com/bombnp/soft-def-sys-midterm-terraform",
  },
  {
    name: "Chulachana (CU Check In)",
    details:
      "A contact tracing app for Chulalongkorn University, able to support up to 8k users. Inspired from Thaichana. Made with Kubernetes Next.js, InfluxDB, and Grafana.",
    url: "github.com/isd-sgcu/chulachana-core",
  },
  {
    name: "Rubnongkaomai",
    details:
      "Freshmen orientation registration website for Student Government of Chulalongkorn University. Designed to withstand up to 6K concurrent users with monitoring systems using Kubernetes, Prometheus, InfluxDB, and Grafana.",
    url: "github.com/orgs/thinc-org/teams/rnkm63-devs/repositories",
  },
  {
    name: "Voice of Chula",
    details:
      "Social media platform for encouraging discussions related to problems in Chulalongkorn University. Made with Next.js and NestJS.",
    url: "gitlab.com/voice-of-chula/backend/backend-core",
  },
  {
    name: "Math Grader CMS",
    details:
      "Content management system for managing math problems and grading using PayloadCMS. Made with ❤️ for my partner.",
    url: "github.com/math-p-earth/math-grader-cms",
  },
];

export const interests = [
  "Areas : Software Engineering, Data Engineering, Blockchain, DevOps",
];
