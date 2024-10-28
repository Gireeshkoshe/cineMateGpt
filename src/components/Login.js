import { useState } from "react"
import Header from "./Header"

const Login=()=>{
    const[issigninForm,setissigninForm]=useState(true)
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
        <form className="absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-80">
            <h1 className="font-bold text-3xl p-4">{issigninForm?"Sign In":"Sign Up"}</h1>
            {!issigninForm&&(<input 
                type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
            <input 
                type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700" />
            <input
                 type="password" placeholder="password" className="p-4 my-4 w-full bg-gray-700"/>
            <button 
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