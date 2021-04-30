credits:
<a href="https://icons8.com/icon/46746/pokeball">Pokeball icon by Icons8</a>
<a href="https://icons8.com/icon/46007/pokebag">Pokebag icon by Icons8</a>
<a href="https://dribbble.com/shots/6540871-Pokedex-App">design<a/>
query samplePokeAPIquery {
  gen3_species: pokemon_v2_pokemonspecies(limit: 10, offset: 0, order_by: {id: asc}) {
    name
    id
    pokemon_v2_pokemoncolor {
      id
    }
  }
}