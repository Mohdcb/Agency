import React, { useMemo, useState } from 'react'
import Titlebar from '../Titlebar'
import { Avatar } from 'antd'
import CalendarView from '../Dashboard/CalenderView'
import TaskCard from '../alltasks/TaskCard'
import projectData from '../ProjectData.json'
import TaskFilters from '../alltasks/TaskFilters'
import MonthView from '../Dashboard/MonthView.jsx/MonthView'

function Employeedetails() {
  // State for managing task filtering and popup
  const [filters, setFilters] = useState({
    assignee: 'Hashim',
    status: null,
    date: null,
    taskTitle: null
  });
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Filter tasks for Hashim
  const filteredTasks = useMemo(() => {
    if (!projectData) return { tasks: [] };

    const tasks = projectData.flatMap((project) =>
      project.works.flatMap((work) =>
        work.subtasks
          .filter((task) => {
            // Always filter for Hashim
            if (task.assignedPerson !== 'Hashim') return false;

            // Additional filters
            if (filters.status && task.status !== filters.status) return false;
            if (filters.date) {
              const taskDate = new Date(task.deadline);
              const selectedDate = new Date(filters.date);
              if (
                taskDate.getFullYear() !== selectedDate.getFullYear() ||
                taskDate.getMonth() !== selectedDate.getMonth() ||
                taskDate.getDate() !== selectedDate.getDate()
              )
                return false;
            }
            if (filters.taskTitle && task.taskTitle !== filters.taskTitle) return false;
            return true;
          })
          .map((task) => ({
            ...task,
            workTitle: work.workTitle,
            projectTitle: project.projectTitle,
          }))
      )
    );

    return { tasks };
  }, [projectData, filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      // Ensure Hashim remains the assignee
      assignee: 'Hashim'
    }));
  };

  // Handle date change for calendar
  const handleDateChange = (date) => {
    setFilters(prev => ({
      ...prev,
      date: date
    }));
  };

  return (
    <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen relative'>
      <Titlebar title={"Employee Details"} />
      
      {/* Task Filters */}
      <TaskFilters 
        projectData={projectData} 
        onFilterChange={handleFilterChange} 
      />
      
      <div className='flex'>
        <div className='bg-white w-1/3 rounded-2xl flex items-center flex-col py-5'>
          <Avatar src="/images/emp1.png" size={50} />
          <h3 className='text-[12px]'> Hashim </h3>
        </div>
        
        <div className='pl-5 grid grid-cols-2 grid-rows-2 gap-y-1 gap-x-7 items-start'>
          {[
            { label: 'Role', value: 'Scripting' },
            { label: 'Department', value: 'Development' },
            { label: 'Experience', value: '3 Years' },
            { label: 'Location', value: 'Remote' }
          ].map((detail, index) => (
            <div key={index} className='p-1'>
              <h3 className='font-light text-[#888888] text-[10px]'> {detail.label} </h3>
              <p className='text-[13px]'> {detail.value} </p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className='pt-5'> Leaves </h3>
        <div className='pt-3'>
          <CalendarView onDateChange={handleDateChange} />
        </div>
      </div>

      {filteredTasks.tasks.length > 0 ? (
        <div className='grid grid-cols-2 gap-3'>
          {filteredTasks.tasks.map((task) => (
            <TaskCard
              key={task.taskId}
              task={task}
              projectTitle={task.projectTitle}
              workTitle={task.workTitle}
              onEditClick={() => {
                setSelectedTaskId(task.taskId);
                setIsPopupVisible(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div className='text-center text-gray-500 pt-5'>
          No tasks found for Hashim
        </div>
      )}
<div className='mt-4'>
<MonthView/>
</div>
<div className='grid grid-cols-7 gap-2'>
<div className='bg-[#D0EFE7] rounded-xl py-2'>
    <p className='text-center text-[10px]' >Tue</p>
    <p className='text-center text-[12px]'> 10</p>
</div>
<div className='bg-[#D0EFE7] rounded-xl py-2'>
    <p className='text-center text-[10px]' >Wed</p>
    <p className='text-center text-[12px]'> 12</p>
</div>
<div className='bg-[#FFE0D6] rounded-xl py-2'>
    <p className='text-center text-[10px]' >Thu</p>
    <p className='text-center text-[12px]'> 13</p>
</div>
<div className='bg-[#FFE0D6] rounded-xl py-2'>
    <p className='text-center text-[10px]' >Fri</p>
    <p className='text-center text-[12px]'> 14</p>
</div>


</div>

<div className='pt-4 '>
    <div className='flex gap-2 items-center ' >
    <div className='w-3 h-3 rounded-full bg-[#D0EFE7]'></div>
    <p className='font-light text-[12px]'>Leave day’s</p>
    </div>
    <div className='flex gap-2 items-center' >
    <div className='w-3 h-3 rounded-full bg-[#FFE0D6]'></div>
    <p className='font-light text-[12px]'>Leave Request</p>
    </div>
    
    </div>

    </div>
  )
}

export default Employeedetails