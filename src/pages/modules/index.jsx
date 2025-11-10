import React, { useState } from "react";
import { FaUserLock, FaUserPlus, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Modules = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();
  const modules = [
    {
      id: 1,
      title: "Foydalanish huquqlarini cheklash",
      description:
        "Axborot tizimida foydalanuvchilarning foydalanish huquqlarini cheklash moduli",
      icon: FaUserLock,
      color: "from-red-500 to-pink-600",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      id: 2,
      title: "Qo'shimcha huquqlar berish",
      description:
        "Axborot tizimi foydalanuvchilariga qo'shimcha foydalanish huquqlarini berish moduli",
      icon: FaUserPlus,
      color: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Foydalanuvchilar harakati hisoboti",
      description:
        "Axborot tizimida foydalanuvchilar harakati to'g'risida hisobot tayyorlash moduli",
      icon: FaChartLine,
      color: "from-green-500 to-emerald-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const handleCardClick = (module) => {
    if (module.id === 3) {
      setIsDialogOpen(true);
      return;
    }
    navigate(`/modules/${module.id}`);
  };

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
            const IconComponent = module.icon;
            return (
              <div
                key={module.id}
                onClick={() => handleCardClick(module)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative p-8 h-full flex flex-col">
                  <div
                    className={`${module.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-active:scale-95`}
                  >
                    <IconComponent className={`${module.iconColor} text-4xl`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                    {module.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
                    <span
                      className={`bg-gradient-to-r ${module.color} bg-clip-text text-transparent`}
                    >
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
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>

                {/* Click Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-active:ring-gray-300 group-active:ring-opacity-50 transition-all duration-150"></div>
              </div>
            );
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

      {/* Dialog for Module 3 */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto relative">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-[-13px] right-[-13px] text-gray-600 text-2xl bg-white rounded-md p-1 shadow-lg hover:bg-gray-200 transition-all duration-200"
            >
              <IoCloseSharp />
            </button>
            <h2 className="text-lg font-bold mb-4">
              Xatolik
            </h2>
            <p className="mb-6">
              Sizda admin huquqlari yo'q! Davom etish uchun tugmalardan birini bosing.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
              > Ko'rish
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-all duration-200"
              >
                Davom etish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modules;
