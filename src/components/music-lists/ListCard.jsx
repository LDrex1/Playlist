import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import device from "../devices";

function ListCard(props) {
  const { maxWidth, height, imgSrc, artist, secTypo, name } = props;
  return (
    <Card
      sx={{
        background: "none",
        height: 230,
        maxWidth: maxWidth,
        boxShadow: "none",
        [`@media (${device.mobileS})`]: {
          height: height,
        },
      }}
    >
      <CardMedia
        sx={{
          borderRadius: 5,
        }}
        component={"img"}
        alt={"song_image"}
        image={imgSrc}
      />
      <CardContent color={"white"}>
        <Typography
          variant={"h6"}
          textTransform={"capitalize"}
          color={"white"}
          textAlign={"center"}
        >
          {name?.slice(0, 9) + `${name?.length > 10 ? "..." : ""}`}
        </Typography>
        <Typography
          component={"p"}
          variant={"body2"}
          textTransform={"capitalize"}
          color={"white"}
          textAlign={"center"}
        >
          {artist}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListCard;
