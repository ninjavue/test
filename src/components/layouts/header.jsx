import React from 'react';
import { 
  FiSearch, 
  FiMoon, 
  FiSun, 
  FiMessageCircle, 
  FiGrid, 
  FiBell 
} from 'react-icons/fi';

import { BiMenuAltLeft } from "react-icons/bi";


import user from '../../assets/images/user.jpg';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <div className="header-container d-flex justify-center mx-auto">
    <header className={` h-16 my-3 rounded-md bg-white dark:bg-[#111c2d] border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 py-3 transition-colors duration-300`}>
      {/* Left Side */}
      <div className="flex items-center space-x-8">
        <button 
          onClick={toggleSidebar}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <BiMenuAltLeft className="w-8 h-8" />
        </button>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/modules" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Bosh Sahifa
          </Link>
          <Link to="/modules" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Chat
          </Link>
          <Link to="/modules" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Kalendar
          </Link>
          <Link to="/modules" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Email
          </Link>
        </nav>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Qidirish..."
            className="block w-64 pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#111c2d] text-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>

          {/* Chat */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FiMessageCircle className="w-5 h-5" />
          </button>

          {/* Grid */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FiGrid className="w-5 h-5" />
          </button>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <FiBell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0+
            </span>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-700">
          <div className="relative">
            <img 
              src={user}
              alt="User Avatar" 
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm hidden">
              MN
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">Anvar Hasanov</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;