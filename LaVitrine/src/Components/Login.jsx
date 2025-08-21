import React from 'react'
import { contextCall } from '../Utlity/MyContext'
import { useNavigate } from 'react-router-dom'
import NavLogin from "./NavLogin"


const Login = () => {
  const { user, setUser, password, setPassword } = contextCall()
  const Navigate = useNavigate()

  function userInputHandler(e) {
    setUser(e.target.value)
  }
  function passwordInputHandler(e) {
    setPassword(e.target.value)
  }
  function loginBtnHandler(e) {
    if (!user || !password) {
      alert("Enter Login details")
    }
    // Navigate("/home")
    Navigate("/hextended")
  }





  return (
    <>

      <NavLogin />

      <div className='min-h-screen flex justify-center items-center  bg-gray-900 '>

        <div className='bg-gray-800  p-8 rounded-2xl shadow-lg w-80'>

          <h2 className='text-2xl font-bold mb-6 text-center text-[#0f7f87]'>Login</h2>
          <input
            onChange={userInputHandler}
            placeholder='Enter User ID'
            type='text'
            className='  bg-gray-700 w-full mb-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9ACBD0]'
          />

          <input
            onChange={passwordInputHandler}
            placeholder='Enter Password'
            type='password'
            className=' bg-gray-700 w-full mb-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#9ACBD0]'
          />

          <button
            onClick={loginBtnHandler}
            className='w-full bg-[#006A71] text-white py-2 rounded hover:bg-[#749ea2] transition duration-300'>
            Log In
          </button>

        </div>

      </div>
    </>
  )
}

export default Login