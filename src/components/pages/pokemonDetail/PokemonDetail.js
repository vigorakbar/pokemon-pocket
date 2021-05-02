/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import {
  LinearProgress,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  useTheme,
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { titleCase } from "../../../util/string";
import PageTitle from "../../text/PageTitle";
import TypeChip from "../../cards/pokemonCard/TypeChip";
import palettes from "../../../const/palettes";
import {
  GET_POKEMON_COLOR_ID,
  GET_POKEMON_DETAIL,
} from "../../../util/graphql/queries";
import { useQuery } from "@apollo/client";
import TabPanel from "./TabPanel";
import {
  cssDetailTypesWrapper,
  cssPageBackground,
  cssPageDecor,
  cssPageRoot,
  cssPageTitle,
  cssSpriteContainer,
  cssTabRoot,
  cssTabs,
  cssTabsContainer,
} from "./styles";
import { css } from "@emotion/react";
import { fontFamily } from "../../../styles/common";
import PokeballShadowIcon from "../../svg/PokeballShadowIcon";
import pokeColorMap from "../../../const/pokeColorMap";
import PokemonCatching from "./PokemonCatching";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const cssColLabel = css`
  ${fontFamily}
  width: 80px;
`;

const cssColValue = css`
  ${fontFamily}
  font-weight: 600;
`;

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

  if (loading || colorLoading)
    return (
      <>
        <LinearProgress />
        <div css={cssPageBackground(3)} />
      </>
    );
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
            src={pokemonDetail.sprites?.front_default}
            alt="pokemon sprite"
          />
        </div>
        <PokeballShadowIcon
          css={cssPageDecor}
          color={pokeColorMap[pokemonDetail.colorId]}
        />
        <div css={cssTabsContainer}>
          <div>
            <Tabs
              value={tabValue}
              onChange={(e, value) => setTabValue(value)}
              indicatorColor="primary"
              variant="fullWidth"
              TabIndicatorProps={{ children: <span /> }}
              css={cssTabs}
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
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell css={cssColLabel}>Species</TableCell>
                      <TableCell css={cssColValue}>
                        {pokemonDetail &&
                          titleCase(pokemonDetail.species?.name)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell css={cssColLabel}>Height</TableCell>
                      <TableCell css={cssColValue}>
                        {pokemonDetail && `${pokemonDetail.height / 10} m`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell css={cssColLabel}>Weight</TableCell>
                      <TableCell css={cssColValue}>
                        {pokemonDetail && `${pokemonDetail.weight / 10} kg`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell css={cssColLabel}>Abilities</TableCell>
                      <TableCell css={cssColValue}>
                        {pokemonDetail &&
                          (pokemonDetail.abilities || [])
                            .map((data) => data?.ability?.name)
                            .join(", ")}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabPanel>
              <TabPanel value={tabValue} index={1} dir={theme.direction}>
                <Table
                  css={css`
                    margin-bottom: 100px;
                  `}
                >
                  <TableBody>
                    {(pokemonDetail.stats || []).map((stat = {}, i) => (
                      <TableRow key={i}>
                        <TableCell css={cssColLabel}>
                          {titleCase(
                            (stat.stat?.name || "").replace("special-", "Sp. ")
                          )}
                        </TableCell>
                        <TableCell
                          css={css`
                            ${cssColValue}
                            width: 25px;
                          `}
                        >
                          {stat.base_stat}
                        </TableCell>
                        <TableCell>
                          <LinearProgress
                            variant="determinate"
                            value={stat.base_stat}
                            css={css`
                              max-width: 250px;
                              .MuiLinearProgress-bar1Determinate {
                                background-color: ${stat.base_stat <= 50
                                  ? palettes.pokeColors.red
                                  : palettes.pokeColors.green};
                              }
                            `}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabPanel>
              <TabPanel value={tabValue} index={2} dir={theme.direction}>
                <div
                  css={css`
                    ${cssDetailTypesWrapper(11, theme)}
                    margin-bottom: 100px;
                  `}
                >
                  {pokemonDetail.moves &&
                    pokemonDetail.moves.map((data, i) => (
                      <TypeChip key={i} name={data?.move?.name} />
                    ))}
                </div>
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
        <PokemonCatching pokemonDetail={{...pokemonDetail, name }} />
      </div>
      <div css={cssPageBackground(pokemonDetail.colorId)} />
    </>
  );
};

export default PokemonDetail;
