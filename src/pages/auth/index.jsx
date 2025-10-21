import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import login from "../../assets/images/login-security.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.username === "admin" && formData.password === "admin123") {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      setTimeout(() => {
        navigate("/modules");
      }, 1000);
    } else if (formData.username === "user" && formData.password === "user123") {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      setTimeout(() => {
        navigate("/user");
      }, 1000);
    } else {
      toast.error("Noto'g'ri foydalanuvchi nomi yoki parol.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="flex justify-center items-center p-16 relative rounded-2xl overflow-hidden">
        {/* Background decorative shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Main card */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden">
          {/* Header with logo */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Section - 3D Illustration */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 flex items-center justify-center relative">
              <div className="relative w-full h-full max-w-md">
                <img src={login} alt="" className="mt-20" />
              </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="p-12 flex flex-col justify-center">
              {/* Welcome text */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Xush kelibsiz!
                </h1>
              </div>

               {/* Login form */}
               <form onSubmit={handleSubmit} className="space-y-6">
                 {/* Username field */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Foydalanuvchi nomi
                   </label>
                   <input
                     type="text"
                     name="username"
                     value={formData.username}
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                     placeholder="Foydalanuvchi nomi"
                     required
                   />
                 </div>

                 {/* Password field */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Parol
                   </label>
                   <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleInputChange}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                     placeholder="Parolni kiriting"
                     required
                   />
                 </div>

                {/* Remember device and forgot password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Eslab qolinsinmi?
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Parolni unutdingizmi?
                  </a>
                </div>

                {/* Sign in button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Kirish
                </button>
              </form>

              {/* Create account link */}
              <div className="mt-8 text-center">
                <span className="text-gray-600"> </span>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ro'yhatdan o'tish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
