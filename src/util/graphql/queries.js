import { gql } from "@apollo/client";

export const POKEMON_LIST_LIMIT = 20;

export const GET_POKEMON_LIST = gql`
  query pokemonList($offset: Int) {
    pokemon_v2_pokemon(limit: ${POKEMON_LIST_LIMIT}, offset: $offset, order_by: {id: asc}) {
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
`;
