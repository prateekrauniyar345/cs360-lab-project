// import from React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';

// imports from components folder
import Header from './components/header';
import Footer from './components/footer';

// imports from pages folder
import LandingPage from './pages/LandingPage';
import About from './pages/about';
import Contact from './pages/contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductListing from './pages/ProductListing'; 


import './App.css';

function PageLogger() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      console.log('🏠 I am in home page');
    } else if (location.pathname === '/about') {
      console.log('📘 I am in about page');
    } else if (location.pathname === '/contact') {
      console.log('📞 I am in contact page');
    }
  }, [location.pathname]);

  return null; // It doesn't render anything, just logs
}

function App() {
  return (
    
    <Router>
    <PageLogger />
      <Header />
      <Routes>
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* 🆕 Dynamic product route */}
        <Route path="/products/:gender/:subcategory" element={<ProductListing />} />
        <Route path="/search" element={<ProductListing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
