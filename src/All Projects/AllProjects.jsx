import React from 'react'
import ProjectCard from './ProjectCard';
import projectData from '../ProjectData.json';
import employeeData from '../Employeedata.json';
import Titlebar from '../Titlebar';

function AllProjects() {
  function calculateProgress(project) {
    const totalTasks = project.works.reduce((acc, work) => acc + work.subtasks.length, 0);
    const completedTasks = project.works.reduce((acc, work) => 
      acc + work.subtasks.filter(task => task.status === "Completed").length, 0
    );
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  }

  function getProjectEmployees(project) {
    const employeeNames = new Set();
    project.works.forEach(work => {
      work.subtasks.forEach(task => {
        employeeNames.add(task.assignedPerson);
      });
    });
    return Array.from(employeeNames).map(name => 
      employeeData.employees.find(emp => emp.name === name)
    ).filter(Boolean);
  }

  return (
    <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] '>
      <Titlebar title="Project Management" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project) => (
          <ProjectCard
            key={project.projectId}
            title={project.projectTitle}
            deadline={project.deadline}
            priority={project.status === "In Progress" ? "high" : "medium"}
            employees={getProjectEmployees(project)}
            progress={calculateProgress(project)}
            packageName={project.packageName}
          />
        ))}
      </div>
    </div>
  )
}

export default AllProjects

