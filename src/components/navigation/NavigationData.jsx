import React from "react";
import { Album, Explore, Home, Person, Videocam } from "@mui/icons-material";

// Top nav list
export const listsTop = [
  {
    name: "music",
    href: "#",
  },

  {
    name: "live",
    href: "#",
  },
  {
    name: "podcast",
    href: "#",
  },
];

//Side nav list

export const listsSide = [
  { name: "home", icon: <Home /> },
  { name: "explore", icon: <Explore /> },
  { name: "albulms", icon: <Album /> },
  { name: "artists", icon: <Person /> },
  { name: "videos", icon: <Videocam /> },
];
