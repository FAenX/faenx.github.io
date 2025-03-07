import './App.css';
import { Resume } from './components';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import ChivoMono from "./assets/fonts/Chivo_Mono/static/ChivoMono-Regular.ttf"
import React from 'react';
import TechNavigation from './components/layout/TechNavigation';

const theme = (color: PaletteMode) => createTheme({
  typography: {
    fontFamily: 'ChivoMono, monospace, Arial',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '0.0075em',
    },
  },
  
  palette: {
    primary: {
      main: color === 'dark' ? "#64ffda" : "#1976D2",
      light: color === 'dark' ? "#9EFFEA" : "#64B5F6",
      dark: color === 'dark' ? "#00BFA5" : "#0D47A1",
      contrastText: color === 'dark' ? '#112240' : '#ffffff',
    },
    secondary: {
      main: color === 'dark' ? "#8892b0" : "#616161",
      light: color === 'dark' ? "#A8B2D1" : "#9E9E9E",
      dark: color === 'dark' ? "#606B94" : "#424242",
    },
    mode: color,
    background: {
      default: color === 'dark' ? '#0a192f' : '#f5f7fa',
      paper: color === 'dark' ? '#112240' : '#ffffff',
    },
    text: {
      primary: color === 'dark' ? '#e6f1ff' : '#212121',
      secondary: color === 'dark' ? '#a8b2d1' : '#616161',
    },
    divider: color === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
    error: {
      main: color === 'dark' ? '#FF5370' : '#d32f2f',
    },
    warning: {
      main: color === 'dark' ? '#FFCB6B' : '#f57c00',
    },
    info: {
      main: color === 'dark' ? '#82AAFF' : '#1976d2',
    },
    success: {
      main: color === 'dark' ? '#C3E88D' : '#388e3c',
    },
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  
  spacing: (factor: number) => `${0.5 * factor}rem`,
  
  components: {
    MuiContainer: {
      styleOverrides: {
        root: (props) => ({
          [`${props.theme.breakpoints.up('xs')}`]: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          [`${props.theme.breakpoints.up('sm')}`]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          [`${props.theme.breakpoints.up('md')}`]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          [`${props.theme.breakpoints.up('lg')}`]: {
            paddingLeft: '40px',
            paddingRight: '40px',
          },
        }),
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
            duration: theme.transitions.duration.standard,
          }),
          ...(theme.palette.mode === 'dark' && {
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '8px',
        },
        contained: ({ theme }) => ({
          boxShadow: 'none',
          '&:hover': {
            boxShadow: theme.shadows[4],
          },
          color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary,
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ChivoMono';
          src: url(${ChivoMono}) format('truetype');
          font-weight: 300;
          font-style: normal;
        }
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          transition: all 0.5s ease-in-out;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a {
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease-in-out;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        .MuiPaper-root {
          transition: all 0.3s ease-in-out;
        }
        .MuiButton-root {
          transition: all 0.2s ease-in-out;
        }
        .MuiButton-root:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        ::-webkit-scrollbar-track {
          background: ${color === 'dark' ? '#0a192f' : '#f1f1f1'};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${color === 'dark' ? '#8892b0' : '#c1c1c1'};
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${color === 'dark' ? '#64ffda' : '#2196F3'};
        }
        section {
          scroll-margin-top: 80px;
        }
        
        h1, h2, h3, h4, h5, h6 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        
        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        .text-gradient {
          background: linear-gradient(
            90deg, 
            ${color === 'dark' ? '#64ffda 0%, #20c7fc 100%' : '#2196F3 0%, #21CBF3 100%'}
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid ${color === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(25, 118, 210, 0.1)'};
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,${color === 'dark' ? '0.4' : '0.1'});
        }

        .link-hover {
          position: relative;
        }

        .link-hover:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: ${color === 'dark' ? '#64ffda' : '#1976D2'};
          transition: width 0.3s ease;
        }

        .link-hover:hover:after {
          width: 100%;
        }

        *:focus-visible {
          outline: 2px solid ${color === 'dark' ? '#64ffda' : '#1976D2'};
          outline-offset: 2px;
        }

        .logo {
          position: relative;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo img {
          object-fit: contain;
          transition: all 0.3s ease;
        }

        .logo .text-gradient {
          display: inline-block;
        }
      `,
    },
  },
});

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  React.useEffect(() => {
    const localMode = localStorage.getItem('mode');
    const preferedMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (!localMode) {
      setMode(preferedMode);
    }
    else {
      setMode(localMode as PaletteMode);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <TechNavigation themeMode={mode} toggleTheme={toggleTheme} />
      <Resume />
    </ThemeProvider>
  );
}

export default App;
