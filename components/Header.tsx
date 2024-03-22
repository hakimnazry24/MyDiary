import React from 'react'
import Logo from './Logo'
import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <header className='p-5 px-10 w-full  bg-gradient-to-t from-gray-900 to-gray-700 flex flex-row items-center gap-10 border-b-4 border-blue-400'>
        <div className='md:lg:pr-20'> 
            <Logo></Logo>
        </div>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Diaries</a>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Settings</a>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Themes</a>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Collections</a>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Admin</a>
        <a href="/" className='text-lg font-bold text-white transition ease-in-out duration-200 hover:text-white/80'>Fat Burd</a>
        <div className='text-white'>
            <FaBell></FaBell>
        </div>
    </header>
  )
}
