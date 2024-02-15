// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import mediaTypeReducer from '../features/mediaType/mediaTypeSlice';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    mediaType: mediaTypeReducer,
    movies: moviesReducer,
  },
});

export default store;