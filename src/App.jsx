import { useState } from 'react'
import Header from './components/header';
import Footer from './components/footer';
import Leaderboard from "./components/leaderboard";
import TrendingSection from './components/trending';
import './App.css'

function App() {

  return (
    // fragments
    <>
      <Header/>
      <Leaderboard />
      <TrendingSection />
      <Footer/>
    </>
  )
}

export default App
