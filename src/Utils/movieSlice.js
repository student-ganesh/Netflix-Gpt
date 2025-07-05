import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailerVideo: null,
  },

  reducers: {
    addNowPlayingMovie: (state, actions) => {
      state.nowPlayingMovie = actions.payload;
    },
    addTrailerVideo: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
  },
});

export const { addNowPlayingMovie, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;
