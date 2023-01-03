import { Grid } from "@mui/material";
import React from "react";
import ClassificationLists from "../music-lists/ClassificationLists";
import NowPlaying from "../now-playing/NowPlaying";

function MusicContent() {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"stretch"}
      mt={3}
    >
      <ClassificationLists />
      <NowPlaying />
    </Grid>
  );
}

export default MusicContent;
