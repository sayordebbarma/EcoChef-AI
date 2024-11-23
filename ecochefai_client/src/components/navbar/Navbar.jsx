import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          EcoChef<span className="text-yellow-300">AI</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-300 transition">About Us</a>
          <a href="#" className="hover:text-yellow-300 transition">How It Works</a>
          <a href="#" className="hover:text-yellow-300 transition">Recipes</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </nav>

        {/* Login/Sign Up Button */}
        <div className="hidden md:block">
          <button className="bg-yellow-300 text-green-800 px-4 py-2 rounded-md hover:bg-yellow-400 transition">
            Login / Sign Up
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar