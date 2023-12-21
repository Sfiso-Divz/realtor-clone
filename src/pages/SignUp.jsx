import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function SignUp() {

  const [showPassword, setShowPasssword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  function onChange(e){
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  const {name, email, password} = formData
  return (
  
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up </h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
          <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
            <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key" 
            className='w-full rounded-2xl'
            />
          </div>
          <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form >
              <input className='w-full px-4 py-2 text-xl text-gray-700 mb-6  bg-white border-gray-300 rounded transition ease-in-out' type="name" id='name' value={name} onChange={onChange} placeholder='Full Name' />
              <input className='w-full px-4 py-2 text-xl text-gray-700 mb-6  bg-white border-gray-300 rounded transition ease-in-out' type="email" id='email' value={email} onChange={onChange} placeholder='Email address' />

              <div className='relative mb-6'>
              <input className='w-full px-4 py-2 text-xl text-gray-700  bg-white border-gray-300 rounded transition ease-in-out' type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password' />
              { showPassword ? (
                <FaEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPasssword((prevState) => !prevState)} />
              ): ( <FaEyeSlash className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPasssword((prevState) => !prevState)} />)}
              </div>

              <div className='flex justify-between whitespace-nowrap text-sm md:text-lg mb-6'>
                <p>Have an account? <Link to='/sign-in' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out'>Sign In</Link></p>
                <p><Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot password?</Link></p>
              </div>

              <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out active:bg-blue-800'>Sign Up</button>
              <div className='my-4 flex items-center before:border-t  before:flex-1  before:border-gray-300 after:border-t  after:flex-1  after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth />
            </form>
            
          </div>
        </div>
      </section>
    
  )
}
