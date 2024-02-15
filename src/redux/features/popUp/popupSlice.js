import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
    isOpen: false,
    movie: null,
},

    reducers: {
        openPopup: (state, action) => {
            state.isOpen = true;
            state.movie = action.payload;
    },
closePopup: (state) => {
        state.isOpen = false;
        state.movie = null;
    },
},
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
