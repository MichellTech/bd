import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <header className='p-5 h-24 flex justify-between shadow-md items-center bg-white'>
      <h1 className='text-xl text-blue-400 font-bold'>Birthday</h1>
      <ul className='flex items-center gap-10'>
        <li
          onClick={() => navigate('/')}
          className='text-lg text-blue-400 font-bold cursor-pointer hover:text-blue-600'
        >
          Random Numbers
        </li>
        <li
          onClick={() => navigate('/tod')}
          className='text-lg text-blue-400 font-bold cursor-pointer hover:text-blue-600'
        >
          Truth or Dare
        </li>
      </ul>
    </header>
  )
}

export default Header
