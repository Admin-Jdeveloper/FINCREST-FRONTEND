"use client"

import React from 'react'


const Navbar = () => {
    

 const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className=" bg-gradient-to-l from-slate-500 text-slate-900 to-indigo-100 top-0 w-full z-50 bg-opacity-80 backdrop-blur-md bg-gray-900 p-4 transition duration-300">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse">
        FINCREST
      </div>
      <button
        className= {` text-white   text-2xl sm:hidden ` }
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 items-center`}
      >
        <a href="/" className=" text-xl hover:text-indigo-400">Home</a>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar