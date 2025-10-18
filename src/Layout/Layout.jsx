import React from 'react'
import Home from '../Home_Pages/Home'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='lato-regular max-w-[1500px] mx-auto'>
      <Outlet></Outlet>
    </div>
  )
}
