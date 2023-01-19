import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../features/music/musicSlice";
import playerReducer from "../features/player/playerSlice";

export default configureStore({
  reducer: {
    music: musicReducer,
    player: playerReducer,
    users: "",
  },
});
