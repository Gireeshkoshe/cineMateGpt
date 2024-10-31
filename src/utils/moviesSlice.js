import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlyaingmovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlyaingmovies=action.payload;
        }
    }
});
export const {addNowPlayingMovies}=movieSlice.actions
export default movieSlice.reducer;