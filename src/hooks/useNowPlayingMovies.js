import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies=()=>{
const dispatch=useDispatch();
const nowPlayingMovies=useSelector(store=>store.movies.nowPlyaingmovies);

  const NowPlayingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    )
    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(()=>{
    //memoization
    if(!nowPlayingMovies)NowPlayingMovies();
  },[])  
};
export default useNowPlayingMovies;