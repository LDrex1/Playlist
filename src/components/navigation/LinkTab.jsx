import React from "react";
import { Tab } from "@mui/material";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(ev) => {
        ev.preventDefault();
      }}
      sx={{ textTransform: "uppercase" }}
      {...props}
    />
  );
}

export default LinkTab;
