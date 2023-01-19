import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import client from "../../api/client";

const musicAdapter = createEntityAdapter({
  //   sortComparer: (a, b) => a.title - b.title,
});

const initialState = musicAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchMusic = createAsyncThunk("music/fetchMusic", async () => {
  const response = await client();
  return response.data;
});

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMusic.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(fetchMusic.fulfilled, (state, _) => {
      state.status = "fulfilled";
      musicAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchMusic.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const {
  selectAll: allMusic,
  selectById: musicById,
  selectIds: musicbyIds,
} = musicAdapter.getSelectors((state) => state.music);

export default musicSlice.reducer;
