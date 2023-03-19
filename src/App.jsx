import "./App.css";
import { Box, Grid } from "@mui/material";
import TopNavigation from "./components/navigation/top-navigation/TopNavigation";
import NavigationDrawer from "./components/navigation/side-navigation/NavigationDrawer";
import MainLandCont from "./pages/landing/MainLandCont";
import Landing from "./pages/landing/Landing";
import SearchResult from "./pages/landing/SearchResult";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Box>
      <TopNavigation setSearch={setSearch} />
      <Grid container justifyContent={"space-between"} alignItems={"stretch"}>
        <NavigationDrawer />
        <Grid item xs={12} md={10}>
          {search ? <SearchResult search={search} /> : <MainLandCont />}
        </Grid>
      </Grid>
      {/* <Landing /> */}
    </Box>
  );
}

export default App;
