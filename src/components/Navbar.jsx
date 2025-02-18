import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-10 mb-10 justify-start text-green-600 text-2xl '>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/pastes'>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
