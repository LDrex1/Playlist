import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { listsSide } from "../NavigationData";
import { CustomTab, CustomTabs } from "../../custom-mui/Tabs";
import { size } from "../../devices";
function NavigationDrawer() {
  const [deviceSize, setDeviceSize] = useState(null);

  const checkWindowWidth = () => {
    setDeviceSize(() =>
      innerWidth > +size.mobileL.match(/\d+/).join() ? "large" : "small"
    );
  };

  useEffect(() => {
    addEventListener("resize", checkWindowWidth);
    addEventListener("loadstart", checkWindowWidth);
    return () => {
      removeEventListener("resize", checkWindowWidth);
      removeEventListener("loadstart", checkWindowWidth);
    };
  }, [innerWidth]);

  return (
    <Grid item mt={5} sm={1.2}>
      <Stack>
        <Box>
          <Typography
            textTransform={"uppercase"}
            component={"p"}
            variant={"h6"}
          >
            Music
          </Typography>
          <CustomTabs orientation={"vertical"}>
            {listsSide.map(({ name, icon }) => (
              <CustomTab
                sx={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  maxWidth: 20,
                  minHeight: 50,
                  justifyContent: "start",
                }}
                // component={Link}
                key={name}
                icon={icon}
                // to="/"
                iconPosition={"start"}
                label={deviceSize === "large" && name}
              />
            ))}
          </CustomTabs>
        </Box>
      </Stack>
    </Grid>
  );
}

export default NavigationDrawer;
