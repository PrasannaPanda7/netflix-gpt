import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: {
      mainTrailer: null,
      trailerVideo: null,
    },
    nowPlayingMovies: null,
    popularMovies: null,
    topRated: null,
    related: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      const { finalTrailer, mainTrailer: isMainTrailer } = action.payload;
      if (isMainTrailer) {
        state.trailerVideo.mainTrailer = finalTrailer;
      } else {
        state.trailerVideo.trailerVideo = finalTrailer;
      }
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addRelatedMovies: (state, action) => {
      state.related = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addRelatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
