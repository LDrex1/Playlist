import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import NavigationDrawer from "../../components/navigation/side-navigation/NavigationDrawer";
import MainLandCont from "./MainLandCont";
import { useEffect } from "react";
import { createEntityAdapter } from "@reduxjs/toolkit";
import client from "../../api/client";
// import { fetchMusic } from "../../features/music/MusicSlice";

function Landing() {
  //   const dispatch = useDispatch();
  //   const { music, status, error } = useSelector((state) => state.music);
  //   useEffect(() => {
  //     if (status === "idle") {
  //       dispatch(fetchMusic());
  //     }
  //   }, [status, dispatch]);
  return (
    <Grid container justifyContent={"space-between"} alignItems={"stretch"}>
      <NavigationDrawer />
      <MainLandCont />
    </Grid>
  );
}

export default Landing;
