import React from 'react';
import { FiTrendingUp, FiDollarSign, FiRefreshCw } from 'react-icons/fi';
import { FaFileAlt, FaBullseye, FaSearch } from 'react-icons/fa';
import WelcomeIllustration from '../../assets/images/welcome_mike_nielsen.png';
import info from '../../assets/images/info-shap.png';
import warning from '../../assets/images/warning-shap.png';
import danger from '../../assets/images/danger-shap.png';
import { CardTable1 } from '../../components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';


const Home = () => {
  // Chart data matching the image
  const chartData = [
    { month: 'Aug', profit: 58, expenses: 15 },
    { month: 'Sep', profit: 39, expenses: 29 },
    { month: 'Oct', profit: 35, expenses: 16 },
    { month: 'Nov', profit: 34, expenses: 34 },
    { month: 'Dec', profit: 34, expenses: 25 },
    { month: 'Jan', profit: 19, expenses: 30 },
    { month: 'Feb', profit: 29, expenses: 36 }
  ];

  // Product Sales line chart data
  const salesData = [
    { year: '2016', sales: 45 },
    { year: '2017', sales: 75 },
    { year: '2018', sales: 55 },
    { year: '2019', sales: 85 },
    { year: '2020', sales: 65 },
    { year: '2021', sales: 95 },
    { year: '2022', sales: 80 }
  ];

  const metrics = [
    {
      title: 'Sales',
      value: '2358',
      change: '+23%',
      isPositive: true,
      icon: FiTrendingUp,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      accentColor: 'from-orange-400 to-orange-500',
      bg_icon: warning
    },
    {
      title: 'Refunds',
      value: '356',
      change: '+8%',
      isPositive: true,
      icon: FiRefreshCw,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      accentColor: 'from-cyan-400 to-cyan-500',
      bg_icon: danger
    },
    {
      title: 'Earnings',
      value: '$235.8K',
      change: '-3%',
      isPositive: false,
      icon: FiDollarSign,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
      accentColor: 'from-yellow-400 to-yellow-500',
      bg_icon: info
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Welcome Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#111c2d] rounded-xl p-6 pb-8 shadow-my border-gray-200 dark:border-gray-700 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-[#111c2d] dark:text-white mb-2">
                Xush kelibsiz Anvar Hasanov
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Check All The Statistics
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Visit Now
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 ">
              <img src={WelcomeIllustration} alt="" className="w-80 h-48  z-10" />
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className={`${metric.bgColor} rounded-xl p-6 shadow-my text-white relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.isPositive ? 'text-green-200' : 'text-red-200'
                  }`}>
                    {/* {metric.change} */}
                  </span>
                </div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-blue-100 text-sm">{metric.title}</div>
              </div>
              <div className={`absolute top-0 right-0 w-30 h-30 ${metric.accentColor}`}>
                <img src={metric.bg_icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit & Expenses Chart */}
        <div className="bg-white dark:bg-[#111c2d] rounded-xl p-6 shadow-my dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Profit & Expenses
            </h3>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
          
          {/* Chart */}
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  domain={[0, 80]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="profit" stackId="a" fill="#1e40af" radius={[0, 0, 4, 4]} />
                <Bar dataKey="expenses" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Summary */}
          <div className="space-y-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaFileAlt className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Earning This Year</span>
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-white">$63,489.50</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaBullseye className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Profit This Year</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-800 dark:text-white">$48,820.00</span>
                <span className="text-xs text-green-600 font-medium">+23%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <FaSearch className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Overall Earnings</span>
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-white">$103,582.50</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
            View Full Report
          </button>
        </div>

        {/* Product Sales Chart */}
        <div className="bg-white dark:bg-[#111c2d] rounded-xl p-6 shadow-my dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Product Sales
            </h3>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>

          {/* Line Chart */}
          <div className="my-10">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                data={salesData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6b7280' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="rgba(59, 130, 246, 0.1)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* New Customer Metric */}
          <div className="flex items-end justify-between mt-24">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">New Customer</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">36,436</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">+12%</span>
          </div>
        </div>
      </div>

 


      <CardTable1 />

    </div>
  );
};

export default Home;
