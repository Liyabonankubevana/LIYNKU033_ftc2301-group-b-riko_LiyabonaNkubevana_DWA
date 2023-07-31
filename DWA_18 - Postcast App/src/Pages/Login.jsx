// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { supabase } from '../Components/Supabase';
import HomePage from './Home';

export default function SignIn() {
/**
 * The above function is a React hook that updates the formData state object with the values entered in
 * the input fields.
 */
const [formData, setFormData] = useState({
    email:'', password:''
})

function handleChange(event){
    setFormData((prevFormData)=>{
        return{
            ...prevFormData,
            [event.target.name]:event.target.value
        }
    })
}

/**
 * The above function is an async function that handles form submission in a JavaScript React
 * application, attempting to sign in a user using Supabase authentication and displaying an error
 * message if the sign-in fails.
 */
async function handleSubmit(event){
    event.preventdefault()
   try { const { data, error } = await supabase.auth.signIn({
    email: formData.email,
    password: formData.password,
    options: {
        data: {
            email: formData.email
            }
        }
        }
    )
    if(error) throw error
    alert('Incorrect Email or Password. Try again!') 
    }
    catch(error) {
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
          <h1 className="text-4xl font-semibold m-8">Welcome!</h1>
          <p className="text-lg">Login, it is Lula.</p>
        </div>
      </div>

      <div className="sm:w-1/2 flex items-center justify-center mt-20">
        <form onSubmit={handleSubmit} className="w-4/5 max-w-xs">
          <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-white border-opacity-20">
            <h2 className="text-2xl font-semibold mb-8 text-white">Login</h2>
            <div className="mb-4">
              <input
                name='email'
                onChange={handleChange}
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Email*"
              />
            </div>
            <div className="mb-4">
              <input
                name='password'
                onChange={handleChange}
                type='password'
                required
                className='w-full h-10 px-3 bg-transparent text-white placeholder-white transition-all duration-300 border border-white border-opacity-40'
                placeholder="Password*"
                
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white bg-opacity-20 text-white text-base font-medium py-2 px-4 rounded focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}