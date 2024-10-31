import React, { useEffect } from 'react'
import { addTrailerVideos } from '../utils/moviesSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { API_OPTIONS } from '../utils/constant';


const useMovieTrailer = ({movieId}) => {
    
     const dispatch=useDispatch();
    const getMovieVideos=async()=>{
         const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
         const json=await data.json(); 
         const filterdata=json.results.filter(video=>video.type==="Trailer")
         const trailer=filterdata.length?filterdata[0]:json.results[0];
         dispatch(addTrailerVideos(trailer));
    };
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer
