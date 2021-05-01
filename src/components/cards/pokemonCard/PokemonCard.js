/** @jsxImportSource @emotion/react */
import {
  Card,
  CardActionArea,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import { spriteURL } from "../../../const/common";
import pokeColorMap from "../../../const/pokeColorMap";
import { titleCase } from "../../../util/string";
import {
  cssTypesWrapper,
  cssCardActionArea,
  cssCardBody,
  cssOwnedContainer,
  cssPokeCards,
} from "../../pages/pokedex/styles";
import PokeballShadowIcon from "../../svg/PokeballShadowIcon";
import AbilityChip from "./TypeChip";

const stopPropagation = (e) => e.stopPropagation();

const PokemonCard = ({
  pokemon,
  onClick,
  onDelete,
  animateHover = true,
  ...otherProps
}) => {
  const colorId = pokemon.pokemon_v2_pokemonspecy.pokemon_color_id;
  const history = useHistory();
  const onClickCard = () => {
    history.push(`/pokemon-detail/${pokemon.name}`);
  };
  return (
    <Card css={cssPokeCards(colorId, animateHover)} {...otherProps}>
      <CardActionArea css={cssCardActionArea} onClick={onClickCard}>
        <div css={cssCardBody}>
          <Typography variant="h5" className="pokemon-name">
            {titleCase(pokemon.name)}
          </Typography>
          <div css={cssTypesWrapper(colorId)}>
            {pokemon.pokemon_v2_pokemontypes.map((type, i) => (
              <AbilityChip key={i} name={type.pokemon_v2_type.name} />
            ))}
          </div>
          <div css={cssOwnedContainer(colorId)}>
            <div className="owned-inner-container">
              <div className="owned-wrapper">
                <Typography variant="body2">
                  {onDelete ? (
                    <b>{pokemon.nickname}</b>
                  ) : (
                    <>
                      Owned: <b>{pokemon.owned || 0}</b>
                    </>
                  )}
                </Typography>
              </div>
            </div>
          </div>
          {onDelete && (
            <IconButton
              component="span"
              className="delete-pokemon"
              aria-label="delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              onMouseDown={stopPropagation}
              onTouchStart={stopPropagation}
            >
              <DeleteIcon />
            </IconButton>
          )}
          <img
            className="pokemon-sprite"
            src={`${spriteURL}${pokemon.id}.png`}
            alt="pokemon sprite"
          />
          <PokeballShadowIcon
            className="card-pokeball-decor"
            color={pokeColorMap[colorId]}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
