import React from "react";
import { PlayArrow, PlusOne } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

function TrendingInfo() {
  const SkyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[300],
    borderRadius: 15,
    "&:hover": {
      backgroundColor: blue[700],
    },
  }));

  const Buttons = (
    <Stack direction={"row"} spacing={2}>
      <SkyButton
        sx={{ px: 3, py: 1.7 }}
        variant="contained"
        endIcon={<PlayArrow />}
      >
        Play Now
      </SkyButton>

      <IconButton sx={{ background: "#fff3ff", borderRadius: "10px", px: 2 }}>
        <PlusOne />
      </IconButton>
    </Stack>
  );

  console.log(Buttons, "jh");

  return (
    <Box sx={{ width: "80%" }}>
      <Typography component={"p"} mb={2}>
        Trending
      </Typography>
      <Typography component={"h3"} variant={"h3"}>
        Godly
      </Typography>
      <Typography component={"p"} mt={1.6} mb={4}>
        Omah Lay
      </Typography>
      {Buttons}
    </Box>
  );
}

export default TrendingInfo;
