import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR, LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import {toogleGptSearchView} from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handlesignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleGptSearch=()=>{
    dispatch(toogleGptSearchView());
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser({}));
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[])
  const handleLanguageChange=(e)=>{
   console.log(e.target.value);
   dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:justify-between p-2 md:flex-row ">
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo' />
      {user &&(
        <div
         className='flex p-2 justify-between'>
        {showGptSearch &&
          <select 
          onChange={handleLanguageChange} className='p-2 bg-gray-500 text-white h-10 mt-2 mr-2 rounded-lg'>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.idetifier} value={lang.idetifier}>{lang.name}</option>)}
          </select>
        }
        <button onClick={handleGptSearch} className='w-22 text-white py-2 px-6 bg-purple-800 m-2 rounded-lg '>{showGptSearch?"HomePage":"GPT-Search"}</button>
        <img className='hidden md:block w-10 h-10 m-2'
          src={AVATAR}
          alt='usericon'
        />
        <button onClick={handlesignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header
