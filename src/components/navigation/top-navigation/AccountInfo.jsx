import React from "react";
import { NotificationAdd, SettingsOutlined } from "@mui/icons-material";
import { Badge, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function AccountInfo() {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <IconButton
        size={"large"}
        aria-label={"show 2 new notifications"}
        color={"inherit"}
      >
        <Badge badgeContent={2} color={"error"}>
          <NotificationAdd />
        </Badge>
      </IconButton>
      <IconButton
        size={"large"}
        aria-label={"show 2 new notifications"}
        color={"inherit"}
      >
        <Badge badgeContent={0} color={"error"}>
          <SettingsOutlined />
        </Badge>
      </IconButton>
      <Card
        sx={{
          width: 37,
          aspectRatio: 1,
          borderRadius: "50%",
          background: "#222215",
        }}
      >
        <CardMedia />
      </Card>
      <Typography component={"h3"} variant={"h6"}>
        Mayowa Olorunfemi
      </Typography>
    </Stack>
  );
}

export default AccountInfo;
