import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DareshwarKitchen from './pages/DareshwarKitchen';
import LICServices from './pages/LICServices';
import StarHealth from './pages/StarHealth';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#1D4ED8',
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A855F7',
      dark: '#7C3AED',
    },
    background: {
      default: '#F0F4F8',
      paper: '#F8FAFC',
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F0F4F8',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            {/* Animated Background */}
            <div className="animated-bg">
              <div className="glow-orb"></div>
              <div className="glow-orb"></div>
              <div className="glow-orb"></div>
            </div>
            
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dareshwar-kitchen" element={<DareshwarKitchen />} />
                <Route path="/lic-services" element={<LICServices />} />
                <Route path="/star-health" element={<StarHealth />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 