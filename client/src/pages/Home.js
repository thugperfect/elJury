import React, { useState } from 'react'
import HeaderHome from '../components/HeaderHome'
import BodyHome from '../components/BodyHome'

const Home = ({size}) => {

  const [page,setPage] = useState()
  return (
    <div className='w-full min-h-[100vh] relative'>
     <HeaderHome setPage={setPage} size={size}/>  
     <BodyHome size={size} />   
    </div>
  )
}

export default Home
