import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

function LongMusicCard({ image, name, artistName }) {
  return (
    <Card sx={{ display: "flex", background: "#222222" }}>
      <CardMedia
        sx={{ width: 100, height: 100 }}
        component={"img"}
        alt="song_img"
        image={image?.url || image}
      />
      <Stack sx={{}}>
        <CardContent sx={{ flex: "1 0 auto", color: "#ffffff" }}>
          <Typography component={"p"} variant={"p"}>
            {name}
          </Typography>
          <Typography variant="subtitle1">{artistName}</Typography>
        </CardContent>
      </Stack>
    </Card>
  );
}

export default LongMusicCard;
