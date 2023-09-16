import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Index = ({size}) => {
  return (
    <div><Navbar size={size}/>
    <Outlet/>
    </div>
  )
}

export default Index
