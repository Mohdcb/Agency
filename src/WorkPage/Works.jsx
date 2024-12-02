import React, { useState } from 'react';
import Titlebar from '../Titlebar';
import { CornerDownRight, Cross, Maximize2, Plus, X } from 'lucide-react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline, Input, DatePicker, Select } from 'antd';
import SubtaskTile from './SubtaskTile';
import './Customant3.css';

const demoData = [
  {
    title: 'Video 1',
    description: 'Short description (if needed)',
    tasks: [
      {
        task: 'Scripting',
        person: 'Hashim',
        status: 'Done',
        color1: '#D0EFE7',
        color2: '#13AE85',
        date: '2024-12-01',
      },
      {
        task: 'Video Production',
        person: 'Vysakh',
        status: 'Done',
        color1: '#FFE0D6',
        color2: '#FF6333',
        date: '2024-12-02',
      },
      {
        task: 'Editing',
        person: 'Abhijith',
        status: 'Done',
        color1: '#E3E8FF',
        color2: '#748EFE',
        date: '2024-12-03',
      },
    ],
  },
  {
    title: 'Logo Design',
    description: 'Short description (if needed)',
    tasks: [
      {
        task: 'Concept Sketching',
        person: 'Alice Brown',
        status: 'Pending',
        color1: '#FFE0D6',
        color2: '#FF6333',
        date: null,
      },
      {
        task: 'Final Logo Rendering',
        person: 'Michael Green',
        status: 'Pending',
        color1: '#E3E8FF',
        color2: '#748EFE',
        date: null,
      },
    ],
  },
  {
    title: 'Social Media Ads',
    description: 'Short description (if needed)',
    tasks: [
      {
        task: 'Ad Copywriting',
        person: 'Lucas Grey',
        status: 'In Progress',
        color1: '#D0EFE7',
        color2: '#13AE85',
        date: '2024-12-01',
      },
      {
        task: 'Creative Design',
        person: 'Olivia Black',
        status: 'Pending',
        color1: '#FFE0D6',
        color2: '#FF6333',
        date: null,
      },
    ],
  },
];

function Works() {

    // State to manage visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  const [expandedIndex, setExpandedIndex] = useState(null);
  const [newTask, setNewTask] = useState({
    task: '',
    person: '',
    date: null,
    color1: 'rgb(208, 239, 231)',
    color2: 'rgb(19, 174, 133)',
  });

 
  const [assignedPersons] = useState([
    'Hashim', 'Vysakh', 'Abhijith', 'Alice Brown', 'Michael Green', 'Lucas Grey', 'Olivia Black'
  ]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  

  const handleAddTask = (index) => {
    demoData[index].tasks.push({
      task: newTask.task,
      person: newTask.person,
      status: 'Pending',
      color1: newTask.color1,
      color2: newTask.color2,
      date: newTask.date,
    });
    setNewTask({
      task: '',
      person: '',
      date: null,
      color1: 'rgb(208, 239, 231)',
      color2: 'rgb(19, 174, 133)',
    });
  };

  return (
    <div className="p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen">
      <Titlebar title={'Works Page '} />

      {demoData.map((work, index) => (
        <div key={index} className="bg-white mb-5 rounded-2xl p-4">
          <div className="flex pt-2 justify-between">
            <div>
              <h3 className="text-[14px]">{work.title}</h3>
              <p className="text-[10px] text-[#888888] font-[400]">{work.description}</p>
            </div>
            <div className="flex gap-2">
              <div
                className="bg-[#F2F2F2] shadow-sm rounded-md flex items-center justify-center p-1 w-[26px] h-[26px] cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? (
                  <CornerDownRight size={20} strokeWidth={1} />
                ) : (
                  <Maximize2 size={13} strokeWidth={1} />
                )}
              </div>

              <div
                className="bg-[#F2F2F2] rounded-md flex items-center shadow-sm justify-center p-1 w-[26px] h-[26px] cursor-pointer"
                 onClick={toggleVisibility}
              >
                {isVisible === false ? (
          <Plus size={20} strokeWidth={1} className='transition-transform duration-300' />
        ) : (
          <Plus size={20} strokeWidth={1} className="rotate-45 transition-transform duration-300" />
        )}
     
              </div>
            </div>
          </div>

          {expandedIndex === index && (
            <div className="pt-8">
              <Timeline
                items={work.tasks.map((task, taskIndex) => ({
                  children: (
                    <SubtaskTile
                      task={task.task}
                      person={task.person}
                      status={task.status}
                      color1={task.color1}
                      color2={task.color2}
                      date={task.date}
                    />
                  ),
                }))}
              />

{isVisible && (
              <div className=" pl-[26px] grid gap-2">
                <div>
                <Input
                  placeholder="Task Name"
                  value={newTask.task}
                  onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                />
                </div>
                <div className='flex gap-3'>
                <div className='w-[65%]'>
                <Select
                  placeholder="Assign Person"
                  value={newTask.person}
                  showSearch
                  style={{ width: 130,height:32 }}
                  onChange={(value) => setNewTask({ ...newTask, person: value })}
                >
                  {assignedPersons.map((person, index) => (
                    <Select.Option key={index} value={person}>
                      {person}
                    </Select.Option>
                  ))}
                </Select>
                </div>
                <div className='w-[50%]'>
                <DatePicker
                  placeholder="Select Date"
                  value={newTask.date}
                  onChange={(date) => setNewTask({ ...newTask, date })}
                />
</div>
</div>

                <div
                  className="bg-[#F2F2F2] rounded-md flex items-center justify-center p-1 w-[26px] h-[32px] absolute left-[30px] cursor-pointer"
                  onClick={() => handleAddTask(index)}
                >
                  <Plus size={20} strokeWidth={1} />
                </div>
              </div>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Works;
