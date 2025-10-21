import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Aside from './aside';
import Header from './header';

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Extract moduleId from URL
  const moduleId = location.pathname.match(/\/modules\/(\d+)/)?.[1] || null;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300  ${isDarkMode ? 'dark' : ''} `}>
      <div className="flex bg-gray-50 dark:bg-[#15263a]">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
          <Aside isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} moduleId={moduleId} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            toggleSidebar={toggleSidebar}
          />

          {/* Page Content */}
          <main className="main-container flex-1 p-6 transition-colors duration-300">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;