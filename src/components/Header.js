import React from 'react'
import sun from '../assets/icons/sun.svg'

const Header = () => {
  return (
    <div>
      <h2 className="block sm:hidden text-3xl font-semibold text-center mt-6 pb-5">
        Hello! What is your main focus for today?
      </h2>
      <div className=" relative p-5 sm:hidden  flex items-center w-full h-20 shadow-xl bg-gradient-to-r  from-sky-900 to-sky-800 rounded-xl text-white  text-center mt-2">
        <img src={sun} className="w-7 animate-spin-slow   " />{' '}
        <span className="pl-4 pr-4 font-semibold text-[30px]">Today</span>
        <span className="absolute right-7 bottom-3 text=[10px]">
          {new Date().toLocaleDateString()}
        </span>
      </div>
      <h1 className="hidden sm:block text-3xl font-semibold sm:pb-4">
        Todo List
      </h1>
    </div>
  )
}

export default Header
