import React from 'react';
import './NavBar.css';

const NavBar = ({ onNav, active }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokémon Logo" className="navbar-pokemon-logo" />
        <a href="#" className="navbar-home-link" onClick={e => { e.preventDefault(); onNav(''); }}>PokéApp</a>
      </div>
      <ul className="navbar-links">
        <li className={active === 'finder' ? 'active' : ''} onClick={() => onNav('finder')}>
          Finder
        </li>
        <li className={active === 'pokedex' ? 'active' : ''} onClick={() => onNav('pokedex')}>
          Pokedex
        </li>
        <li className={active === 'about' ? 'active' : ''} onClick={() => onNav('about')}>
          About
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
