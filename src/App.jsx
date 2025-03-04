import { useState } from 'react'
import Header from './components/header';
import Footer from './components/footer';
import Leaderboard from "./components/leaderboard";
import TrendingSection from './components/trending';
import ShopByCategory from './components/shopByCategory';
import ByGender from './components/shopbygender';
import './App.css'

function App() {

  return (
    // fragments
    <>
      <Header/>
      <Leaderboard />
      <TrendingSection />
      <ShopByCategory/>
      <ByGender/>
      <Footer/>
    </>
  )
}

export default App
