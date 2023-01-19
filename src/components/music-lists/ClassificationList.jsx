import { Stack } from "@mui/system";
import React from "react";
import ListCard from "./ListCard";
import omahLay from "../../assets/Artist-Omah-Lay.png";

function ClassificationList() {
  const list = [1, 2, 3, 4];
  return (
    <Stack
      sx={{ overflowX: "hidden" }}
      direction={"row"}
      spacing={2}
      justifyContent={"center"}
    >
      {list.map((music) => (
        <ListCard
          key={music}
          height={201.25}
          artist={"omah lay"}
          imgSrc={omahLay}
          secTypo={"8.5k plays"}
          maxWidth={137.77}
        />
      ))}
    </Stack>
  );
}

export default ClassificationList;
