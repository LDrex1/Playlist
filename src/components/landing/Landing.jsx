import React from "react";
import { Grid } from "@mui/material";
import NavigationDrawer from "../navigation/side-navigation/NavigationDrawer";
import NowPlaying from "../now-playing/NowPlaying";
import TrendingBox from "../trending/TrendingBox";
import MusicContent from "./MusicContent";
import MainLandCont from "./MainLandCont";

function Landing() {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"stretch"}>
      <NavigationDrawer />
      <MainLandCont />
    </Grid>
  );
}

export default Landing;
