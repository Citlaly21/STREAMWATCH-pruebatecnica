// src/features/movies/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../../../data/movies.json';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    entries: moviesData.entries,
    page: 1,
    resultsPerPage: 10,
    type: 'movies', // Películas por defecto
  },
  reducers: {
    setMovies: (state, action) => {
      state.entries = action.payload.entries;
      state.page = action.payload.page;
      state.resultsPerPage = action.payload.resultsPerPage;
      state.type = action.payload.type;
    },
    goToNextPage: (state) => {
      if (state.page * state.resultsPerPage < state.entries.length) {
        state.page += 1;
      }
    },
    goToPreviousPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    setResultsPerPage: (state, action) => {
      state.resultsPerPage = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setMovies, goToNextPage, goToPreviousPage, setResultsPerPage, setType } = moviesSlice.actions;
export default moviesSlice.reducer;
