import React, { useState } from 'react';
import { Progress, Collapse } from 'antd';

const { Panel } = Collapse;

const WorkDetails = ({ project }) => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handlePanelChange = (key) => {
    setExpandedPanel(key === expandedPanel ? null : key);
  };

  const calculateProgress = () => {
    const totalSubtasks = project.works.reduce((total, work) => {
      return total + work.subtasks.length;
    }, 0);

    const completedSubtasks = project.works.reduce((total, work) => {
      return total + work.subtasks.filter(subtask => subtask.status === 'Completed').length;
    }, 0);

    return (Math.round((completedSubtasks / totalSubtasks) * 100));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{project.projectTitle}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">{project.clientName}</span>
          <span className="text-gray-500">{project.packageName}</span>
          <span className="text-gray-500">{project.deadline}</span>
          <span className={`px-3 py-1 rounded-full ${project.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
            {project.status}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Progress percent={calculateProgress()} showInfo={false} />
      </div>
      <Collapse accordion activeKey={expandedPanel} onChange={handlePanelChange}>
        {project.works.map((work) => (
          <Panel header={work.workTitle} key={work.workId}>
            <div className="space-y-4">
              {work.subtasks.map((subtask) => (
                <div key={subtask.taskId} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        subtask.status === 'Completed'
                          ? 'bg-green-200 text-green-800'
                          : subtask.status === 'In Progress'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {subtask.status}
                    </span>
                    <span>{subtask.taskTitle}</span>
                    <span className="text-gray-500">Assigned to: {subtask.assignedPerson}</span>
                    <span className="text-gray-500">Deadline: {subtask.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default WorkDetails;