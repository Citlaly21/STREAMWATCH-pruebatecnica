import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

const seriesSlices = createSlice({
    name: "series",
    initialState,
    reducers:{
        addSerie(state, action){
            state.push(action.payload)
        }
    }
})