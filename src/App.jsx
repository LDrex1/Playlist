import "./App.css";
import { Box } from "@mui/material";
import TopNavigation from "./components/navigation/top-navigation/TopNavigation";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <Box>
      <TopNavigation />
      <Landing />
    </Box>
  );
}

export default App;
