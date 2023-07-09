import './App.css';
import {Layout, Resume } from './components';
import { createTheme, CssBaseline, FormControlLabel, PaletteMode, Stack, Switch, ThemeProvider } from "@mui/material";
import ChivoMono  from  "./assets/fonts/Chivo_Mono/static/ChivoMono-Regular.ttf"
import React from 'react';



const theme =(color: PaletteMode)=> createTheme({
  typography: {
    fontFamily: 'ChivoMono, Arial',
  },
  
  palette: {
    primary: {
      main: "#969c9c",
    },
    secondary: {
      main: "#00000",
    },
    mode: color,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ChivoMono';
          src: url(${ChivoMono}) format('truetype');
          font-weight: 300;
          font-style: normal;
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

  const handleChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? 'dark' : 'light');
    // save it to localStorage
    localStorage.setItem('mode', event.target.checked ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme(mode)}>
       <CssBaseline />
    <Layout>
      <Stack 
        justifyContent={"flex-start"}
        width={"100%"}
        paddingLeft={2}
      >
        <FormControlLabel 
          control={
          <Switch
            checked={mode === 'dark'}
            onChange={handleChangeMode}
          />} 
          label={mode==="light"?"dark":"light"} />
      </Stack>
      <Resume />     
    </Layout>
    </ThemeProvider>
  );
}

export default App;
