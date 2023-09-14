import React from 'react'
import { Link } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center min-h-[100vh]'><HeaderHome/>
    <div className='h-[500px] md:h-[600px] flex flex-col items-center justify-evenly w-[350px] md:w-[500px] outline outline-1 outline-gray-300 dark:outline-gray-700 rounded-xl mt-6 bg-slate-50 dark:bg-zinc-900'>
    <div className='text-2xl dark:text-gray-400'></div>
       <div className='flex flex-col items-center w-full '>

    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none border border-1 border-gray-400' placeholder='Enter your Email...' />
    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none border border-1 border-gray-400' placeholder='Enter your Password...'/>
    <button className='w-4/5 h-[35px] rounded-md bg-orange-400 text-xl'>Login</button>
  </div>
  <div className='text-gray-400 flex justify-center'>
          Don't Have an Account ? <Link className='text-orange-400' to='/signup'>&nbsp;Signup</Link>
    </div>
    </div></div>
    
   
   
  )
}

export default LoginPage
