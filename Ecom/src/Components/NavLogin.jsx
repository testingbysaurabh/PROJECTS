import React from 'react'
import { Link } from 'react-router-dom'

const NavLogin = () => {
    return (
        <div className="bg-gray-900 fixed w-full top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img
                        src="https://www.svgrepo.com/show/321738/anubis.svg"
                        alt="logo"
                        className="h-12 w-12 rounded-tr-2xl bg-[#48A6A7] p-1"
                    />
                    <h1 className="text-2xl font-bold text-[#48A6A7]">LaVitrine</h1>
                </div>

                {/* Navigation Links */}
                <div className='flex gap-6 items-center mt-4 md:mt-0 text-sm'>

                    <Link
                        to="/login"
                        className="flex items-center gap-1 text-gray-300 hover:text-[#48A6A7] transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#48A6A7]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0H2z" />
                        </svg>
                        <span className="font-medium">Login</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default NavLogin
