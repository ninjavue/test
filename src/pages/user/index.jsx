import React, { useState } from 'react'
import { 
  FaFacebookF, 
  FaGlobe, 
  FaCamera, 
  FaFileAlt, 
  FaEye, 
  FaUsers,
  FaUser,
  FaHeart,
  FaImages,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'
import profilebg from '../../assets/images/profilebg.jpg'
import userAvatar from '../../assets/images/user.jpg'
import { BsDot } from "react-icons/bs";


const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'followers', label: 'Followers', icon: FaHeart },
    { id: 'friends', label: 'Friends', icon: FaUsers },
    { id: 'gallery', label: 'Gallery', icon: FaImages }
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">User Profile</h1>
          <nav className="flex text-sm text-gray-600 dark:text-gray-400">
            <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Home</span>
            <span className="mx-1"><BsDot className='text-xl' /></span>
            <span className="text-gray-900 dark:text-white">User Profile</span>
          </nav>
        </div>

        {/* Profile Banner Section */}
        <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg overflow-hidden">
          {/* Banner */}
          <div className="relative h-64">
            <img 
              src={profilebg} 
              alt="Profile Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            {/* Profile Picture */}
            <div className="absolute -top-16 left-6">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden">
                <img 
                  src={userAvatar} 
                  alt="Anvar Hasanov" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info and Action Buttons */}
            <div className="flex items-end justify-between pt-20">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Anvar Hasanov</h2>
                <p className="text-gray-600 dark:text-gray-400">Foydalanuvchi</p>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Social Buttons */}
                <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <FaFacebookF className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors">
                  <FaGlobe className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <FaCamera className="w-4 h-4" />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Add To Story
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User Statistics */}
        <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaFileAlt className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">938</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Posts</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaEye className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">3,586</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaUsers className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2,659</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg">
          <div className="">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Introduction Card */}
          <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hello, I am Anvar Hasanov. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaBriefcase className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Sir, PP Institute Of Science</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">xyzmikenielsen@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <FaGlobe className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">www.xyz.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Newyork, USA - 100001</span>
              </div>
            </div>
          </div>

          {/* Post Creation Card */}
          <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Create Post</h3>
            <div className="space-y-4">
              <textarea
                placeholder="Share your thoughts"
                className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <FaCamera className="w-5 h-5" />
                    <span className="text-sm">Photo / Video</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <FaFileAlt className="w-5 h-5" />
                    <span className="text-sm">Article</span>
                  </button>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile