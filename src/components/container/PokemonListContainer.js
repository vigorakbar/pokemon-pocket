
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PokeballShadowIcon from "../svg/PokeballShadowIcon";

const cssPageDecor = css`
  position: fixed;
  width: 200px;
  height: 200px;
  right: -75px;
  top: 0;
  opacity: 0.2;
  z-index: -1;
`;

const PokemonListContainer = ({ children, ...otherProps }) => (
  <div {...otherProps}>
    <div>{children}</div>
    <PokeballShadowIcon css={cssPageDecor} />
  </div>
);

export default PokemonListContainer;
