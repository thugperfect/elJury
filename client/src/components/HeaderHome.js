import React from 'react'
import Login from './Login'

const HeaderHome = ({size}) => {
  return (
    <div className='bg-white dark:bg-black  w-full md:h-[80px] h-[50px]  flex items-center justify-between'>
      <div className='text-gray-600 dark:text-gray-300 text-2xl md:text-4xl w-[150px] md:w-[200px] flex justify-center '>El Jury</div>
    {
     
    <div className='text-white'>Login</div>
    }
    </div>
  )
}

export default HeaderHome
