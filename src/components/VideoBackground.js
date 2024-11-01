import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer({movieId});
  return (
    <div>
        <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay;modestbranding=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
    </div>
  )
}

export default VideoBackground
