import { Box, Stack } from "@mui/material";
import React from "react";
import TrendingImage from "./TrendingImage";
import TrendingInfo from "./TrendingInfo";

function TrendingBox({ name, artistName, image }) {
  return (
    <Stack alignItems={"center"} sx={{ position: "relative", pt: 2 }}>
      <TrendingInfo name={name} artistName={artistName} />
      <TrendingImage image={image} />
    </Stack>
  );
}

export default TrendingBox;
