import React, { useState } from 'react';
import { Input, DatePicker, Radio, Checkbox, Button, Select } from 'antd';
import Titlebar from '../Titlebar';
import './Customany2.css';
import { Group, PageEdit } from 'iconoir-react';
import { Maximize2 } from 'lucide-react';

const AddNewTaskPage = () => {
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    dueDate: null,
    deliverable: 'Video X1',
    priority: 'Urgent',
    videoProjects: [
      {
        name: 'Video Project 1',
        tasks: {
          scripting: false,
          videoProduction: false,
          editing: false,
        },
      },
    ],
  });

  const options = [
    { value: 'Video X1', label: 'Video X1' },
    { value: 'Video X2', label: 'Video X2' },
  ];

  const handleInputChange = (field, value) => {
    setTaskDetails((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleVideoProjectChange = (projectIndex, field, value) => {
    setTaskDetails((prevState) => ({
      ...prevState,
      videoProjects: prevState.videoProjects.map((project, index) =>
        index === projectIndex
          ? { ...project, tasks: { ...project.tasks, [field]: value } }
          : project
      ),
    }));
  };

  const handleAssign = () => {
    if (taskDetails.deliverable === 'Video X1') {
      setTaskDetails((prevState) => ({
        ...prevState,
        videoProjects: [prevState.videoProjects[0]],
      }));
    } else {
      setTaskDetails((prevState) => ({
        ...prevState,
        videoProjects: [
          prevState.videoProjects[0],
          {
            name: 'Video Project 2',
            tasks: {
              scripting: false,
              videoProduction: false,
              editing: false,
            },
          },
        ],
      }));
    }
  };

  return (
    <div className="space-y-4 lg:w-96 bg-[#F2F2F2] h-screen p-5">
      <Titlebar title={'Add New Task'} />
      <div className=" rounded-2xl p-4 bg-white ">
        <h2 className="text-sm mb-4">Details of the Task</h2>
        <div className="space-y-4">
          <Input
            placeholder="Title of the Task"
            value={taskDetails.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full"
          />
          <div className="flex items-center space-x-4">
            <DatePicker
              placeholder="Due Date"
              onChange={(date) => handleInputChange('dueDate', date)}
              className="w-full"
            />
            <Select
              showSearch
              placeholder="Select a video"
              optionFilterProp="children"
              onChange={(value) => handleInputChange('deliverable', value)}
              className="w-full"
              filterOption={(input, option) =>
                option?.label.toLowerCase().includes(input.toLowerCase())
              }
              options={options}
            />
          </div>
          <div>
            <h4 className='pb-2 text-sm'>Level of Priority</h4>
            <Radio.Group
              value={taskDetails.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
              className="flex space-x-4"
            >
              <Radio value="Urgent" className=" text-black">
                Urgent
              </Radio>
              <Radio value="Moderate" className=" text-black">
                Moderate
              </Radio>
              <Radio value="Minimal" className=" text-black">
                Minimal
              </Radio>
            </Radio.Group>
          </div>
        </div>
      </div>

      <div className=" bg-white rounded-2xl p-4">
        <div className='flex justify-between items-center pb-4'>
          <div>
            <h2 className=" mb-4">Video Project 1</h2>
          </div>
          <div className='flex gap-2 '>
            <div className='p-2 flex justify-center items-center bg-[#F2F2F2] rounded-xl'>
              <PageEdit strokeWidth={1} width={17} height={17} />
            </div>
            <div className='p-2 flex justify-center items-center bg-[#F2F2F2] rounded-xl'>
              <Maximize2 strokeWidth={1} width={17} height={17} />
            </div>
          </div>

        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center  justify-between">
            <div className='flex justify-center items-center gap-3'>
              <Checkbox></Checkbox>
              <span className="text-black text-[14px] font-normal hover:underline cursor-pointer">
                Scripting
              </span>
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <PageEdit strokeWidth={1} width={13} height={13} />
              </div>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <Group strokeWidth={1} width={13} height={13} />
              </div>
            </div>
          </div>

          <div className="flex items-center  justify-between">
            <div className='flex justify-center items-center gap-3'>
              <Checkbox></Checkbox>
              <span className="text-black text-[14px] font-normal hover:underline cursor-pointer">
                Video Production
              </span>
            </div>
            <div className='flex gap-2'>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <PageEdit strokeWidth={1} width={13} height={13} />
              </div>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <Group strokeWidth={1} width={13} height={13} />
              </div>
            </div>
          </div>

          <div className="flex items-center  justify-between">
            <div className='flex justify-center items-center gap-3'>
              <Checkbox></Checkbox>
              <span className="text-black text-[14px] font-normal hover:underline cursor-pointer">
                Editing
              </span>
            </div>
            <div className='flex gap-2'>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <PageEdit strokeWidth={1} width={13} height={13} />
              </div>
              <div className='p-2 bg-[#F2F2F2] rounded-xl'>
                <Group strokeWidth={1} width={13} height={13} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button 
          type="primary"
          onClick={handleAssign}
          className="bg-[#D0EFE7] py-10 hover:bg-bla text-[#13AE85] w-full"
        >
          Manual Assign
        </Button>
        <Button
          type="primary"
          onClick={handleAssign}
          className="bg-[#13AE85] hover:bg-bla text-white w-full"
        >
          Auto Assign
        </Button>
      </div>
    </div>
  );
};

export default AddNewTaskPage;