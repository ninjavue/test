import React from 'react'
import { FaUserLock, FaUserPlus, FaChartLine } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Modules = () => {

  const navigate = useNavigate();
  const modules = [
    {
      id: 1,
      title: "Foydalanish huquqlarini cheklash",
      description: "Axborot tizimida foydalanuvchilarning foydalanish huquqlarini cheklash moduli",
      icon: FaUserLock,
      color: "from-red-500 to-pink-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      title: "Qo'shimcha huquqlar berish",
      description: "Axborot tizimi foydalanuvchilariga qо'shimcha foydalanish huquqlarini berish moduli",
      icon: FaUserPlus,
      color: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Foydalanuvchilar harakati hisoboti",
      description: "Axborot tizimida foydalanuvchilar harakati tо'g'risida hisobot tayyorlash moduli",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ]

  const handleCardClick = (module) => {
    navigate(`/modules/${module.id}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 justify-center items-center flex flex-col">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Axborot tizimi modullar
          </h1>
          <p className="text-lg text-gray-600">
            Foydalanuvchilar huquqlarini boshqarish va nazorat qilish
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module) => {
            const IconComponent = module.icon
            return (
              <div
                key={module.id}
                onClick={() => handleCardClick(module)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className={`${module.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-active:scale-95`}>
                    <IconComponent className={`${module.iconColor} text-4xl`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                    {module.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center text-sm font-semibold group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
                    <span className={`bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}>
                      Ochish
                    </span>
                    <svg 
                      className={`w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom Gradient Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>

                {/* Click Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-active:ring-gray-300 group-active:ring-opacity-50 transition-all duration-150"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              Barcha modullar faol
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modules