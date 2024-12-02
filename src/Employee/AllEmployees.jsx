import React, { useState } from 'react'
import Titlebar from '../Titlebar'
import { Input, Avatar } from 'antd'
import employeeData from '../Employeedata.json'
import './Customant4.css'


const { Search } = Input;

function AllEmployees() {
  const [searchTerm, setSearchTerm] = useState('');

  // Group employees by department
  const groupedEmployees = employeeData.employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = [];
    }
    acc[employee.department].push(employee);
    return acc;
  }, {});

  // Filter employees based on search term
  const filteredGroupedEmployees = Object.keys(groupedEmployees).reduce((acc, department) => {
    const filteredEmployees = groupedEmployees[department].filter(employee => 
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredEmployees.length > 0) {
      acc[department] = filteredEmployees;
    }
    return acc;
  }, {});

  return (
    <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen'>
      <Titlebar title="Employees" />
      
      <Search 
        placeholder="Search employees" 
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', marginBottom: '20px' }} 
      />

      {Object.keys(filteredGroupedEmployees).map(department => (
        <div key={department} className='bg-white rounded-2xl p-5 mb-4'>
          <h3 className='pb-4'>{department}</h3>
          <div className='grid grid-cols-3 gap-4'>
            {filteredGroupedEmployees[department].map(employee => (
              <div 
                key={employee.employeeId} 
                className='bg-[#F2F2F2] rounded-2xl flex items-center flex-col py-3'
              >
                <Avatar 
                  src={employee.image} 
                  size={50} 
                  alt={employee.name}
                />
                <h3 className='text-[10px] mt-2 text-center'>{employee.name}</h3>
                <p className='text-[8px] font-light text-gray-500 text-center'>{employee.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllEmployees