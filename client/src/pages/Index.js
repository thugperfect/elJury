import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div><Navbar/>
    <Outlet/>
    </div>
  )
}

export default Index
