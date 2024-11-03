import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
   <>
    <div>
        <div className=' fixed -z-10'>
        <img className="h-screen object-cover md:w-screen" src={BG_URL} 
        alt="logo"/>
        </div >
        <div className=''>
          <GptSearchBar/>
          <GptMovieSuggestion/>
        </div>
      </div>
   </>
  )
}

export default GptSearch
