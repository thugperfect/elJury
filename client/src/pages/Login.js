import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (

    <>

<div>

</div>
     <div className='flex flex-col items-center w-full'>
    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Email...' />
    <input type="text" name="" id="" className='w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none' placeholder='Enter your Password...'/>
    <button className='w-4/5 h-[35px] rounded-md bg-orange-400 text-xl'>Login</button>

  </div>
  <div className='text-gray-400'>
          Don't Have an Account ? <Link className='text-orange-400' to='/signup'>&nbsp;Signup</Link>
        </div>
    
    </>
   
  )
}

export default Login
