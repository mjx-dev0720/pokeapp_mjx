import React from 'react';
import './HomeArticle.css';

const HomeArticle = () => (
  <div className="home-article-outer">
    <div className="home-article-bgimg">
      <img src="https://assets.pokemon.com/assets/cms2/img/misc/virtual-backgrounds/masters/masters-16.jpg" alt="Pokemon background" />
    </div>
    <article className="home-article-container">
      <h1 className="home-article-title">The Timeless Adventure of Pokémon</h1>
      <p className="home-article-lead">
        Since its debut in 1996, Pokémon has captured the hearts of millions around the world. What began as a simple quest to catch and train fantastical creatures has blossomed into a global phenomenon, spanning games, anime, movies, and more.
      </p>
      <img className="home-article-inlineimg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="Pikachu" />
      <p>
        The story of Pokémon begins in the humble region of Kanto, where a young Trainer sets out from Pallet Town with a single dream: to become a Pokémon Master. Along the way, friendships are forged, rivalries are born, and the world opens up with every new badge earned. The journey is filled with wonder, from the first encounter with a wild Pidgey to the awe of seeing a legendary bird soar across the sky.
      </p>
      <p>
        As the years passed, new regions emerged—Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, and Galar—each with its own unique culture, challenges, and Pokémon to discover. The world of Pokémon grew richer and more diverse, inviting Trainers to explore forests, mountains, oceans, and even the stars above. With every generation, the adventure expanded, introducing new mechanics, new friends, and new mysteries to unravel.
      </p>
      <p>
        The anime brought these adventures to life, following Ash Ketchum and his loyal Pikachu as they traveled from region to region, meeting new companions and facing formidable foes. The movies took us to fantastical places, from the depths of the ocean to the edge of time itself, where the fate of the world often hung in the balance.
      </p>
      <img className="home-article-inlineimg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" alt="Mewtwo" />
      <p>
        Pokémon is more than just battles and badges. It’s about the bonds we form—with our Pokémon, with our friends, and with the world around us. It’s about perseverance in the face of challenge, the thrill of discovery, and the joy of sharing our journey with others. Whether trading cards in the schoolyard, battling online, or simply watching the sunrise with your favorite Pokémon by your side, the spirit of Pokémon lives in every Trainer’s heart.
      </p>
      <blockquote className="home-article-quote">
        "Gotta catch 'em all!" isn’t just a slogan—it's a call to adventure, curiosity, and connection.
      </blockquote>
      <img className="home-article-inlineimg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="Charizard" />
      <p>
        Today, Pokémon continues to evolve. With new games, new regions, and new dreams on the horizon, the adventure is far from over. Whether you’re a seasoned Trainer or just starting your journey, the world of Pokémon welcomes you. So grab your Poké Ball, choose your starter, and step into a universe where every day brings a new adventure!
      </p>
    </article>
  </div>
);

export default HomeArticle;
