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

export const GET_POKEMON_DETAIL = gql`
query pokemonDetail($name: String!) {
  pokemon(name: $name) {
    stats {
      base_stat
      stat {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types{
      type {
        name
      }
    }
    abilities {
      ability {
        name
        url
      }
    }
    id
    weight
    height
    sprites {
      front_default
    }
    species {
      name
    }
  }
}
`
