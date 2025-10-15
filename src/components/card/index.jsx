import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const CardTable = () => {
  const employees = [
    {
      id: 1,
      name: "Mark J. Freeman",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      hourRate: "$80/hour",
      skill: "HTML",
      status: "Available"
    },
    {
      id: 2,
      name: "Nina R. Oldman",
      role: "Designer",
      avatar: "https://i0.wp.com/masteringportraitphotography.com/wp-content/uploads/2018/09/140822AMAS0573-scaled.jpg?fit=862%2C1207&ssl=1",
      hourRate: "$70/hour",
      skill: "JavaScript",
      status: "On Holiday"
    },
    {
      id: 3,
      name: "Arya H. Shah",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      hourRate: "$40/hour",
      skill: "React",
      status: "Absent"
    },
    {
      id: 4,
      name: "June R. Smith",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      hourRate: "$20/hour",
      skill: "Vuejs",
      status: "On Leave"
    },
    {
      id: 5,
      name: "Mark J. Freeman",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      hourRate: "$65/hour",
      skill: "Angular",
      status: "Available"
    }
  ]

  const getStatusBadge = (status) => {
    const statusClasses = {
      "Available": "bg-green-100 text-green-800",
      "On Holiday": "bg-blue-100 text-blue-800",
      "Absent": "bg-red-100 text-red-800",
      "On Leave": "bg-yellow-100 text-yellow-800"
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[status]}`}>
        {status}
      </span>
    )
  }

  return (
    <div className="bg-white dark:bg-[#111c2d] rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200">Top Employees</h2>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <BsThreeDotsVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700 dark:text-gray-400">Profile</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700 dark:text-gray-400">Hour Rate</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700 dark:text-gray-400">Skills</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-700 dark:text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className=" border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex items-center space-x-3">
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-200">{employee.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{employee.role}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2 text-gray-900 dark:text-gray-200">{employee.hourRate}</td>
                <td className="py-4 px-2 text-gray-900 dark:text-gray-200">{employee.skill}</td>
                <td className="py-4 px-2">
                  {getStatusBadge(employee.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CardTable