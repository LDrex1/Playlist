import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ClassificationList from "./ClassificationList";

function ClassificationLists() {
  const list = ["top artists", "billboard topcharts"];
  return (
    <Box>
      {list.map((musicClass, index) => (
        <Box
          sx={{
            background: "#333345",
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            placeItems: "center",

            px: 3.5,
            pt: 2,
            pb: 3,
            marginBottom: index === list.length - 1 ? 0 : 4,
          }}
        >
          <Stack
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
            direction={"row"}
          >
            <Typography
              gutterBottom
              textTransform={"capitalize"}
              variant={"h6"}
            >
              {musicClass}
            </Typography>
            <Typography
              gutterBottom
              textTransform={"capitalize"}
              variant={"caption"}
            >
              see all
            </Typography>
          </Stack>
          <ClassificationList />
        </Box>
      ))}
    </Box>
  );
}

export default ClassificationLists;
