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
        desc: "I have completed an advanced React course, where I gained proficiency in JSX, React components, and advanced hooks. I learned how to efficiently render lists and forms, manage shared state with React Context, and fetch data from remote servers. I also built custom hooks, explored component composition, and implemented advanced patterns like Higher Order Components and Render Props. Additionally, I gained experience in testing React components and creating a portfolio application using React, HTML, CSS, and JavaScript",
        link: "https://www.coursera.org/account/accomplishments/verify/90XR4VGIBA6Y",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
        company: "Google Cloud",
        date: "October , 2024",
        desc: " I earned a certificate in microservices architecture, where I learned to develop Java applications with Spring Boot and Spring Cloud on Google Cloud, using services like Pub/Sub, Cloud SQL, and Spanner for data management and scalability. The course also covered configuration, tracing, and debugging Spring applications with Google Cloud Observability.",
        link: "https://www.coursera.org/account/accomplishments/verify/LFFASTAQE2M6",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]

const SkillInfo = [

      {
        title: "Backend",
        skills: ["Spring Boot", "Spring Data", "Spring Security", "Spring Cloud", "Hibernate JPA", "JEE", "Laravel"]
    },
    {
        title: "Frontend",
        skills: ["NextJS", "ReactJS", "Angular", "Tailwind CSS", "Bootstrap"]
    },
  
    {
        title: "Languages",
        skills: ["java", "JavaScript", "TypeScript", "Python", "php", "c", "Golang"]

    },
    {
        title: "DEVOPS",
        skills: ["Git", "GitHub", "Docker", "Kubernetes", "JUnit", "GitLab (CI/CD)", "Maven", "Postman", "Swagger"]
    } ,


 {
        title: "DATABASES",
        skills: ["MySQL", "SQL Server", "PostgreSQL", "Oracle Database", "MongoDB", "InfluxDB", "Elasticsearch"]
    } ,
     {
        title: "WEB SERVICES ",
        skills: ["RESTful", "SOAP", "GraphQL", "gRPC"]
    }
,   {
        title: "PROJECT MANAGEMENT ",
        skills: ["Scrum Agile", "Jira"]
    }

]
const socialLinks = [
    { link: "https://github.com/MoncefBahja", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/moncef-bahja-315328265/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/bahjamoncef/", icon: IconBrandInstagram }, 
   /**  { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode }*/
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