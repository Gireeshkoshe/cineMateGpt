import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ?
         (<GptSearch/>) :
        (<>
        <MainContainer/>
        <SecondryContainer/>
        </>)
      }
    </div>
  )
}

export default Browse
