import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bahja Moncef",
    stack: ["Software Engineer", "Full Stack Developer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications,Let's connect and create something amazing together!"
}



const ProjectInfo = [
    
    {
        title: "Shopping Application",
        desc: "I designed and developed an online shopping application with features such as product management, advanced search, a secure cart and payment system, and a modern, responsive user interface, using React, PHP, and SQL, with a strong focus on performance, security, and user experience, which helped me strengthen my Full Stack development and software project management skills.",
        image: "",
        live: false,
        technologies: ["JavaScript", "Bootstrap", "AJAX", "PHP", "MySQL", "HTML"],
        link: "",
        github: "https://drive.google.com/file/d/1MOro9qnmBV0gVM4UD4CpmbyG2JJen39N/view"
    },
    {
        title: "e-banking application.",
        desc: "I designed a user interface using Angular and Bootstrap, and implemented a REST API with Spring Boot to ensure secure communication between the frontend and backend. The application includes a system for instant transfers and payments, along with a push notification feature to keep users informed about the status of their transactions. I also created a secure database to store user and transaction data, while ensuring portability and consistency of environments by using Docker for application containerization. This approach optimized performance, security, and scalability, making the application reliable and efficient.",
        image: "",
        live: false,
        technologies: ["Angular","Bootstrap", "Springboot" , "REST API", "Docker", "Microservices"],
        link: "",
        github: "https://github.com/MoncefBahja/microservice"
    },
    {
        title: "Travel Application front-end",
        desc: "The front-end of my application is built with React and Bootstrap to provide a modern, responsive, and user-friendly interface. Users can plan their itineraries, perform advanced searches, and enjoy seamless interaction through dynamic components. I implemented techniques like lazy loading and code splitting to optimize performance and enhance the user experience",
        live: false,
        technologies: ["React", "Bootstrap", "React Router ","Axios"],
       link: "", 
        github: "https://github.com/MoncefBahja/Travel-FrontEnd-Reactjs"
    },
    {
        title: "Travel Application Back-end",
        desc: "For the back-end, I used Spring Boot to create a secure REST API that manages itineraries, bookings, and user profiles. Performance is optimized with caching and DTOs, and JavaMail is integrated for sending notifications to users. The relational database, designed with SQL, is secure and ensures reliable data management",
        live: false,
        technologies: ["Spring Boot", "Spring Security", "Microservices", "API REST","SQL"],
       link: "", 
        github: "https://github.com/MoncefBahja/Travel-BackEnd-SpringBoot"
    },
    
    
]

const CertificatInfo = [
    {
        role: "Advanced React",
        company: "Meta",
        date: "September , 2024 ",
        link: "https://www.coursera.org/account/accomplishments/verify/90XR4VGIBA6Y",
    },
    {
        role: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
        company: "Google Cloud",
        date: "October , 2024",
        link: "https://www.coursera.org/account/accomplishments/verify/LFFASTAQE2M6",
    },
     {
        role: "Code Generation and Optimization Using IBM Granite",
        company: "IBM",
        date: "October , 2024",
        link: "https://www.credly.com/badges/cf0d1805-2367-4a71-853c-c19b5149d10f/linked_in_profile",
    },
     {
        role: "Data Classification and Summarization Using IBM Granite",
        company: "IBM",
        date: "October , 2024",
        link: "http://credly.com/badges/36b514e6-a3eb-4ccb-bafd-738a41cf5f40/linked_in_profile",
    }
]

const SkillInfo = [

      {
        title: "Backend",
        skills: ["SpringBoot", "Hibernate", "Laravel"]
    },
    {
        title: "Frontend",
        skills: ["Next js", "React JS", "Angular", "Tailwind CSS", "Bootstrap"]
    },
  
    {
        title: "Languages",
        skills: ["java", "JavaScript", "TypeScript", "Python", "php", "c", "go"]

    },
    {
        title: "DEVOPS",
        skills: ["Git", "GitHub", "Docker", "Kubernetes", "GitLab", "Maven", "Postman", "Swagger"]
    } ,


 {
        title: "DATABASES",
        skills: ["MySQL", "SQL Server", "PostgresSQL", "oracle  DB", "MongoDB", "InfluxDB", "Elasticsearch"]
    } ,
     {
        title: "WEB SERVICES ",
        skills: ["RestFull", "Soap", "graphql", "Grpc"]
    }
,   {
        title: "PROJECT MANAGEMENT ",
        skills: ["Scrum", "jira"]
    }

]
const socialLinks = [
    { link: "https://github.com/MoncefBahja", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/moncef-bahja-315328265/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/bahjamoncef/", icon: IconBrandInstagram }, 
];


const ExperienceInfo = [
    {
        role: "INTERNSHIP : Java Developer ",
        company: "Marketing confort",
        date: " 2025 - 6 months",
        image: "MJ.jpg",
        desc: "Design and implementation of microservices-based solutions for optimizing internal processes of an IT organization.",
        skills: ["Java" , "React/Next.js", "Spring (Boot, Data, Security, Cloud)"," Hibernate/JPA", "PostgreSQL", "Jira", "Swagger", "Postman",
"Nexus"," Amazon S3", "Maven", "Kubernetes", "GitLab CI/CD"]
    },
     {
        role: "INTERNSHIP : Java Developer ",
        company: "Xhub",
        date: " 2023 - Present",
            image: "xhub_logo.jpg",
        desc: "Design and implementation of an e-commerce platform.",
        skills: ["PHP (Laravel)", "JavaScript (React.js)", "MySQL", "Git (GitHub)", "Postman", "Docker", "Jira"]
    },
     {
        role: "INTERNSHIP : Java Developer ",
        company: "Atos",
        date: " 2023 - Present",
            image: "atos_logo.jpg",

        desc: "Development and maintenance of a healthcare services management application using a microservices architecture.",
        skills: ["Java 11", "React/Redux", "Spring (Boot, MVC, Data, Security)", "Hibernate/JPA", "PostgreSQL", "Swagger", "Kafka", "Maven",
"Kubernetes", "GitLab CI/CD"]
    },
     {
        role: "INTERNSHIP : Java Developer ",
        company: "Agence De Voyage Qafilat Tayba",
        date: " 2023 - Present",
            image: "f.png",
        desc: "working on the development of an application for personnel management.",
        skills: ["php", "React JS", "SQL Server", "Visual Studio", "GitHub"]
    },
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs,CertificatInfo };