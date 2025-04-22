import { useEffect } from 'react';
import Leaderboard from '../components/leaderboard';
import TrendingSection from '../components/trending';
import ShopByCategory from '../components/shopByCategory';
import ByGender from '../components/shopbygender';

const LandingPage = () => {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => console.log("🎯 Server says:", data))
      .catch(err => console.error("❌ Errorrrrrrr connecting to server:", err));
  }, []);
  

  return (
    <>
      <Leaderboard />
      <TrendingSection />
      <ShopByCategory />
      <ByGender />
    </>
  );
};

export default LandingPage;
