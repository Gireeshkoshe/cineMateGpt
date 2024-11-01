import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 text-white bg-gradient-to-r from-black absolute '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/4 py-6 text-lg'>{overview}</p>
      <div>
        <button className='bg-white text-black p-3 px-10 text-xl rounded-lg hover:bg-opacity-80 '>▶️ Play</button>
        <button className='mx-3 bg-gray-500 text-white p-3 px-10 text-xl rounded-lg bg-opacity-50'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
