import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Box } from "@mui/material";
import TopNavigation from "./components/navigation/TopNavigation";
import TrendingBox from "./components/trending/TrendingBox";

function App() {
  return (
    <Box>
      <TopNavigation />
      <TrendingBox />
    </Box>
  );
}

export default App;
