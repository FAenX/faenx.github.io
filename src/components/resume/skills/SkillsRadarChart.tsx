import { useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';


const skillCategories = [
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "GCP", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Linux", level: 90 },
    ]
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Apache Spark", level: 85 },
      { name: "Kafka", level: 80 },
      { name: "Airflow", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Databases", level: 90 },
      { name: "Data Modeling", level: 85 },
      { name: "ETL Pipelines", level: 85 },
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Scala", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "React", level: 80 },
      { name: "APIs", level: 85 },
    ]
  }
];

export default function SkillsRadarChart() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy previous chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Get all unique skill names across categories
        const allSkills = skillCategories.flatMap(cat => cat.skills.map(skill => skill.name));
        const uniqueSkills = Array.from(new Set(allSkills));
        
        // Prepare data for each category
        const datasets = skillCategories.map((category, index) => {
          const gradientColors = [
            ['rgba(33,150,243,0.8)', 'rgba(33,203,243,0.3)'],
            ['rgba(124,77,255,0.8)', 'rgba(124,77,255,0.3)'],
            ['rgba(0,200,83,0.8)', 'rgba(0,200,83,0.3)'],
          ];
          
          const data = uniqueSkills.map(skillName => {
            const skill = category.skills.find(s => s.name === skillName);
            return skill ? skill.level : 0;
          });
          
          return {
            label: category.category,
            data,
            fill: true,
            backgroundColor: gradientColors[index % gradientColors.length][1],
            borderColor: gradientColors[index % gradientColors.length][0],
            pointBackgroundColor: gradientColors[index % gradientColors.length][0],
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: gradientColors[index % gradientColors.length][0],
            borderWidth: 2,
          };
        });
        
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: uniqueSkills,
            datasets,
          },
          options: {
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 20,
                  showLabelBackdrop: false,
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                },
                pointLabels: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                  font: {
                    size: 12,
                    weight: 'bold',
                  },
                },
                angleLines: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                },
                grid: {
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                },
              },
            },
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  padding: 20,
                  boxWidth: 15,
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                  font: {
                    size: 13,
                  },
                },
              },
              tooltip: {
                backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                titleColor: isDarkMode ? '#64ffda' : '#2196F3',
                bodyColor: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                borderWidth: 1,
                padding: 10,
                displayColors: true,
                usePointStyle: true,
              },
            },
            elements: {
              line: {
                tension: 0.1,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [isDarkMode]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box 
        sx={{ 
          height: { xs: 250, sm: 300, md: 400 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '90%', md: '800px' },
          mx: 'auto',
          p: { xs: 1, sm: 2 },
          borderRadius: 2,
          background: isDarkMode ? 'rgba(17, 34, 64, 0.4)' : 'rgba(240, 247, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
            : '0 4px 20px rgba(0, 0, 0, 0.1)',
          mb: 4,
          overflow: 'hidden',
        }}
      >
        <Typography 
          variant="h6" 
          align="center"
          sx={{ 
            mb: 3,
            color: isDarkMode ? '#64ffda' : '#2196F3',
            fontWeight: 600,
          }}
        >
          Technical Skills Breakdown
        </Typography>
        <Box sx={{ 
          height: { xs: 210, sm: 250, md: 330 }, 
          position: 'relative',
          mt: { xs: 1, sm: 2 }
        }}>
          <canvas ref={chartRef} />
        </Box>
      </Box>
    </motion.div>
  );
} 