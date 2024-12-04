import React, { useState, useMemo } from 'react';
import Titlebar from '../Titlebar';
import CalendarView from '../Dashboard/CalenderView';
import TaskCard from './TaskCard';
import TaskFilters from './TaskFilters';
import projectData from '../ProjectData.json';
import { Search } from 'lucide-react';
import Updatetaskcard from './Updatetaskcard';
import employeeData from '../Employeedata.json';


import { Progress } from 'antd';

function Alltask() {
  const [filters, setFilters] = useState({
    assignee: null,
    status: null,
    date: null,
    taskTitle: null,
  });
  const [selectedTaskId, setSelectedTaskId] = useState(null); // Only keep the selected task ID
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Manage popup visibility

  const handleDateChange = (selectedDate) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      date: selectedDate,
    }));
  };


  const filteredTasks = useMemo(() => {
    return projectData.flatMap((project) =>
      project.works.flatMap((work) =>
        work.subtasks
          .filter((task) => {
            if (filters.assignee && task.assignedPerson !== filters.assignee) return false;
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
  }, [projectData, filters]);

  return (
    <div className='p-5 lg:w-96 m-auto min-h-screen bg-[#F2F2F2] overflow-auto'>
      <div className='pt-5 pb-5 flex items-center justify-between gap-4'>
        <h1>All tasks</h1>
        <div className='flex gap-2'>
          <div className='bg-white p-2 rounded-lg shadow-sm'>
            <Search size={20} />
          </div>
        
        </div>
      </div>
      <CalendarView onDateChange={handleDateChange} />

      <div className='bg-white p-4 mb-4 rounded-xl'>
                <h3 className='pb-5'>Tasks Overview</h3>
                <div className='grid grid-cols-4 gap-4'>
                    <div className=' flex items-center flex-col gap-2 '>
                        <Progress type="circle" percent={34} size={50} strokeWidth={10} format={(percent) => `${percent}`} strokeColor={"#13AE85"} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>Pending</p>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <Progress type="circle" percent={59} size={50} strokeWidth={10} format={(percent) => `${percent}`} strokeColor={'#FF6333'} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>In Progress</p>
                    </div>
                    <div className=' flex items-center flex-col gap-2'>
                        <Progress type="circle" percent={90} size={50} format={(percent) => `${percent}`} strokeWidth={10} strokeColor={'#748EFE'} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>Completed</p>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                        <Progress type="circle" percent={90} size={50} format={(percent) => `${percent}`} strokeWidth={10} strokeColor={'#748EFE'} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>Completed</p>
                    </div>
                </div>

            </div>


      <TaskFilters
        projectData={projectData}
        onFilterChange={(newFilters) =>
          setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
          }))
        }
      />
      <div className='grid grid-cols-2 gap-3'>
        {filteredTasks.map((task) => {
          const employee = employeeData.employees.find(emp => emp.name === task.assignedPerson);
          return (
            <TaskCard
              key={task.taskId}
              task={task}
              projectTitle={task.projectTitle}
              workTitle={task.workTitle}
              employeeImage={employee ? employee.image : ''}

              />
          );

})}
      </div>
      {isPopupVisible && (
        <Updatetaskcard
          taskId={selectedTaskId} // Pass only the task ID
          onClose={() => setIsPopupVisible(false)} // Close handler
        />
      )}
    </div>
  );
}

export default Alltask;
