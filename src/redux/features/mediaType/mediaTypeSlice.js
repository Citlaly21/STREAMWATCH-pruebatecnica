import { createSlice } from '@reduxjs/toolkit';

const mediaTypeSlice = createSlice({
    name: 'mediaType',
    initialState: 'movies', 
    reducers: {
        setMediaType: (state, action) => action.payload,
    },
});

export const { setMediaType } = mediaTypeSlice.actions;
export default mediaTypeSlice.reducer;
