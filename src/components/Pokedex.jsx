import React, { useEffect, useState } from 'react';
import './Pokedex.css';

const GEN_LIMITS = [
  { gen: 1, start: 1, end: 151 },
  { gen: 2, start: 152, end: 251 },
  { gen: 3, start: 252, end: 386 },
  { gen: 4, start: 387, end: 493 },
  { gen: 5, start: 494, end: 649 },
  { gen: 6, start: 650, end: 721 },
  { gen: 7, start: 722, end: 809 },
  { gen: 8, start: 810, end: 905 },
  { gen: 9, start: 906, end: 1025 },
];

const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';

import PokedexModal from './PokedexModal';

const Pokedex = () => {
  const [gen, setGen] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalId, setModalId] = useState(null);

  useEffect(() => {
    const fetchGen = async () => {
      setLoading(true);
      const { start, end } = GEN_LIMITS.find(g => g.gen === gen);
      const promises = [];
      for (let i = start; i <= end; i++) {
        promises.push(
          fetch(`${POKE_API}${i}`)
            .then(res => res.json())
            .then(data => ({
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
              types: data.types.map(t => t.type.name),
            }))
        );
      }
      const results = await Promise.all(promises);
      setPokemonList(results);
      setLoading(false);
    };
    fetchGen();
  }, [gen]);

  return (
    <div className="pokedex-outer-container">
      <div className="pokedex-container">
        <div className="pokedex-header">
          <h2>Pokedex</h2>
          <div className="gen-select">
            {GEN_LIMITS.map(g => (
              <button
                key={g.gen}
                className={gen === g.gen ? 'active' : ''}
                onClick={() => setGen(g.gen)}
              >
                Gen {g.gen}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <div className="pokedex-loading">Loading...</div>
        ) : (
          <div className="pokedex-grid">
            {pokemonList.map(p => (
              <div className="pokedex-card" key={p.id} onClick={() => setModalId(p.id)}>
                <img src={p.sprite} alt={p.name} className="pokedex-sprite" />
                <div className="pokedex-name">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</div>
                <div className="pokedex-types">
                  {p.types.map(type => (
                    <span key={type} className={`type-badge type-${type}`}>{type}</span>
                  ))}
                </div>
                <div className="pokedex-id">#{p.id}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {modalId && <PokedexModal id={modalId} onClose={() => setModalId(null)} />}
    </div>
  );
};

export default Pokedex;
