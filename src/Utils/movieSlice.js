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
    addPopularMovie: (state, actions) => {
      state.popularMovie = actions.payload;
    },
    addTrendingMovie: (state, actions) => {
      state.trendingMovie = actions.payload;
    },
    addTrailerVideo: (state, actions) => {
      state.trailerVideo = actions.payload;
    },
    addUpcomingMovie: (state, actions) => {
      state.upcomingMovie = actions.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addPopularMovie,
  addTrendingMovie,
  addUpcomingMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
