import React from "react";
import { Grid } from "@mui/material";
import NavigationDrawer from "../../components/navigation/side-navigation/NavigationDrawer";
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
