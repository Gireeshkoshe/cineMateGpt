import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlyaingmovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlyaingmovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addTrailerVideos:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.UpComingMovies=action.payload;
        },
        
    }
});
export const {addNowPlayingMovies,addTrailerVideos,addPopularMovies,addTopRatedMovies,addUpComingMovies}=movieSlice.actions
export default movieSlice.reducer;