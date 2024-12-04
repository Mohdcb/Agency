import React, { useMemo, useState, useEffect } from 'react';
import { Search, Settings2 } from 'lucide-react';
import { Avatar, Popover, List, Modal, Input, Progress } from "antd";
import CalendarView from './CalenderView';
import TaskCard from '../alltasks/TaskCard';

// Import employee data
import employeeData from '../Employeedata.json';

// Import project data
import projectData from '../ProjectData.json';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    assignee: null,
    status: null,
    date: null,
    taskTitle: null
  });

  const handleShowAll = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEmployees = employeeData.employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDateChange = (date) => {
    setFilters(prev => ({
      ...prev,
      date: date
    }));
  };

  const filteredTasks = useMemo(() => {
    if (!projectData) return { tasks: [] };

    const tasks = projectData.flatMap((project) =>
      project.works.flatMap((work) =>
        work.subtasks
          .filter((task) => {
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

  return (
    <div className="lg:w-96 p-4 b-40 ">
      <div className='pt-5 pb-5 flex items-center justify-between gap-4'>
        <h1> Dashboard </h1>
        <div className='flex gap-2 '>
          <div className='bg-white p-2 rounded-lg shadow-sm'><Search size={20} /></div>
          <div className='bg-white p-2 rounded-lg shadow-sm'><Settings2 /></div>
        </div>
      </div>
      <div className='flex flex-row gap-3'>
        <div className="p-4 bg-white rounded-2xl w-[48%]">
          <h2 className="mb-4">Employees</h2>
          <div className="grid grid-row-2 grid-cols-3 flex-wrap gap-2">
            {employeeData.employees.slice(0, 5).map((employee, index) => (
              <Popover content={employee.name} key={index}>
                <Avatar src={employee.image} size={45} />
              </Popover>
            ))}
            {employeeData.employees.length > 5 && (
              <div
                onClick={handleShowAll}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 cursor-pointer border border-blue-300"
              >
                <span className="text-blue-950 font-medium">
                  {`+${employeeData.employees.length - 5}`}
                </span>
              </div>
            )}
          </div>
          <Modal
            title="All Employees"
            open={isModalOpen}
            onCancel={handleCloseModal}
            footer={null}
          >
            <Input
              placeholder="Search employees..."
              value={searchQuery}
              onChange={handleSearch}
              className="mb-4"
            />
            <List
              dataSource={filteredEmployees}
              renderItem={(employee) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={employee.image} />}
                    title={employee.name}
                  />
                </List.Item>
              )}
            />
          </Modal>
        </div>
        <div className="p-4 bg-white rounded-2xl w-[48%]">
          <div className='bg-white m pb-6 rounded-xl'>
            <h3 className='pb-3'>Resources</h3>
            <div className='pb-2'>
              <Progress showInfo={false} percent={50} status="active" size={[, 11]} strokeColor="#13AE85" />
              <p className='text-[14px] mt-[-3px] font-extralight'>Timing</p>
            </div>
            <div>
              <Progress showInfo={false} percent={80} status="active" size={[, 11]} strokeColor="#FF6333" />
              <p className='text-[13px] mt-[-3px] font-extralight'>Task</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-4 mb-4 mt-3 rounded-xl'>
        <h3 className='pb-5'>Tasks Overview</h3>
        <div className='flex'>
          <div className='w-1/3 flex items-center flex-col gap-2 '>
            <Progress type="circle" percent={34} size={60} strokeWidth={10} format={(percent) => `${percent}`} strokeColor={"#13AE85"} />
            <p className='text-center text-[#888888] text-[12px] font-light'>Pending</p>
          </div>
          <div className='w-1/3 flex items-center flex-col gap-2'>
            <Progress type="circle" percent={59} size={60} strokeWidth={10} format={(percent) => `${percent}`} strokeColor={'#FF6333'} />
            <p className='text-center text-[#888888] text-[12px] font-light'>In Progress</p>
          </div>
          <div className='w-1/3 flex items-center flex-col gap-2'>
            <Progress type="circle" percent={90} size={60} format={(percent) => `${percent}`} strokeWidth={10} strokeColor={'#748EFE'} />
            <p className='text-center text-[#888888] text-[12px] font-light'>Completed</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className='pt-5'> Tasks </h3>
        <div className='pt-3'>
          <CalendarView onDateChange={handleDateChange} />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-3'>
        {filteredTasks.tasks.map((task) => {
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
    </div>
  );
}

export default Dashboard;

