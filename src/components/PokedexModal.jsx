import React, { useEffect, useState } from 'react';
import './PokedexModal.css';


const SPECIES_API = 'https://pokeapi.co/api/v2/pokemon-species/';
const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';

const PokedexModal = ({ id, onClose }) => {
  const [pokemon, setPokemon] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${POKE_API}${id}`);
      const data = await res.json();
      setPokemon({
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
      });
      const speciesRes = await fetch(`${SPECIES_API}${id}`);
      if (speciesRes.ok) {
        const speciesData = await speciesRes.json();
        const entry = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        );
        setDescription(entry ? entry.flavor_text.replace(/\f|\n/g, ' ') : 'No description available.');
      } else {
        setDescription('No description available.');
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (!id) return null;
  return (
    <div className="pokedex-modal-backdrop" onClick={onClose}>
      <div className="pokedex-modal" onClick={e => e.stopPropagation()}>
        {loading ? (
          <div className="pokedex-modal-loading">Loading...</div>
        ) : (
          <>
            <img src={pokemon.sprite} alt={pokemon.name} className="pokedex-modal-sprite" />
            <h3 className="pokedex-modal-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
            <div className="pokedex-modal-types">
              {pokemon.types.map(type => (
                <span key={type} className={`type-badge type-${type}`}>{type}</span>
              ))}
            </div>
            <div className="pokedex-modal-description">{description}</div>
            <button className="pokedex-modal-close" onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PokedexModal;
