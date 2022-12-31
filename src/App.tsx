import './App.css';
import {Layout, Resume } from './components';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ChivoMono  from  "./assets/fonts/Chivo_Mono/static/ChivoMono-Regular.ttf"



const theme = createTheme({
  typography: {
    fontFamily: 'ChivoMono, Arial',
  },
  
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    mode: "dark",
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
          font-weight: 400;
          font-style: normal;
        }
      `,
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
    <Layout>
      <Resume />     
    </Layout>
    </ThemeProvider>
  );
}

export default App;
