import { Box, Typography, Chip, Stack } from '@mui/material';

const Interests = () => {
  const interests = [
    "Cloud Architecture", 
    "Data Engineering",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Graph Databases",
    "AI Solutions",
    "Technical Writing"
  ];

  return (
    <Box id="interests" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        Areas of Interest
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        {interests.map((interest, i) => (
          <Chip 
            key={i} 
            label={interest} 
            color="primary"
            variant={i % 2 === 0 ? "filled" : "outlined"}
            sx={{ mb: 1, mr: 1, px: 1 }} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default Interests; 