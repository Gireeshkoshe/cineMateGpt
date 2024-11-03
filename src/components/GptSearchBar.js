import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../utils/languageConstants"
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const searchText=useRef(null);
    const langKey=useSelector(store=>store.config.lang)
    
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json=await data.json();
        return json.results;
    }
    const handleGptSearchClick=async()=>{
        const gptQuery="Act as Movie Recommendation System and Suggest Some Movies for the query :"+searchText.current.value+".only give 5 names of movies . ,comma seprated like the example result given ahead. Example Result:Gadar,Don,Sholay,Golmal,Koi Mil Gya";
       const gptResults= await openai.completions.create({
            model: 'gpt-3.5-turbo',
            prompt: gptQuery,
            max_tokens: 6,
            temperature: 0,
          });
          if(!gptResults.choices)
          {
            ///take it to error page
          }
          // console.log(gptResults.choices?.[0]?.message?.content);
          const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
          const promiseArray=gptMovies.map((movie)=>searchMovieTMDB(movie));
          const tmdbResults=await Promise.all(promiseArray);
          dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    }
  return (
    <div className='pt-[40%] md:pt-0 md:pt-[10%] flex justify-center '>
      <form 
      onSubmit={(e)=> e.preventDefault()}
       className=' w-full md:w-1/2 bg-black grid grid-cols-12'>
        <input
        ref={searchText}
         type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button 
        className='py-2 px-4 m-4 bg-red-800 text-white rounded-lg col-span-3'
        onClick={handleGptSearchClick}
        >{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
