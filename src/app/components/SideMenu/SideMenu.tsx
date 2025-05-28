import React from 'react'
import NavList from './NavList/NavList'

function SideMenu() {
  return (
    <div className='w-56 pt-8 bg-gray-800 text-white'>
        <h1 className='px-4 text-2xl font-bold'>Next Task</h1>
        <NavList />
    </div>

  )
}

export default SideMenu