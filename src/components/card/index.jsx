import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const CardTable = ({ title, headers, data, renderRow }) => {
  return (
    <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <BsThreeDotsVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {renderRow(item, index)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CardTable