import React, { useState } from "react";
import {
  NotificationAdd,
  SettingsOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { Badge, Button, Card, CardMedia, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import device from "../../devices";

function AccountInfo() {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <>
      <Button
        sx={{
          color: "whitesmoke",
          [`@media ${device.mobileL}`]: {
            display: "none",
          },
        }}
        onClick={() => setOpenInfo((prev) => !prev)}
        startIcon={<MenuOutlined />}
      ></Button>
      <Stack
        sx={{
          background: "#222222",
          borderRadius: 5,
          position: "absolute",
          top: 40,
          right: 0,
          flexDirection: "column",
          visibility: openInfo ? "visible" : "hidden",
          [`@media ${device.mobileL}`]: {
            position: "static",
            background: "none",
            flexDirection: "row",
            visibility: "visible",
          },
        }}
        rowGap={0.1}
        direction={"row"}
        alignItems={"center"}
      >
        <Button
          sx={{ color: "whitesmoke" }}
          endIcon={
            <IconButton
              size={"large"}
              aria-label={"show 2 new notifications"}
              color={"inherit"}
            >
              <Badge badgeContent={2} color={"error"}>
                <NotificationAdd />
              </Badge>
            </IconButton>
          }
        >
          Olorunfemi
        </Button>
        <IconButton color={"inherit"} size={"large"}>
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
          <CardMedia component={"img"} sec="" />
        </Card>
      </Stack>
    </>
  );
}

export default AccountInfo;
