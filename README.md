credits:
<a href="https://icons8.com/icon/46746/pokeball">Pokeball icon by Icons8</a>
<a href="https://icons8.com/icon/46007/pokebag">Pokebag icon by Icons8</a>
<a href="https://dribbble.com/shots/6540871-Pokedex-App">design<a/>

query samplePokeAPIquery {
  pokemon_v2_pokemon(limit: 10, offset: 0) {
    pokemon_v2_pokemonspecy {
      pokemon_color_id
    }
    name
    id
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
        id
      }
    }
  }
}
