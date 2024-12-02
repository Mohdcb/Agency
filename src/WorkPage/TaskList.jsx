import React from 'react';
import { Badge } from 'antd';

const TaskList = ({ work }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">{work.workTitle}</h3>
      <div className="space-y-4">
        {work.subtasks.map((subtask) => (
          <div key={subtask.taskId} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Badge
                count={subtask.status}
                className={`${
                  subtask.status === 'Completed'
                    ? 'bg-green-500 text-white'
                    : subtask.status === 'In Progress'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-400 text-white'
                }`}
              />
              <span>{subtask.taskTitle}</span>
              <span className="text-gray-500">Assigned to: {subtask.assignedPerson}</span>
              <span className="text-gray-500">Deadline: {subtask.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;