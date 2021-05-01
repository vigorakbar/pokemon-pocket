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
import { flexAllCenter } from "../../../styles/commonPosition";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const cssDetailTypesWrapper = css`
  ${cssTypesWrapper(mock.colorId)}
  max-width: 100%;
`;

const PokemonDetail = () => {
  const match = useRouteMatch();
  const name = match.params.name;
  const theme = useTheme();
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setPokemonDetail(mock);
  }, []);

  return (
    <>
      <div
        css={css`
          height: calc(100% - 323px);
        `}
      >
        <PageTitle
          css={css`
            color: white;
            margin-top: 6px;
          `}
        >
          {titleCase(name)}
        </PageTitle>
        <div css={cssDetailTypesWrapper}>
          {mock.types.map((type, i) => (
            <TypeChip key={i} name={type} />
          ))}
        </div>
        <div
          css={css`
            ${flexAllCenter}
            position: relative;
            z-index: 2;
          `}
        >
          <img
            css={css`
              width: 200px;
              height: 200px;
            `}
            src={`${spriteURL}${pokemonDetail.id}.png`}
            alt="pokemon sprite"
          />
        </div>
        <div
          css={css`
            background-color: white;
            height: calc(100% + 24px);
            width: calc(100% + 32px);
            position: relative;
            left: -16px;
            top: -24px;
            padding-top: 8px;
            border-radius: 24px 24px 0 0;
          `}
        >
          <div>
            <Tabs
              value={tabValue}
              onChange={(e, value) => setTabValue(value)}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </div>
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
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          background-color: ${pokeColorMap[pokemonDetail.colorId]};
        `}
      />
    </>
  );
};

export default PokemonDetail;
