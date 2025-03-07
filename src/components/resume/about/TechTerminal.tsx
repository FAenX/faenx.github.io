import { useState, useEffect } from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { info, professionalSummary } from "../../../data/data";

export default function TechTerminal() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);
  
  const terminalCommands = [
    { command: "whoami", output: info.name },
    { command: "cat about.txt", output: info.about },
    { command: "ls skills", output: "Frontend  Backend  DevOps  Cloud  Databases" },
    { command: "cat experience.md", output: professionalSummary.description },
    { command: "pwd", output: `/home/${info.name.split(' ')[0].toLowerCase()}/resume` },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (commandIndex < terminalCommands.length) {
      const command = terminalCommands[commandIndex].command;
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= command.length) {
          setText(command.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          
          // After typing command, wait and show output
          setTimeout(() => {
            const output = terminalCommands[commandIndex].output;
            setText(prev => `${prev}\n${output}`);
            
            // Move to next command after a delay
            setTimeout(() => {
              setText(prev => `${prev}\n\n$ `);
              setCommandIndex(prev => prev + 1);
            }, 1500);
          }, 500);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [commandIndex]);
  
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
            resume — {info.name} — bash
          </Typography>
        </Box>
        
        <Box 
          sx={{
            p: { xs: 2, sm: 3 },
            height: { xs: 250, sm: 350 },
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            lineHeight: 1.7,
            color: isDarkMode ? '#64ffda' : '#333',
            background: isDarkMode ? '#0A192F' : '#FFFFFF',
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
            Welcome to {info.name}'s terminal!
            Last login: {new Date().toLocaleString()}
            
            $ {text}{showCursor ? '|' : ' '}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
} 