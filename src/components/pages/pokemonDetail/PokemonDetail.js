/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Box, Tab, Tabs, Typography, useTheme } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { titleCase } from "../../../util/string";
import PageTitle from "../../text/PageTitle";
import pokeColorMap from "../../../const/pokeColorMap";
import TypeChip from "../../cards/pokemonCard/TypeChip";
import { cssTypesWrapper } from "../pokedex/styles";
import { spriteURL } from "../../../const/common";
import { flexAllCenter, fontFamily } from "../../../styles/common";
import { GET_POKEMON_DETAIL } from "../../../util/graphql/queries";
import { useQuery } from "@apollo/client";
import TabPanel from "./TabPanel";

const mock = {
  id: 1,
  types: ["water", "bug"],
  colorId: 5,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

// =====================================

const cssPageRoot = css`
  height: calc(100% - 323px);
`;

const cssTabRoot = css`
  ${fontFamily}
  text-transform: unset;
  border-radius: 32px;
`;

const cssDetailTypesWrapper = (colorId, theme) => css`
  ${cssTypesWrapper(mock.colorId)}
  max-width: 100%;
  ${theme.breakpoints.up("sm")} {
    text-align: center;
  }
`;

const cssPageTitle = css`
  color: white;
  margin-top: 6px;
`;

const cssSpriteContainer = css`
  ${flexAllCenter}
  position: relative;
  z-index: 2;

  .sprite-image {
    width: 200px;
    height: 200px;
  }
`;

const cssTabsContainer = css`
  background-color: white;
  height: calc(100% + 42px);
  width: calc(100% + 32px);
  position: relative;
  left: -16px;
  top: -24px;
  padding-top: 8px;
  border-radius: 24px 24px 0 0;
`;

const cssTabs = (theme) => css`
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  .MuiTabs-indicator {
    display: flex;
    justify-content: center;
    background-color: transparent;
    & > span {
      max-width: 84px;
      width: 100%;
      background-color: ${theme.palette.primary.main};
    }
  }
`;
const cssPageBackground = (colorId) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${pokeColorMap[colorId]};
`;

// =====================================

const PokemonDetail = () => {
  const match = useRouteMatch();
  const name = match.params.name;
  const theme = useTheme();
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [tabValue, setTabValue] = useState(0);

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setPokemonDetail(data.pokemon);
    }
  }, [data]);

  return (
    <>
      <div css={cssPageRoot}>
        <PageTitle css={cssPageTitle}>{titleCase(name)}</PageTitle>
        <div css={cssDetailTypesWrapper(mock.colorId, theme)}>
          {mock.types.map((type, i) => (
            <TypeChip key={i} name={type} />
          ))}
        </div>
        <div css={cssSpriteContainer}>
          <img
            className="sprite-image"
            src={`${spriteURL}${pokemonDetail.id}.png`}
            alt="pokemon sprite"
          />
        </div>
        <div css={cssTabsContainer}>
          <div>
            <Tabs
              value={tabValue}
              onChange={(e, value) => setTabValue(value)}
              indicatorColor="primary"
              variant="fullWidth"
              TabIndicatorProps={{ children: <span /> }}
              css={cssTabs(theme)}
            >
              {["About", "Base Stats", "Moves"].map((label, i) => (
                <Tab css={cssTabRoot} key={i} label={label} {...a11yProps(i)} />
              ))}
            </Tabs>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={tabValue}
              onChangeIndex={(index) => setTabValue(index)}
            >
              <TabPanel value={tabValue} index={0} dir={theme.direction}>
                Item One
              </TabPanel>
              <TabPanel value={tabValue} index={1} dir={theme.direction}>
                Item Two
              </TabPanel>
              <TabPanel value={tabValue} index={2} dir={theme.direction}>
                Item Three
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      </div>
      <div css={cssPageBackground} />
    </>
  );
};

export default PokemonDetail;
