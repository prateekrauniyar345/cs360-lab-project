import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Leaderboard from './components/leaderboard';
import TrendingSection from './components/trending';
import ShopByCategory from './components/shopByCategory';
import ByGender from './components/shopbygender';
import About from './components/about';
import Contact from './components/contacts'; // make sure you have this
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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
