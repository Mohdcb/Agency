import React from 'react';
import ProjectDetails from './WorkDetails';
import projectData from '../ProjectData.json';

const WorkPage = () => {
  return (
    <div className="container mx-auto py-8">
      <ProjectDetails project={projectData[0]} />
    </div>
  );
};

export default WorkPage;