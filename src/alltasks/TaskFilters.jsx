import React, { useState, useMemo } from 'react';
import { Select } from 'antd';
import { Filter, X } from 'lucide-react';

const { Option } = Select;

const TaskFilters = ({ projectData, onFilterChange }) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    assignee: null,
    status: null,
    taskTitle: null
  });

  const uniqueAssignees = useMemo(() => {
    const assignees = projectData.flatMap(project => 
      project.works.flatMap(work => 
        work.subtasks.map(task => task.assignedPerson)
      )
    );
    return [...new Set(assignees)];
  }, [projectData]);

  const uniqueStatuses = ['Pending', 'In Progress', 'Completed'];

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleFiltersVisibility = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <div className="space-y-2 transition-all duration-300 ">
      <div 
        className="flex items-center bg-white p-2 absolute shadow-sm rounded-lg top-[40px] right-[65px] gap-2 text-gray-600 cursor-pointer"
        onClick={toggleFiltersVisibility}
      >
        {isFiltersVisible ? (
          <X size={20} strokeWidth={2} />
        ) : (
          <Filter size={20} strokeWidth={2} />
        )}
        {/* <span className="font-medium text-sm">Filters</span> */}
      </div>
      
      {isFiltersVisible && (
        <div className="grid grid-cols-2  z-[9999] gap-2 mt-2">
          <Select
            placeholder="Assignee"
            allowClear
            className="w-full"
            onChange={(value) => handleFilterChange('assignee', value)}
          >
            {uniqueAssignees.map(assignee => (
              <Option key={assignee} value={assignee}>{assignee}</Option>
            ))}
          </Select>

          <Select
            placeholder="Status"
            allowClear
            className="w-full"
            onChange={(value) => handleFilterChange('status', value)}
          >
            {uniqueStatuses.map(status => (
              <Option key={status} value={status}>{status}</Option>
            ))}
          </Select>

          <Select
            placeholder="Task Title"
            showSearch
            allowClear
            className="w-full"
            onChange={(value) => handleFilterChange('taskTitle', value)}
          >
            {projectData.flatMap(project => 
              project.works.flatMap(work => 
                work.subtasks.map(task => (
                  <Option key={task.taskId} value={task.taskTitle}>
                    {task.taskTitle}
                  </Option>
                ))
              )
            )}
          </Select>
        </div>
      )}
    </div>
  );
};


export default TaskFilters;