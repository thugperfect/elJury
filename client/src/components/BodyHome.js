import React from 'react'
import {Link} from 'react-router-dom'
import Login from '../pages/Login'
const BodyHome = () => {

  
  return (
    <div className='w-full flex'>
      <div className=' w-1/3 min-h-[89vh]  bg-gray-100 dark:bg-zinc-800 flex flex-col justify-evenly items-center'>
       

        <Login/>
       

      </div>
      <div className='w-2/3 min-h-[89vh] bg-slate-200 dark:bg-zinc-900' >


      </div>
    </div>
  )
}

export default BodyHome
