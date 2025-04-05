// import from React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <Router>
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
