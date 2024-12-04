import React from 'react';
import { Avatar } from 'antd';
import { Edit, CircleCheck } from 'lucide-react';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'text-red-500';
    case 'completed':
      return 'text-green-500';
    case 'in progress':
      return 'text-blue-500';
    default:
      return 'text-gray-500';
  }
};

const TaskCard = ({ task, projectTitle, workTitle, employeeImage }) => {
  const statusColor = getStatusColor(task.status);

  return (
    <div className='bg-white p-3 w-full rounded-xl shadow-sm mt-3'>
      <div className='flex justify-between items-center pb-3'>
        <Avatar 
          src={employeeImage}
        />
        <Edit strokeWidth={1} size={15}/>
      </div>
      <div> 
        <h3 className='text-[11px] pb-2 leading-3'>{projectTitle}</h3>
        <p className='text-[8px] text-gray-600 mb-1'>{workTitle} / {task.taskTitle}</p>
      </div>
      <div className={`mt-3 flex items-center justify-center gap-1 rounded-md p-1 bg-[#F2F2F2] ${statusColor}`}>
        <p className='text-[10px]'>{task.status}</p> 
        <CircleCheck size={12} strokeWidth={1} />
      </div>
    </div>
  );
};

export default TaskCard;

