/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { LinearProgress, Tab, Tabs, useTheme } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { titleCase } from "../../../util/string";
import PageTitle from "../../text/PageTitle";
import TypeChip from "../../cards/pokemonCard/TypeChip";
import { spriteURL } from "../../../const/common";
import {
  GET_POKEMON_COLOR_ID,
  GET_POKEMON_DETAIL,
} from "../../../util/graphql/queries";
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const PokemonDetail = () => {
  const match = useRouteMatch();
  const { id, name } = match.params;
  const theme = useTheme();
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [tabValue, setTabValue] = useState(0);

  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
  });

  const {
    loading: colorLoading,
    error: colorError,
    data: colorData,
  } = useQuery(GET_POKEMON_COLOR_ID, {
    variables: { id: Number(id) },
    context: { clientName: "beta" },
  });

  useEffect(() => {
    if (data && colorData) {
      const color = {
        colorId:
          colorData.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonspecy
            .pokemon_color_id,
      };
      console.log(data.pokemon);
      console.log(colorData);
      setPokemonDetail({
        ...data.pokemon,
        ...color,
      });
    }
  }, [data, colorData]);

  if (loading || colorLoading) return <LinearProgress />;
  if (error || colorError)
    return <span>Error! {error ? error.message : colorError.message}</span>;

  return (
    <>
      <div css={cssPageRoot}>
        <PageTitle css={cssPageTitle}>{titleCase(name)}</PageTitle>
        <div css={cssDetailTypesWrapper(pokemonDetail.colorId, theme)}>
          {pokemonDetail.types &&
            pokemonDetail.types.map((data, i) => (
              <TypeChip key={i} name={data?.type?.name} />
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
      <div css={cssPageBackground(pokemonDetail.colorId)} />
    </>
  );
};

export default PokemonDetail;
