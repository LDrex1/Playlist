import React from "react";
import { Box, Grid, Typography, Stack, Slider } from "@mui/material";
import ListCard from "../music-lists/ListCard";
import omahLay from "../../assets/Artist-Omah-Lay.png";

function NowPlaying() {
  return (
    <Grid
      item
      md={4}
      sx={{
        background: "rgba(97, 25, 152,0.8)",
        borderRadius: 10,
        px: 3,
        py: 3,
        zIndex: 0,
      }}
    >
      <Box sx={{ borderRadius: 10 }}>
        <Stack
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
          direction={"row"}
        >
          <Typography
            gutterBottom
            textTransform={"capitalize"}
            zIndex={1000}
            variant={"h6"}
          >
            Now playing
          </Typography>
          <Typography
            gutterBottom
            textTransform={"capitalize"}
            variant={"caption"}
          >
            see all
          </Typography>
        </Stack>
        <Stack mt={3} alignItems={"center"}>
          <ListCard
            height={400}
            maxWidth={250}
            artist={"omah lay"}
            imgSrc={omahLay}
            secTypo={"made in lagos"}
          />
          <Stack alignItems={"center"} sx={{ width: "80%" }}>
            <Slider
              aria-label={"time-indicator"}
              size={"small"}
              value={30}
              min={0}
              max={100}
            />
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
}

export default NowPlaying;
