import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";

// Resume data for the terminal
const resumeData = {
  name: "Emmanuel Davidson",
  about: "I am a seasoned Software Engineer, Cloud Architect, and Data Engineer with a deep passion for designing scalable, efficient, and cost-effective solutions. My expertise spans cloud computing, container orchestration, DevOps, and big data processing.",
  skills: {
    cloud: ["AWS (S3, Glue, CloudFormation, SQS)", "GCP (GKE, Vertex AI)", "Azure (Functions, DevOps)"],
    devops: ["Kubernetes", "Docker", "Helm", "Terraform", "Ansible", "Airflow", "Cloud Cost Optimization"],
    bigdata: ["Apache Spark", "Delta Lake", "AWS Glue", "MLOps (Databricks, Custom AI Platforms)"],
    development: ["Python", "Node.js", "Java", "RESTful API Design", "Data Pipeline Orchestration"],
    databases: ["AWS Redshift", "Delta Lake", "Snowflake", "Data Quality & Observability"]
  },
  experience: [
    {
      company: "One World Analytics",
      role: "Lead Programmer & Big Data Engineer",
      period: "August 2023 – Present",
      achievements: [
        "Designed and migrated a biodiversity analytics platform to GKE Autopilot",
        "Developed Spark-based pipelines to mine biodiversity data",
        "Deployed AI-powered reporting systems for government agencies",
        "Led the successful pitch for biodiversity monitoring solutions"
      ]
    },
    {
      company: "The Jitu",
      role: "Software Engineer III",
      period: "June 2021 – June 2023",
      achievements: [
        "Architected a data validation platform using AWS Glue & Great Expectations",
        "Maintained an Azure-based feedback tool with Power BI integration",
        "Implemented CI/CD pipelines and automated deployments"
      ]
    }
  ],
  education: [
    "Post Graduate Diploma in Project Planning & Management – University of Nairobi (2018-2019)",
    "BSc in Biochemistry – University of Eldoret (2013-2016)"
  ],
  certifications: [
    "AWS Certified Solutions Architect (Associate)",
    "Google Data Analytics Professional Certificate",
    "Certified Kubernetes Administrator (CKA) (In Progress)"
  ],
  publications: [
    "Understanding Kubernetes StatefulSets",
    "Building a Data Warehouse with Delta Lake",
    "Cloud Cost Optimization Strategies",
    "Structuring REST APIs for Hierarchical Data",
    "Deploying AI-Powered Research Agents"
  ],
  projects: [
    "VS Code Extension for Infrastructure Deployment",
    "Automated Report Generation with AI & R"
  ],
  contact: {
    email: "kipronofb@gmail.com",
    linkedin: "linkedin.com/in/emmanuel-davidson",
    github: "github.com/FAenX",
    medium: "medium.com/@emmanueldavidson"
  }
};

// Define command types
type CommandWithoutArgs = () => string[];
type CommandWithArgs = (args: string) => string[];

export default function TechTerminal() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    `Welcome to ${resumeData.name}'s terminal!`,
    `Last login: ${new Date().toLocaleString()}`,
    "Type 'help' for available commands.",
    "",
    "$ "
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Available commands
  const commands: Record<string, CommandWithoutArgs | CommandWithArgs> = {
    help: () => {
      return [
        "Available commands:",
        "  help          - Show this help message",
        "  clear         - Clear the terminal",
        "  about         - Display basic information",
        "  skills        - List technical skills",
        "  experience    - Show professional experience",
        "  education     - Show education background",
        "  certifications- List certifications",
        "  publications  - Show published articles",
        "  projects      - List side projects",
        "  contact       - Show contact information",
        "  ls            - List all resume sections",
        "  cat <section> - View content of a specific section"
      ];
    },
    clear: () => {
      setTerminalOutput([]);
      return [];
    },
    about: () => {
      return [resumeData.about];
    },
    skills: () => {
      return [
        "Technical Skills:",
        "",
        "Cloud & DevOps:",
        ...resumeData.skills.cloud.map(skill => `  - ${skill}`),
        ...resumeData.skills.devops.map(skill => `  - ${skill}`),
        "",
        "Big Data & AI/ML:",
        ...resumeData.skills.bigdata.map(skill => `  - ${skill}`),
        "",
        "Software Development & APIs:",
        ...resumeData.skills.development.map(skill => `  - ${skill}`),
        "",
        "Data Engineering & Analytics:",
        ...resumeData.skills.databases.map(skill => `  - ${skill}`)
      ];
    },
    experience: () => {
      const output: string[] = ["Professional Experience:"];
      
      resumeData.experience.forEach(exp => {
        output.push("");
        output.push(`${exp.company} | ${exp.role}`);
        output.push(`${exp.period}`);
        output.push("Key Achievements:");
        exp.achievements.forEach(achievement => {
          output.push(`  - ${achievement}`);
        });
      });
      
      return output;
    },
    education: () => {
      return [
        "Education:",
        "",
        ...resumeData.education.map(edu => `- ${edu}`)
      ];
    },
    certifications: () => {
      return [
        "Certifications:",
        "",
        ...resumeData.certifications.map(cert => `- ${cert}`)
      ];
    },
    publications: () => {
      return [
        "Publications & Thought Leadership:",
        "",
        ...resumeData.publications.map(pub => `- ${pub}`)
      ];
    },
    projects: () => {
      return [
        "Open-Source & Side Projects:",
        "",
        ...resumeData.projects.map(proj => `- ${proj}`)
      ];
    },
    contact: () => {
      return [
        "Contact Information:",
        "",
        `Email: ${resumeData.contact.email}`,
        `LinkedIn: ${resumeData.contact.linkedin}`,
        `GitHub: ${resumeData.contact.github}`,
        `Medium: ${resumeData.contact.medium}`
      ];
    },
    ls: () => {
      return [
        "Resume Sections:",
        "",
        "about.txt        skills.md        experience.json",
        "education.txt    certifications.md    publications.md",
        "projects.txt     contact.json"
      ];
    },
    cat: (section: string) => {
      // First check if section is provided
      if (!section) {
        return ["Error: Please specify a file to read"];
      }
      
      switch (section) {
        case "about.txt":
          return (commands.about as CommandWithoutArgs)();
        case "skills.md":
          return (commands.skills as CommandWithoutArgs)();
        case "experience.json":
          return (commands.experience as CommandWithoutArgs)();
        case "education.txt":
          return (commands.education as CommandWithoutArgs)();
        case "certifications.md":
          return (commands.certifications as CommandWithoutArgs)();
        case "publications.md":
          return (commands.publications as CommandWithoutArgs)();
        case "projects.txt":
          return (commands.projects as CommandWithoutArgs)();
        case "contact.json":
          return (commands.contact as CommandWithoutArgs)();
        default:
          return [`cat: ${section}: No such file or directory`];
      }
    },
    whoami: () => {
      return [resumeData.name];
    },
    pwd: () => {
      return [`/home/${resumeData.name.split(' ')[0].toLowerCase()}/resume`];
    },
    date: () => {
      return [new Date().toLocaleString()];
    }
  };
  
  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);
  
  // Handle command execution
  const executeCommand = (input: string) => {
    const parts = input.trim().split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');
    
    let output: string[] = [];
    
    if (input.trim() !== "") {
      setCommandHistory(prev => [input, ...prev]);
    }
    
    if (cmd === "clear") {
      // return commands.clear();
    } else if (cmd === "cat") {
      output = [...output, ...(commands.cat as CommandWithArgs)(args)];
    } else if (commands[cmd as keyof typeof commands]) {
      // Type assertion to tell TypeScript this is a no-args command
      output = [...output, ...(commands[cmd as keyof typeof commands] as CommandWithoutArgs)()];
    } else {
      output.push(`Command not found: ${cmd}. Type 'help' to see available commands.`);
    }
    
    output.push("");
    output.push("$ ");
    
    setTerminalOutput(prev => [...prev.slice(0, prev.length - 1), ...output]);
    setCurrentCommand("");
  };
  
  // Handle keyboard input
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(currentCommand);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand("");
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion
      if (currentCommand.startsWith("cat ")) {
        const partial = currentCommand.substring(4).trim();
        const files = ["about.txt", "skills.md", "experience.json", "education.txt", 
                      "certifications.md", "publications.md", "projects.txt", "contact.json"];
        
        const matches = files.filter(file => file.startsWith(partial));
        if (matches.length === 1) {
          setCurrentCommand(`cat ${matches[0]}`);
        }
      }
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Paper 
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: 700 },
          mx: 'auto',
          borderRadius: 2,
          overflow: 'hidden',
          background: isDarkMode ? '#1E1E1E' : '#F7F7F7',
          boxShadow: isDarkMode 
            ? '0 20px 80px -10px rgba(0, 0, 0, 0.5)' 
            : '0 20px 80px -10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            px: 2,
            py: 1,
            background: isDarkMode ? '#333333' : '#DDDDDD',
            borderBottom: `1px solid ${isDarkMode ? '#444444' : '#CCCCCC'}`,
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Box 
              component="span" 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                background: '#FF5F56',
                mr: 1,
              }} 
            />
            <Box 
              component="span" 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                background: '#FFBD2E',
                mr: 1,
              }} 
            />
            <Box 
              component="span" 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                background: '#27C93F',
              }} 
            />
          </Box>
          <Typography 
            variant="body2"
            sx={{ 
              fontFamily: 'monospace',
              color: isDarkMode ? '#CCC' : '#555',
            }}
          >
            resume — {resumeData.name} — bash
          </Typography>
        </Box>
        
        <Box 
          ref={terminalRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          sx={{
            p: { xs: 2, sm: 3 },
            height: { xs: 300, sm: 400 },
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            lineHeight: 1.7,
            color: isDarkMode ? '#64ffda' : '#333',
            background: isDarkMode ? '#0A192F' : '#FFFFFF',
            outline: 'none', // Remove focus outline
            cursor: 'text',
            userSelect: 'none' // Prevent text selection for better UX
          }}
        >
          <Typography 
            variant="body2" 
            component="div"
            sx={{ 
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              color: isDarkMode ? '#E6E6E6' : '#333333',
            }}
          >
            {terminalOutput.map((line, index) => (
              <div key={index}>
                {line}
                {index === terminalOutput.length - 1 && (
                  <span style={{ display: 'inline' }}>
                    {currentCommand}
                    <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
                  </span>
                )}
              </div>
            ))}
          </Typography>
        </Box>
      </Paper>
      
      <Box 
        sx={{ 
          mt: 2, 
          textAlign: 'center',
          color: isDarkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
          fontSize: '0.8rem',
          fontFamily: 'monospace'
        }}
      >
        Click the terminal and type 'help' to explore my resume
      </Box>
    </motion.div>
  );
} 