import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    gptMovieList: null,
  },
  reducers: {
    toogleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieList: (state, action) => {
      const { movieName, movieList } = action.payload;
      state.gptMovieList = movieList;
      state.movieName = movieName;
    },
    clearGptMovieList: (state) => {
      state.gptMovieList = null;
      state.movieName = null;
    },
  },
});

export const { toogleGptSearch, addGptMovieList, clearGptMovieList } =
  gptSlice.actions;
export default gptSlice.reducer;
