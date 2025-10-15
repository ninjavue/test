import React, { use } from 'react';
import { 
  FiBarChart, 
  FiBarChart2, 
  FiFileText,
  FiMonitor,
  FiChevronRight
} from 'react-icons/fi';
import  LogoIcon  from '../../assets/icons/logo-dark.svg';
import  LogoIconLight  from '../../assets/icons/logo-light.svg';
import user from '../../assets/images/user.jpg';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { TbLogin } from "react-icons/tb";
import { FaRocket } from 'react-icons/fa';



const Aside = ({ isDarkMode, toggleDarkMode }) => {

  const navigate = useNavigate();
  const menuItems = [
    {
      section: 'HOME',
      items: [
        { icon: FiMonitor, label: 'Menu 1', url:'/', active: true, hasSubmenu: false },
        { icon: FiBarChart2, label: 'Menu 2', url:'/', active: false, hasSubmenu: false },
        { icon: FiFileText, label: 'Menu 3', url:'/user', active: false, hasSubmenu: false },
        { icon: TbLogin, label: 'Login', url:'/login', active: false, hasSubmenu: false }
      ]
    }
  ];

  return (
    <aside className={`w-64 h-screen bg-white dark:bg-[#111c2d]  dark:border-gray-700 flex flex-col transition-colors duration-300`}>
      {/* Logo Section */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <FaRocket className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Spike Admin</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 pr-4 py-6 space-y-8">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {section.section}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={item.url}
                    className={`w-full flex items-center justify-between px-3 py-4 rounded-r-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                      item.active
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {/* Water-like animation background for active item */}
                    {item.active && (
                      <div className="absolute inset-0 bg-green-100 dark:bg-green-900 rounded-lg animate-water-fill"></div>
                    )}
                    
                    {/* Hover background with water animation */}
                    <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-water-fill transition-opacity duration-200"></div>
                    
                    <div className="flex items-center space-x-3 relative z-10">
                      <item.icon className={`w-5 h-5 ${
                        item.active 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`} />
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Submenu indicator */}
                    {item.hasSubmenu && !item.active && (
                      <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 relative z-10" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* User Profile Section */}
      <div className="p-4  border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 p-3 py-7 rounded-2xl bg-[#e5f3fb] dark:bg-[#15263a]">
          <div className="relative">
            <img 
              src={user}
              alt="User Avatar" 
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-sm hidden">
              MN
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Mike</p>
            <p className="text-base text-gray-500 dark:text-gray-400">Admin</p>
          </div>
          <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" onClick={() => navigate('/login')}>
            <RiLogoutCircleRLine className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;