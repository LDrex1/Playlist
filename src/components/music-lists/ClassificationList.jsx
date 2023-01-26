import React from "react";
import { Stack } from "@mui/system";
import ListCard from "./ListCard";
// import omahLay from "../../assets/Artist-Omah-Lay.png";

function ClassificationList({ tracks }) {
  return (
    <Stack
      sx={{ overflowX: "hidden" }}
      direction={"row"}
      spacing={2}
      justifyContent={"center"}
    >
      {tracks?.slice(0, 4).map(({ chartEntryData, trackMetadata }, index) => {
        const { previousRank, currentRank, rankingMetric } = chartEntryData;
        const streams = rankingMetric.value;
        const {
          trackName: name,
          trackUrl: url,
          displayImageUri: image,
          artists: allArtists,
        } = trackMetadata;
        const artistName = allArtists.reduce((acc, { name }) => {
          return acc + name + " ";
        }, "");
        return (
          <ListCard
            key={currentRank}
            name={name}
            height={210}
            artist={artistName}
            imgSrc={image}
            secTypo={streams}
            maxWidth={140.77}
          />
        );
      })}
    </Stack>
  );
}

export default ClassificationList;
