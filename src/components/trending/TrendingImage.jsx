import { CardMedia, Card } from "@mui/material";
import React from "react";
import omahLay from "../../assets/Artist-Omah-Lay.png";

function TrendingImage({ image }) {
  return (
    <Card
      sx={{
        position: "absolute",
        right: "8%",
        top: 0,
        background: "none",
        mixBlendMode: "color-dodge",
        zIndex: -1,
      }}
    >
      <CardMedia
        component={"img"}
        alt={"artist_image"}
        image={image}
        height={500}
        width={400}
      />
    </Card>
  );
}

export default TrendingImage;
