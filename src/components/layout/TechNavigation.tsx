import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, useMediaQuery, useTheme, styled, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DownloadButton from "../common/downloadButton";
import { AnimatedLogo } from './AnimatedLogo';

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

const StyledNavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  color: theme.palette.mode === 'dark' ? '#8892b0' : '#718096',
  fontWeight: 500,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    transformOrigin: 'right',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover': {
    color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3',
    backgroundColor: 'transparent',
    '&::after': {
      transformOrigin: 'left',
      transform: 'scaleX(1)',
    },
  },
}));

interface TechNavigationProps {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function TechNavigation({ themeMode, toggleTheme }: TechNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 8]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (target: string) => {
    setDrawerOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
      >
        <AppBar 
          position="fixed" 
          elevation={isScrolled ? 4 : 0}
          sx={{
            bgcolor: isScrolled 
              ? (theme.palette.mode === 'dark' ? 'rgba(10, 25, 47, 0.85)' : 'rgba(255, 255, 255, 0.85)') 
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <Toolbar sx={{ 
            justifyContent: 'space-between',
            height: { xs: 70, md: 80 },
            px: { xs: 2, sm: 4, md: 6 }
          }}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Box 
                component="div" 
                className="logo"
                sx={{ 
                  padding: { xs: 1, sm: 1.5, md: 2 },
                  marginRight: { xs: 1, sm: 2, md: 3 },
                  marginLeft: { xs: 0.5, sm: 1 },
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AnimatedLogo 
                  size={isMobile ? "small" : "medium"} 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
                <Typography 
                  variant="h6" 
                  component="span"
                  sx={{ 
                    ml: 1.5, 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                    display: { xs: 'none', sm: 'block' },
                    fontFamily: 'ChivoMono, monospace',
                  }}
                  className="text-gradient"
                >
                  Emmanuel
                </Typography>
              </Box>
            </motion.div>
            
            {isMobile ? (
              <IconButton 
                edge="end" 
                color="inherit" 
                onClick={() => setDrawerOpen(true)}
                sx={{ color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.target}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      style={{ display: 'inline-block' }}
                    >
                      <StyledNavButton
                        onClick={() => scrollToSection(item.target)}
                        sx={{
                          color: activeSection === item.target ? 
                            (theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3') : 
                            'inherit',
                        }}
                      >
                        <span style={{ color: '#64ffda', marginRight: '4px' }}>0{index + 1}.</span> {item.label}
                      </StyledNavButton>
                    </motion.div>
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <IconButton 
                    onClick={toggleTheme} 
                    color="inherit"
                    sx={{ color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3' }}
                  >
                    {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  
                  <Box sx={{ ml: 2 }}>
                    <DownloadButton pdfUrl="/resume.pdf" />
                  </Box>
                </Box>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </motion.div>
      
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: '300px',
            background: theme.palette.mode === 'dark' ? '#0a192f' : '#ffffff',
            padding: 2,
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3' }} />
          </IconButton>
        </Box>
        
        <List>
          {navItems.map((item, index) => (
            <ListItem 
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              sx={{ 
                py: 2,
                borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                color: activeSection === item.target ? 
                  (theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3') : 
                  'inherit',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3',
                }
              }}
            >
              <span style={{ color: '#64ffda', marginRight: '8px' }}>0{index + 1}.</span> {item.label}
            </ListItem>
          ))}
          
          <ListItem sx={{ mt: 2, justifyContent: 'center' }}>
            <DownloadButton pdfUrl="/resume.pdf" />
          </ListItem>
          
          <ListItem sx={{ justifyContent: 'center', mt: 1 }}>
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              sx={{ color: theme.palette.mode === 'dark' ? '#64ffda' : '#2196F3' }}
            >
              {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
} 