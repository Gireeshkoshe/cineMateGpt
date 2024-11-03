import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies=()=>{
const dispatch=useDispatch();
const topRatedMovies=useSelector(store=>store.movies.TopRatedMovies);
  const TopRatedMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    )
    const json=await data.json();
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=>{
    !topRatedMovies&&TopRatedMovies();
  },[])  
};
export default useTopRatedMovies;