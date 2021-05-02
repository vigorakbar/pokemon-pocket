/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Tab, Tabs, useTheme } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { titleCase } from "../../../util/string";
import PageTitle from "../../text/PageTitle";
import TypeChip from "../../cards/pokemonCard/TypeChip";
import { spriteURL } from "../../../const/common";
import { GET_POKEMON_DETAIL } from "../../../util/graphql/queries";
import { useQuery } from "@apollo/client";
import TabPanel from "./TabPanel";
import {
  cssDetailTypesWrapper,
  cssPageBackground,
  cssPageRoot,
  cssPageTitle,
  cssSpriteContainer,
  cssTabRoot,
  cssTabs,
  cssTabsContainer,
} from "./styles";

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
