import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PokemonFinder from './components/PokemonFinder';
import Pokedex from './components/Pokedex';
import About from './components/About';
import HomeArticle from './components/HomeArticle';
import FeedbackModal from './components/FeedbackModal';
const App = () => {
  const [activePage, setActivePage] = useState('');
  const [showFeedback, setShowFeedback] = useState(true);

  useEffect(() => {
    // Show feedback modal on first load
    setShowFeedback(true);
  }, []);

  return (
    <div>
      <NavBar onNav={setActivePage} active={activePage} />
      <FeedbackModal open={showFeedback} onClose={() => setShowFeedback(false)} />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {activePage === '' && <HomeArticle />}
        {activePage === 'finder' && <PokemonFinder />}
        {activePage === 'pokedex' && <Pokedex />}
        {activePage === 'about' && <About />}
      </div>
    </div>
  );
};

export default App;