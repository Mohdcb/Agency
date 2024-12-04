import React from 'react';
import { Progress } from 'antd';
import { Calendar } from 'iconoir-react';
import './Customant.css'

const ProjectCard = ({ title, deadline, priority, employees, progress, packageName }) => {
  // Ensure employees is an array, if not, use an empty array
  const employeeList = Array.isArray(employees) ? employees : [];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 ">
      <div className='flex items-center justify-between'>
        <div><h3 className="text-[14px]">{title}</h3></div>
        <div className='bg-gray-50 flex items-center justify-center gap-1 w-[30px] h-[30px] rounded-xl'>
          <div className='bg-gray-500 w-1 h-1 rounded-full'></div>
          <div className='bg-gray-500 w-1 h-1 rounded-full'></div>
        </div>
      </div>
      <p className='font-light text-[10px]'>{packageName || 'No package specified'}</p>
    
      <div className='flex justify-between gap-8 space-x-2 mt-4'>
        <div className="flex -space-x-2">
          {employeeList.slice(0, 4).map((employee, index) => (
            <img
              key={index}
              src={employee.image || '/placeholder.svg?height=32&width=32'}
              alt={employee.name || `Employee ${index + 1}`}
              className="w-7 h-7 rounded-full"
            />
          ))}
          {employeeList.length > 4 && (
            <div className="w-8 h-8 pl-3 rounded-full flex items-center justify-center text-black text-sm">
              {employeeList.length - 4}+
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 bg-[#748EFE] text-white rounded-lg px-2">
          <Calendar width={14} />
          <span className='text-[10px]'>{deadline || 'No deadline'}</span>
        </div>
      </div>

      <div className="pt-3">
        <Progress

        showInfo={false}
          percentPosition={{
            align: 'center',
            type: 'outer',
          }}
          percent={progress || 0}
          status="active"
          size={[300, 11]}
          strokeColor="#13AE85"
        />
      </div>
      {/* <div className="pt-3 flex items-center space-x-2 gap-4">
        <div className='flex items-center gap-2 justify-center'>
          <div
            className={`w-4 h-4 rounded-full flex-row flex ${
              priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
            }`}
          ></div>
          <div><span className='text-[12px] capitalize'>{priority || 'No priority'}</span></div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectCard;

