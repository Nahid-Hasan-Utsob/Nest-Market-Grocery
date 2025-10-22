import React from 'react'
import logo from '../../../assets/Icon-Images/Nest.svg'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={'/'} >
      <img className='lg:w-full w-[110px]' src={logo} alt="" />
</Link>
  )
}
