import React from 'react'
import HeaderHome from '../components/HeaderHome'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex flex-col items-center min-h-[100vh]'><HeaderHome/>
    <div className='h-[600px] flex flex-col items-center justify-evenly w-[500px] outline outline-1 outline-gray-300 rounded-xl mt-6'>
    <div className='text-2xl dark:text-gray-400'>Create Account</div>
       <div className='flex flex-col items-center w-full '>
        <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Name...' />
        <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Phone...' />

    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Email...' />
    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Password...'/>
    <button className='w-4/5 h-[35px] rounded-md bg-orange-400 text-xl'>Login</button>
  </div>
  <div className='text-gray-400 flex justify-center'>
          Already Have an Account ? <Link className='text-orange-400' to='/'>&nbsp;Login</Link>
    </div>
    </div>
    
    </div>
 
  )
}

export default Signup