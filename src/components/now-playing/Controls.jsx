import {
  FirstPageOutlined,
  PauseOutlined,
  PlayArrowOutlined,
  SkipNextOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

function Controls() {
  return (
    <Box sx={{ mt: -1.2 }}>
      <IconButton aria-label="previous song">
        <FirstPageOutlined />
      </IconButton>
      <IconButton aria-label={"pause"}>
        <PlayArrowOutlined />
        <PauseOutlined />
      </IconButton>
      <IconButton aria-label={"pause"}>
        <SkipNextOutlined />
      </IconButton>
    </Box>
  );
}

export default Controls;
