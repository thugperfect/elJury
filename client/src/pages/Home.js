import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='bg-red-500'>HOME</h1>
      <Outlet/>
    </div>
  )
}

export default Home
