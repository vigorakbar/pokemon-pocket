import { css } from "@emotion/react";
import { biggerOnHover } from "../../../styles/animation";
import { flexAllCenter } from "../../../styles/commonPosition";
import pokeColorMap from "../../../const/pokeColorMap";

export const cssCardsWrapper = css`
  ${flexAllCenter}
  flex-wrap: wrap;
  margin: 28px 0;
`;

export const cssPokeCards = (colorId) => css`
  ${biggerOnHover}
  height: 200px;
  width: 320px;
  margin: 12px;
  background-color: ${pokeColorMap[colorId]};
  border-radius: 20px;
`;

export const cssCardActionArea = css`
  height: 100%;
  position: relative;
  display: flex;
  align-items: start;
  justify-content: left;
`;

export const cssCardBody = css`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: calc(100% - 40px);

  .pokemon-name {
    font-weight: 600;
    color: white;
  }

  .pokemon-sprite {
    position: absolute;
    width: 150px;
    height: 150px;
    right: 2px;
    bottom: 2px;
    z-index: 1;
  }

  .card-pokeball-decor {
    position: absolute;
    width: 125px;
    height: 125px;
    right: 0px;
    bottom: 0;
    opacity: 0.35;
    filter: brightness(150%);
  }
`;

export const cssAbilityWrapper = (colorId) => css`
  max-width: 40%;
  margin: 10px 0px;

  .ability-chip {
    margin-right: 6px;
    margin-bottom: 6px;
    background-color: ${pokeColorMap[colorId]};
    filter: brightness(130%);
    font-family: "Helvetica Neue", "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", sans-serif;
  }
`;

export const cssOwnedContainer = (colorId) => css`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;

  .owned-inner-container {
    position: relative;
    margin-left: 12px;
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: ${pokeColorMap[colorId]};
      filter: brightness(80%);
      width: 100%;
      height: 100%;
      border-radius: 16px;
      padding: 4px 12px;
      top: -4px;
      left: -12px;
    }
  }

  .owned-wrapper {
    position: relative;
    color: white;
  }
`;

export const cssPageDecor = css`
  position: fixed;
  width: 200px;
  height: 200px;
  right: -75px;
  top: 0;
  opacity: 0.2;
  z-index: -1;
`;
