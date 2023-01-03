import "./App.css";
import { Box } from "@mui/material";
import TopNavigation from "./components/navigation/TopNavigation";
import TrendingBox from "./components/trending/TrendingBox";
import MusicContent from "./components/landing/MusicContent";

function App() {
  return (
    <Box>
      <TopNavigation />
      <TrendingBox />
      <MusicContent />
    </Box>
  );
}

export default App;
