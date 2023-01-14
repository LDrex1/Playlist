import React from "react";
import { Grid } from "@mui/material";
import NowPlaying from "../now-playing/NowPlaying";
import TrendingBox from "../trending/TrendingBox";
import MusicContent from "./MusicContent";

function MainLandCont() {
  return (
    <Grid item md={10.5}>
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
    </Grid>
  );
}

export default MainLandCont;
