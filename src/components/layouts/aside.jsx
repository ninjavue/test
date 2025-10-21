import React, { useMemo } from 'react';
import { 
  FiBarChart2, 
  FiFileText,
  FiMonitor,
  FiChevronRight,
  FiClock,
  FiShield,
  FiUsers,
  FiUserPlus,
  FiActivity,
  FiTrendingUp
} from 'react-icons/fi';
import { TbLayoutDashboardFilled } from "react-icons/tb";

import user from '../../assets/images/user.jpg';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { TbLogin } from "react-icons/tb";



const Aside = ({ isDarkMode, toggleDarkMode, moduleId }) => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSection = searchParams.get('section');
  
  // Dinamik menu items moduleId ga qarab
  const menuItems = useMemo(() => {
    // Module 1: Foydalanish huquqlarini cheklash
    if (moduleId === '1') {
      return [
        {
          section: 'HUQUQLARNI CHEKLASH',
          items: [
            { icon: FiClock, label: 'Tizimga kirish tezligi', url:`/modules/${moduleId}?section=speed`, active: currentSection === 'speed' || !currentSection, hasSubmenu: false },
            { icon: FiShield, label: 'Cheklash sabablari', url:`/modules/${moduleId}?section=restrictions`, active: currentSection === 'restrictions', hasSubmenu: false },
            { icon: FiUsers, label: 'Cheklangan foydalanuvchilar', url:`/modules/${moduleId}?section=restricted-users`, active: currentSection === 'restricted-users', hasSubmenu: false }
          ]
        }
      ];
    }
    
    // Module 2: Qo'shimcha huquqlar berish
    if (moduleId === '2') {
      return [
        {
          section: "QO'SHIMCHA HUQUQLAR",
          items: [
            { icon: FiUserPlus, label: "Huquqlarni berish va kategoriyalash", url:`/modules/${moduleId}?section=grant-permissions`, active: currentSection === 'grant-permissions' || !currentSection, hasSubmenu: false }
          ]
        }
      ];
    }
    
    // Module 3: Foydalanuvchilar harakati hisoboti
    if (moduleId === '3') {
      return [
        {
          section: 'HISOBOTLAR',
          items: [
            { icon: FiActivity, label: 'Umumiy hisobot', url:`/modules/${moduleId}?section=general-report`, active: currentSection === 'general-report' || !currentSection, hasSubmenu: false },
            { icon: FiTrendingUp, label: "Tizimga ta'siri", url:`/modules/${moduleId}?section=system-impact`, active: currentSection === 'system-impact', hasSubmenu: false }
          ]
        }
      ];
    }
    
    // Default menu (agar module ID yo'q bo'lsa)
    return [
      {
        section: 'HOME',
        items: [
          { icon: FiMonitor, label: 'Menu 1', url:'/dashboard', active: true, hasSubmenu: false },
          { icon: FiBarChart2, label: 'Menu 2', url:'/dashboard', active: false, hasSubmenu: false },
          { icon: FiFileText, label: 'Menu 3', url:'/user', active: false, hasSubmenu: false },
          { icon: TbLogin, label: 'Login', url:'/', active: false, hasSubmenu: false }
        ]
      }
    ];
  }, [moduleId, currentSection]);

  return (
    <aside className={`w-64 h-screen bg-white dark:bg-[#111c2d]  dark:border-gray-700 flex flex-col transition-colors duration-300`}>
      {/* Logo Section */}
      <div className="p-6">
        <Link to="/modules" className="flex items-center space-x-3">
        <div className="flex items-center space-x-3">
          <TbLayoutDashboardFilled className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</span>
        </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 pr-4 py-6 space-y-8">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-xs font-semibold text-gray-500 pl-4 dark:text-gray-400 uppercase tracking-wider mb-3">
              {section.section}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link to={item.url}
                    className={`w-full flex items-center justify-between pr-3 py-4 pl-6 rounded-r-3xl text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
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
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Anvar</p>
            <p className="text-base text-gray-500 dark:text-gray-400">Admin</p>
          </div>
          <button className="p-1 text-gray-400 hover:text-red-600 dark:hover:text-gray-300 transition-colors" onClick={() => navigate('/')}>
            <RiLogoutCircleRLine className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;