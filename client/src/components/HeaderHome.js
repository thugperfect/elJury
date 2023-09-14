import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderHome = () => {

  const navigate = useNavigate()
  const reload = () =>{
    navigate('/')
    window.location.reload()
  }


   return (
    <div className='bg-white dark:bg-black  w-full md:h-[80px] h-[50px]  flex items-center justify-between'>
      <div onClick={reload}  className=' cursor-pointer text-gray-600 dark:text-gray-300 text-2xl md:text-4xl w-[150px] md:w-[200px] flex justify-center '>El Jury</div>
    </div>
  )
}

export default HeaderHome
