import { Box, Typography, Grid, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SectionHeader } from '../shared/SectionHeader';
import { Competencies } from '../shared/Competencies';

const About = () => {
  const theme = useTheme();
  
  return (
    <Box id="about" sx={{ py: 8 }}>
      <SectionHeader 
        title="About Me" 
        subtitle="Software Engineer · Cloud Architect · Data Engineer" 
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${theme.palette.mode === 'dark' ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm18.34 20.83l2.83-2.83 1.41 1.41-2.83 2.83h-1.41v-1.41zm0-17.76l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zm-9.17 0l2.83-2.83 1.41 1.41-2.83 2.83h-1.41V3.07zm-9.17 0l2.83-2.83 1.41 1.41-2.83 2.83H0V3.07zM18.34 0l2.83 2.83-1.41 1.41L16.93 1.41V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83V0h1.41zm-27.51 18.34l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zm9.17 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41zM0 36.1l2.83 2.83-1.41 1.41L0 38.59v-2.83l1.41 1.41L0 38.59V36.1zm36.1 0l2.83 2.83-1.41 1.41-2.83-2.83v-1.41h1.41z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: -1
        }}
      />
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={5}>
          <Avatar
            src="/path-to-your-image.jpg" 
            alt="Emmanuel Davidson"
            sx={{ 
              width: '100%', 
              height: 'auto', 
              aspectRatio: '1/1',
              maxWidth: 400,
              mx: 'auto',
              boxShadow: 3,
              border: `4px solid ${theme.palette.primary.main}`
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            I'm a seasoned Software Engineer, Cloud Architect, and Data Engineer based in Nairobi, Kenya. 
            I specialize in designing systems that ingest, process, and analyze data at scale, with experience 
            managing billions of rows of data and building distributed systems.
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            My expertise spans cloud technologies, database architecture, and modern web development. 
            I'm particularly passionate about event streaming platforms like Kafka, graph databases such as Neo4j, 
            and implementing AI-driven solutions to solve complex business problems.
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            As an active technical writer, I share my knowledge through articles on Medium about big data engineering, 
            cloud architecture, and software development practices. I believe in continuous learning and contributing 
            to the developer community through knowledge sharing and mentorship.
          </Typography>
          <Typography 
            variant="body1" 
            color="text.primary"
            sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            With over 8 years of experience in the tech industry, I've worked with companies ranging from startups to enterprises, helping them implement scalable data solutions and cloud architecture.
          </Typography>
        </Grid>
      </Grid>
      
      <Competencies />
    </Box>
  );
};

export default About; 