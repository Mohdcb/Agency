// TaskCard.js
import React from 'react';
import { Progress } from 'antd';
import { Camera, Users } from 'lucide-react';
import { Calendar } from 'iconoir-react';
import './Customant.css'

const TaskCard = ({ title, deadline, priority, employees, progress }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-4 pt-6">
      <div  className='flex items-center justify-between'>
      <div><h3 className="text-[16px] ">{title}</h3></div>
      <div className='bg-gray-50 flex items-center justify-center gap-1  w-[30px] h-[30px] rounded-xl'>  <div className=' bg-gray-500  w-1 h-1 rounded-full '></div> <div className=' bg-gray-500  w-1 h-1 rounded-full '></div> </div>

      </div>
      
      <div className="flex items-center space-x-2 mt-4">
        <Users size={18} />
        <div className="flex -space-x-2">
          {employees.slice(0, 4).map((employee, index) => (
            <img
              key={index}
              src={employee.image}
              alt={employee.name}
              className="w-8 h-8 rounded-full"
            />
            
          ))}
          {employees.length > 4 && (
            <div className="w-8 h-8 pl-3 rounded-full flex items-center justify-center text-black text-sm ">
              {employees.length - 4}+
            </div>
          )}
        </div>
      </div>
      <div className="">
      <Progress  percentPosition={{
        align: 'center',
        type: 'outer',
      }} percent={progress} status="active" size={[300, 11]}  strokeColor="#13AE85"      />
      </div>
      <div className=" pt-3 flex items-center space-x-2 gap-4 ">
          
        
      <div className="flex items-center space-x-2">
          <Calendar width={16} />
          <span className='text-[12px]'>{deadline}</span>
        </div>
        <div className='flex items-center gap-2 justify-center '>

        <div
            className={`w-4 h-4 rounded-full flex-row flex ${
              priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
            }`}
          ></div>
          <div><span className='text-[12px] capitalize '>{priority}</span></div>
          </div>
        </div>
    </div>
  );
};

export default TaskCard;