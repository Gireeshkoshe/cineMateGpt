import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpComingMovies=()=>{
const dispatch=useDispatch();
const upComingMovies=useSelector(store=>store.movies.UpComingMovies);
  const UpComingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    )
    const json=await data.json();
    dispatch(addUpComingMovies(json.results))
  }
  useEffect(()=>{
    !upComingMovies&&UpComingMovies();
  },[])  
};
export default useUpComingMovies;