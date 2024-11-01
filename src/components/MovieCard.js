import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'>
      <img 
      alt='movieCard'
      src={IMG_CDN_URL+posterpath}
       />
    </div>
  )
}

export default MovieCard
