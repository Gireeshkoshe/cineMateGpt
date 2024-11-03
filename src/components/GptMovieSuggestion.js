import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
const GptMovieSuggestion = () => {
  const gpt=useSelector(store=>store.gpt);
  const {movieResults,movieNames}=gpt;
  if(!movieNames)return null;

  return (
      <div className="p-4 m-4 bg-black rounded-lg">
    {movieNames && movieNames.map((movieName, index) => (
      <MovieList key={movieName} title={movieResults[index]} movies={movieResults[0]} />
    ))}
  </div>
  )
}

export default GptMovieSuggestion
