import React from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Slider,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ListCard from "../music-lists/ListCard";
import omahLay from "../../assets/Artist-Omah-Lay.png";
import Controls from "./Controls";
import { ArrowDropUpOutlined } from "@mui/icons-material";

function NowPlaying(props) {
  const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
    marginTop: 0,
  });

  return (
    <Grid
      item
      md={4}
      sx={{
        background: props.backgtound || "rgba(74, 54, 119, 0.8)",
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
        <Stack mt={3} alignItems={"center"} justifyContent={"space-between"}>
          <ListCard
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
            <Box
              sx={{
                mt: -2,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TinyText>0:25</TinyText>
              <TinyText>-3:05</TinyText>
            </Box>
            <Controls />
          </Stack>
          <Box>
            <IconButton sx={{ pb: 0 }}>
              <ArrowDropUpOutlined />
            </IconButton>
            <Typography>Lyrics</Typography>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
}

export default NowPlaying;
