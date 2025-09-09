import Loader from './Loader';
import React, { useState } from 'react';
import './PokemonFinder.css';


const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
const SPECIES_API = 'https://pokeapi.co/api/v2/pokemon-species/';

const PokemonFinder = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setPokemon(null);
    setDescription('');
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(POKE_API + query.toLowerCase());
      if (!res.ok) throw new Error('Pokémon not found');
      const data = await res.json();
      setPokemon({
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        id: data.id,
        stats: data.stats,
        moves: data.moves.slice(0, 6).map(m => m.move.name), // first 6 moves
      });
      // Fetch description
      const speciesRes = await fetch(SPECIES_API + data.id);
      if (speciesRes.ok) {
        const speciesData = await speciesRes.json();
        const flavor = speciesData.flavor_text_entries.find(
          entry => entry.language.name === 'en'
        );
        setDescription(flavor ? flavor.flavor_text.replace(/\f|\n|\r/g, ' ') : '');
      } else {
        setDescription('');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="finder-bg">
      <div className="finder-container" style={{ position: 'relative' }}>
  {loading && <Loader text="Searching Pokémon..." />}
        <form className="finder-form" onSubmit={handleSearch} autoComplete="off">
          <input
            type="text"
            placeholder="Search Pokémon by name or ID..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {pokemon && (
          <div className="pokemon-card">
            <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-sprite animated-sprite" />
            <div className="pokemon-info">
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <span>#{pokemon.id}</span></h2>
              <div className="pokemon-types">
                {pokemon.types.map(type => (
                  <span key={type} className={`type-badge type-${type}`}>{type}</span>
                    ))}
                  </div>
                  <div className="pokemon-description">
                    <p>{description}</p>
                  </div>
                  <div className="pokemon-stats">
                    <div><strong>Attack:</strong> {pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat ?? '-'}</div>
                    <div><strong>Defense:</strong> {pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat ?? '-'}</div>
                    <div><strong>Speed:</strong> {pokemon.stats.find(s => s.stat.name === 'speed')?.base_stat ?? '-'}</div>
                  </div>
                  <div className="pokemon-moves">
                    <strong>Moves:</strong>
                    <ul>
                      {pokemon.moves && pokemon.moves.length > 0 ? (
                        pokemon.moves.map(move => (
                          <li key={move}>
                            <span className="move-icon" role="img" aria-label="move">⚡</span> {move.replace(/-/g, ' ')}
                          </li>
                        ))
                      ) : (
                        <li>No moves found.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <footer className="footer">Powered by <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></footer>
          </div>
        </div>
  );
}

export default PokemonFinder;
