import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import { auth } from "../utils/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[issigninForm,setissigninForm]=useState(true)
    const[errorMessage,seterrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const handleButtonLCick=()=>{
        const message = checkValidData({ email: email.current.value, password: password.current.value });   
        seterrorMessage(message);
        if(message)return
        if(!issigninForm)
        {
            //sign up
            createUserWithEmailAndPassword(
                 auth,
                 email.current.value, 
                 password.current.value
            )
            .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName:name.current.value,
                         photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => { 
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL
                        }));
                        navigate("/browse")
                      }).catch((error) => {
                        seterrorMessage(error.message);
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorCode+"-"+errorMessage)
                });
        }
        else{
            //signin logic
            signInWithEmailAndPassword(
                auth,
                 email.current.value,
                 password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;

              console.log(user);
              navigate("/browse")

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode+"-"+errorMessage);

            });
        }
        
    }

    const toggleSigninForm=()=>{
        setissigninForm(!issigninForm);
    }
    return(
       <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="logo"/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className="absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-80">
            <h1 className="font-bold text-3xl p-4">{issigninForm?"Sign In":"Sign Up"}</h1>
            {!issigninForm&&(<input 
                ref={name}
                type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
            <input 
                ref={email}
                type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700" />
            <input
                ref={password}
                 type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-500">{errorMessage}</p>
            <button 
             onClick={handleButtonLCick}
                className="p-4 my-6 bg-red-700 w-full rounded-lg">
    
                    {issigninForm?"Sign In":"Sign Up"}
                </button>
            <p
             className="py-4  cursor-pointer"
             
              onClick={toggleSigninForm}>
                {issigninForm?"New to Netflix? SignUp Now":"Already Registered? SignIn Now"}</p>
        </form>
       </div>
    )
}
export default Login