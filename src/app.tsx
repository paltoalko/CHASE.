import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './assets/theme';
import './assets/styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Start, Contact, Careers, Desktop } from '../src/pages';

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/desktop" element={<Desktop />}></Route>
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default App;
