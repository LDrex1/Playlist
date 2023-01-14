import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { listsSide } from "../NavigationData";
import { CustomTab, CustomTabs } from "../../custom-mui/Tabs";
function NavigationDrawer() {
  return (
    <Grid item mt={5} md={1.5}>
      <Stack>
        <Box>
          <Typography component={"p"} variant={"h6"}>
            Music
          </Typography>
          <CustomTabs orientation={"vertical"}>
            {listsSide.map(({ name, icon }) => (
              <CustomTab
                key={name}
                icon={icon}
                iconPosition={"start"}
                label={name}
              />
            ))}
          </CustomTabs>
        </Box>
      </Stack>
    </Grid>
  );
}

export default NavigationDrawer;
