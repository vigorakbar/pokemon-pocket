import { css } from "@emotion/react";
import { flexAllCenter } from "../../styles/common";
import palettes from "../../const/palettes";

export const cssAppBar = (isDetailPage) => css`
  background: ${isDetailPage ? 'transparent' : palettes.pokeColors.red};
  box-shadow: unset;
`;

export const cssToolbar = css`
  justify-content: space-between;
`;

export const cssMainMenu = css`
  line-height: 1.2;
  max-width: 50%;
  font-weight: 600;

  .icon-wrapper {
    ${flexAllCenter}
    margin: 12px 0;
  }

  .icon-main-menu {
    height: 48px;
    width: 48px;
    margin-right: 12px;
  }
`;

export const cssMenuLabel = css`
  color: white;
`;

export const cssMyPokeMenu = css`
  max-width: 36%;

  .icon-wrapper {
    ${flexAllCenter}
  }

  .icon-my-poke {
    margin-right: 4px;
  }
`;
