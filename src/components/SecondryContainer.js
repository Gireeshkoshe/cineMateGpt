import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {
    const movies=useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
        <div className='mt-0 md:-mt-40 z-20 relative pl-12'>
            <MovieList title={"Now Playing"} movies={movies.nowPlyaingmovies}/>
            <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.UpComingMovies}/>
        </div>
    </div>
  )
}

export default SecondryContainer
