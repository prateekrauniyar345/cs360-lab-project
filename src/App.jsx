import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Leaderboard from './components/leaderboard';
import TrendingSection from './components/trending';
import ShopByCategory from './components/shopByCategory';
import ByGender from './components/shopbygender';
import About from './components/about';
import Contact from './components/contacts';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import './App.css';

function Home() {
  return (
    <>
      <Leaderboard />
      <TrendingSection />
      <ShopByCategory />
      <ByGender />
    </>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('userFirstName'));

  useEffect(() => {
    const checkLogin = () => {
      const firstName = localStorage.getItem('userFirstName');
      setLoggedIn(!!firstName);
    };

    window.addEventListener('storage', checkLogin);
    return () => window.removeEventListener('storage', checkLogin);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
