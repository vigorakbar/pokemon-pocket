import { css } from "@emotion/react";
import pokeColorMap from "../../../const/pokeColorMap";
import palettes from "../../../const/palettes";
import { flexAllCenter, fontFamily } from "../../../styles/common";
import { cssTypesWrapper } from "../pokedex/styles";

export const cssPageRoot = css`
  height: calc(100% - 323px);
`;

export const cssTabRoot = css`
  ${fontFamily}
  text-transform: unset;
  border-radius: 32px;
`;

export const cssDetailTypesWrapper = (colorId, theme) => css`
  ${cssTypesWrapper(colorId)}
  max-width: 100%;
  ${theme.breakpoints.up("sm")} {
    text-align: center;
  }
`;

export const cssPageTitle = css`
  color: white;
  margin-top: 6px;
`;

export const cssSpriteContainer = css`
  ${flexAllCenter}
  position: relative;
  z-index: 2;

  .sprite-image {
    width: 200px;
    height: 200px;
  }
`;

export const cssTabsContainer = css`
  background-color: white;
  height: calc(100% + 42px);
  width: calc(100% + 32px);
  position: relative;
  left: -16px;
  top: -24px;
  padding-top: 8px;
  border-radius: 24px 24px 0 0;
`;

export const cssTabs = css`
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  .MuiTabs-indicator {
    display: flex;
    justify-content: center;
    background-color: transparent;
    & > span {
      max-width: 84px;
      width: 100%;
      background-color: ${palettes.pokeColors.blue};
    }
  }
`;
export const cssPageBackground = (colorId) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${pokeColorMap[colorId]};
`;

export const cssPageDecor = css`
  position: absolute;
  top: 180px;
  right: calc(50% - 100px);
  width: 200px;
  height: 200px;
  opacity: 0.35;
  filter: brightness(150%);
`;
