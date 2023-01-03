import { Box, Stack } from "@mui/material";
import React from "react";
import TrendingImage from "./TrendingImage";
import TrendingInfo from "./TrendingInfo";

function TrendingBox() {
  return (
    <Stack alignItems={"center"} sx={{ position: "relative", pt: 8 }}>
      <TrendingInfo />
      <TrendingImage />
    </Stack>
  );
}

export default TrendingBox;
