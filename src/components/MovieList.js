import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    return (
        <div className='px-6 text-white'>
            <h1 className='text-lg md:py-2 text-2xl '>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    {movies?.length ? (
                        movies.map(movie => (
                            <MovieCard key={movie.id} posterpath={movie.poster_path} />
                        ))
                    ) : (
                        <p>No movies available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
