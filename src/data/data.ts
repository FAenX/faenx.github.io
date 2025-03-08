import python from "../assets/images/brands/python.png"
import node from "../assets/images/brands/node.svg"
import react from "../assets/images/brands/react.svg"
import Linux from "../assets/images/brands/ubuntu.png"
import Mongo from "../assets/images/brands/mongo.svg"
import DO from "../assets/images/brands/digital_ocean.svg"
import Docker from "../assets/images/brands/docker.svg"
import Git from "../assets/images/brands/git.png"
import Win from "../assets/images/brands/windows-svgrepo-com.svg"
import Android from "../assets/images/brands/android-svgrepo-com.svg"
import JS from "../assets/images/brands/js-svgrepo-com.svg"
import TS from "../assets/images/brands/typescript-svgrepo-com.svg"
import SQL from "../assets/images/brands/sql-svgrepo-com.svg"
import pgsql from "../assets/images/brands/pgsql-svgrepo-com.svg"
import mysql from "../assets/images/brands/mysql-svgrepo-com.svg"
import mssql from "../assets/images/brands/database-svgrepo-com.svg"
import aws from "../assets/images/brands/aws-svgrepo-com.svg"
import gcp from "../assets/images/brands/gcp-opened-svgrepo-com.svg"
import azure from "../assets/images/brands/azure-svgrepo-com.svg"
import spark from "../assets/images/brands/apache-spark-logo.png"
import flask from "../assets/images/brands/flask-logo.png"
import django from "../assets/images/brands/django-logo.png"
import k8s from "../assets/images/brands/k8s1.webp"




export const info = {
    name: "Emmanuel Davidson",
    about: "Certified AWS Solutions Architect | Software Engineer | Data Engineer | Database Admin | Devops engineer | Scala | Python | Javascript | NodeJs | ReactJs | Typescript | Linux sysadmin",
    location: "Global",
    image: "https://avatars.githubusercontent.com/u/1015040?v=4",
    email: "kipronofb@gmail.com",
    period: " > 5 years",
    linkedin: "https://www.linkedin.com/in/emmanuel-davidson/",
    links: [
        {
            href: "https://github.com/FAenX",
            name: "Github"
        },
        {
            href: "https://www.linkedin.com/in/emmanuel-davidson/",
            name: "LinkedIn"
        }
    ]
}

export const experiences = [
    {
        label: "One World Analytics",
        title: "Lead Data Engineer / Software Engineer",
        date: "2020 - Present",
        id: "one-world-analytics",
        description: [
            "Lead the design and implementation of scalable data architectures and cloud solutions for handling billions of rows of data",
            "Architect and build ETL/ELT data pipelines using Apache Spark, Airflow, and various AWS services",
            "Design and implement expert recommendation systems using AI technologies and Neo4j graph database",
            "Create distributed event streaming platforms with Apache Kafka for real-time data processing",
            "Implement DevOps practices including containerization with Docker and orchestration with Kubernetes",
            "Develop disaster recovery solutions for critical data infrastructure",
            "Build and maintain automated CI/CD pipelines for continuous deployment",
            "Provide technical leadership and mentorship to engineering teams"
        ]
    },
    {
        label: "TheJitu",
        title: "DevOps & System Administrator",
        date: "2020 - 2022",
        id: "the-jitu",
        description: [
            "Managed cloud infrastructure and DevOps processes for a growing software development company",
            "Implemented containerization strategies using Docker and orchestration with Kubernetes",
            "Designed and maintained CI/CD pipelines for automated testing and deployment",
            "Administered Linux-based systems and ensured high availability of production services",
            "Optimized performance and security of cloud-hosted applications",
            "Collaborated with development teams to streamline deployment processes",
            "Monitored and maintained cloud resources across AWS and other platforms"
        ]
    },
    {
        label: "Touch Inspiration",
        title: "Software Engineer",
        date: "2019 - 2020",
        id: "touch-inspiration",
        description: [
            "Led backend development and managed Digital Ocean cloud infrastructure",
            "Designed and developed several backend applications for fintech and telemedicine domains",
            "Implemented and optimized database solutions using MongoDB and MySQL",
            "Created robust APIs using TypeScript, Node.js, and Python",
            "Established DevOps pipelines for efficient application deployment",
            "Collaborated with cross-functional teams to deliver high-performance software solutions",
            "Architected systems for high availability and scalability in production environments"
        ]
    },
    
]

interface Education {
  label: string;
  description: string;
  link: string;
  date: string;
  highlights?: string[];
}

export const education: Education[] = [
    {
        label: "University of Nairobi",
        description: "Post Graduate Diploma, Project planning and management",
        link: "",
        date: "2019 - 2020",
        highlights: [
            "Specialized in agile project management methodologies",
        ]
    },
    {
        label: "University of Eldoret",
        description: "Bachelors of Science in biochemistry",
        link: "",
        date: "2012 - 2016",
        highlights: [
            "Graduated with honors",
        ]
    },
]


export const skills = [
    {
        name: "Linux",
        image: Linux
    },
    {
        name: "Windows",
        image: Win
    },
    {
        name: "Android",
        image: Android
    },
    {
        name: "Javascript",
        image: JS
    
    },
    {
        name: "Typescript",
        image: TS
    },
    {
        name: "Python",
        image: python
    },
    {
        name: "SQL",
        image: SQL
    },
   
    {
        name: "MongoDB",
        image: Mongo
    },
    {
        name: "PostgreSQL",
        image: pgsql
    },
    {
        name: "MySQL",
        image: mysql
    },
    {
        name: "MSSQL",
        image: mssql
    },

    {
        name: "AWS",
        image: aws
    },
    {
        name: "GCP",
        image: gcp
    },
    {
        name: "Azure",
        image: azure
    },
    {
        name: "Digital Ocean",
        image: DO
    },

    {
        name: "React",
        image: react
    },
    {
        name: "Django",
        image: django
    },
    {
        name: "Flask",
        image: flask
    },
    {
        name: "NodeJs",
        image: node
    },

    {
        name: "Git",
        image: Git
    },
    {
        name: "Docker",
        image: Docker
    },
    {
        name: "Apache Spark",
        image: spark
    },
    {
        name: "Kubernetes",
        image: k8s
    }
]

export const professionalSummary = {
  title: "Professional Summary",
  description: "Seasoned Software Engineer, Cloud Architect, and Data Engineer with expertise in building scalable data systems and cloud applications. Certified AWS Solutions Architect with a passion for designing efficient, resilient architectures and implementing DevOps best practices. Experienced in handling big data technologies like Apache Spark, Kafka, and Airflow, with a proven track record in database administration and optimization."
};

export const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Professional certification for designing distributed systems on AWS"
  },
];

export const projects = [
  {
    id: "project2",
    title: "Rusha Spark",
    category: "Big Data",
    description: "Optimized Apache Spark configuration for big data processing and analytics",
    image: "/images/projects/spark-analytics.jpg",
    technologies: ["Apache Spark", "Scala", "HDFS", "Data Processing"],
    githubUrl: "https://github.com/Rusha-Corp/rusha_spark",
    liveUrl: ""
  },
  {
    id: "project3",
    title: "Rusha Hive Metastore",
    category: "Data Engineering",
    description: "Managed Hive metastore for structured data cataloging and SQL analytics",
    image: "/images/projects/data-warehouse.jpg",
    technologies: ["Hive", "SQL", "Data Warehousing", "Shell"],
    githubUrl: "https://github.com/Rusha-Corp/rusha_hive_metastore",
    liveUrl: ""
  },
  
];



