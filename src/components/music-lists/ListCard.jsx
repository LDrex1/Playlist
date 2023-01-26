import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ListCard(props) {
  const { maxWidth, height, imgSrc, artist, secTypo } = props;
  return (
    <Card
      sx={{
        background: "none",
        height: height,
        maxWidth: maxWidth,
        boxShadow: "none",
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
          {artist}
        </Typography>
        <Typography
          component={"p"}
          variant={"body2"}
          textTransform={"capitalize"}
          color={"white"}
          textAlign={"center"}
        >
          {secTypo} streams
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ListCard;
