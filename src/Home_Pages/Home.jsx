import React from 'react'
import Home_header from './Home-Header/Home_hearder'
import NavBar from './Navbar/NavBar'
import Sesrch_Fileds from './Navbar/Sesrch_Fileds'
import Logo from './Navbar/Logo'


export default function Home() {
  return (
    <div>
          <Home_header></Home_header>
          <div className='flex items-center justify-between mt-8'>
            <Logo></Logo>
            <Sesrch_Fileds></Sesrch_Fileds>
            <NavBar></NavBar>
          </div>
    </div>
  )
}
