// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { supabase } from '../Components/Supabase';

/* The code is defining a React functional component called `SignUp`. */
/**
 * The above function is a React component that renders a sign-up form and handles form submission
 * using Supabase authentication.
 * @returns The function `SignUp` returns a JSX element, which represents the UI of a sign-up form in a
 * React application.
 */
export default function SignUp() {
   /**
    * The above function is a React hook that updates the state of a sign up form data object when the
    * user enters input in the form fields.
    */
    const [signUpData, setSignUpData] = useState({
        firstName:'', lastName:'', email:'', password:''
    })
    
    function handleChange(event){
        setSignUpData((prevsignUpData)=>{
            return{
                ...prevsignUpData,
                [event.target.name]:event.target.value
            }
        })
    }
  
    
   /**
    * The above function is an asynchronous function that handles form submission for signing up a user
    * using Supabase authentication in a React application.
    */
    async function handleSubmit(event){
        event.preventDefault()
        try {
            const { error } = await supabase.auth.signUp(
                {
                email: signUpData.email,
                password: signUpData.password,
                options: {
                    data: {
                    first_name: signUpData.firstName,
                    Last_name: signUpData.lastName,
                    }
                }
                }
            )
            if(error) throw error
            alert('Make sure that yo have filled in all your details')
        }
        catch(error){
            alert(error.message)
        }
    }
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-700 to-slate-700 sm:flex-row">
      <div className="sm:w-1/2 flex items-center justify-center">
      <img
          className="w-[113.10px] h-32 rounded-[160px] border border-blue-700 border-opacity-0 absolute top-[90px] image-appear"
          src="./src/assets/LulaPlay-Logo.png"
          alt="LulaPlay Logo"
        />
        <div className="text-white text-center">
          <h1 className="text-4xl font-semibold m-4">Join Us!</h1>
          <p className="text-lg mb-8" >Create an account to access our features.</p>
        </div>
      </div>

      <div className="sm:w-1/2 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-4/5 max-w-xs">
          <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-semibold mb-8 text-white">Sign Up</h2>
            <div className="mb-4">
              <input
                onChange={handleChange}
                name="firstName"
                type="surname"
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Name*"
              />
            </div>
            <div className="mb-4">
              <input
              onChange={handleChange}
                name="lastName"
                type="surname"
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Surname*"
              />
            </div>
            <div className="mb-4">
              <input
              onChange={handleChange}
                name="email"
                type="email"
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Email*"
              />
            </div>
            <div className="mb-4">
              <input
                onChange={handleChange}
                name="password"
                type="password"
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Password*"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white bg-opacity-20 text-white text-base font-medium py-2 px-4 rounded focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

