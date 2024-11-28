import React from 'react'
import TaskCard from './TaskCard';
import { tasks } from './Tasks';
import { ChevronLeft } from 'lucide-react';
import Titlebar from '../Titlebar';


function Task() {
  return (
    <div className=' p-5 lg:w-96  m-auto bg-[#F2F2F2] h-screen' >
      <Titlebar title={"Task Management"}/>
       
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          deadline={task.deadline}
          priority={task.priority}
          employees={task.employees}
          progress={task.progress}
        />
      ))}
    </div>
      
    </div>
  )
}

export default Task
