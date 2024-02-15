import { configureStore } from '@reduxjs/toolkit';
import mediaTypeReducer from '../features/mediaType/mediaTypeSlice';
import moviesReducer from '../features/movies/moviesSlice';
import popupReducer from '../../redux/features/popUp/popupSlice';
export const store = configureStore({
  reducer: {
    mediaType: mediaTypeReducer,
    movies: moviesReducer,
    popup: popupReducer
  },
});

export default store;