import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';

export const ResumeButton = () => {
  const theme = useTheme();
  const resumeUrl = "https://drive.google.com/file/d/1hFACPVhBg-fUzFeTDlUmT0WTb6v7uLLT/view?usp=drive_link";
  
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      startIcon={<DownloadIcon />}
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontWeight: 'bold',
        py: 1.5,
        px: 3,
        borderRadius: 2,
        boxShadow: theme.shadows[4],
        '&:hover': {
          boxShadow: theme.shadows[8],
          transform: 'translateY(-3px)',
          transition: 'all 0.2s ease-in-out'
        }
      }}
    >
      Download Resume
    </Button>
  );
}; 