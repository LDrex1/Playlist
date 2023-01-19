import React from "react";
import { Grid } from "@mui/material";
import NowPlaying from "../../components/now-playing/NowPlaying";
import TrendingBox from "../../components/trending/TrendingBox";
import MusicContent from "./MusicContent";

function MainLandCont() {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item md={12}>
        <TrendingBox />
      </Grid>
      <Grid item mt={5} md={7.6}>
        <MusicContent />
      </Grid>
      <Grid item mt={5} md={4}>
        <NowPlaying />
      </Grid>
    </Grid>
  );
}

export default MainLandCont;
