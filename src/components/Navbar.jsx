import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 text-green-600 text-2xl '>
      <NavLink>
        Home
      </NavLink>
      <NavLink>
        All Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
