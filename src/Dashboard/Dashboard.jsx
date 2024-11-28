import { Search, Settings2 } from 'lucide-react'
import React,{ useState } from 'react'
import { Avatar, Popover, List, Modal, Input,Progress } from "antd";
import { Teamdata } from "../Resource/Teamdata.jsx";
import CalendarView from './CalenderView.jsx'; 
import TaskCard from  '../Task/TaskCard.jsx';
import { tasks } from '../Task/Tasks.jsx';





function Dashboard() {


    let p1=50;
    let p2=80;
    let t1="Timing";
    let t2 = "Task";
    let title = "Resources";


    const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Open modal
  const handleShowAll = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchQuery(""); // Clear search query when closing the modal
  };

  // Handle search query change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter employees based on search query
  const filteredEmployees = Teamdata.employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div className="lg:w-96 bg-[#F2F2F2] p-4 b-40">
     <div className='pt-5 pb-5 flex items-center justify-between gap-4'>

<h1> Dashboard </h1>
<div className='flex gap-2 '><div className='bg-white p-2 rounded-lg shadow-sm'><Search size={20} /></div>
    <div className='bg-white p-2 rounded-lg shadow-sm'><Settings2 /></div></div>
</div>
<div className='flex flex-row gap-3'>
<div className="p-4 bg-white rounded-2xl w-[48%]">
      <h2 className=" mb-4">Employees</h2>
      <div className="grid grid-row-2 grid-cols-3 flex-wrap gap-2">
        {/* Render first 5 employees */}
        {Teamdata.employees.slice(0, 5).map((employee, index) => (
          <Popover content={employee.name} key={index}>
            <Avatar src={employee.image} size={45} />
          </Popover>
        ))}

        {/* Render "10+" if more employees exist */}
        {Teamdata.employees.length > 5 && (
          <div
            onClick={handleShowAll}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 cursor-pointer border border-blue-300"
          >
            <span className="text-blue-950 font-medium">
              {`+${Teamdata.employees.length - 5}`}
            </span>
          </div>
        )}
      </div>

      {/* Modal for displaying all employees */}
      <Modal
        title="All Employees"
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        {/* Search Input */}
        <Input
          placeholder="Search employees..."
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4"
        />

        {/* List of employees */}
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
    <div className='bg-white m pb-6  rounded-xl'>
                <h3 className='pb-3'>{title}</h3>
                <div className='pb-2'>
                   
                    <Progress         showInfo={false} 
 percent={p1} status="active" size={[, 11]} strokeColor="#13AE85"  />
                     <p className=' text-[14px] mt-[-3px] font-extralight'>{t1}</p>
                </div>

                <div>
                   
                    <Progress         showInfo={false} 
 percent={p2} status="active" size={[, 11]} strokeColor="#FF6333" />
                     <p className='text-[13px] mt-[-3px] font-extralight'>{t2}</p>
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



            <h3 className='mb-3'>
                Tasks
            </h3>
            <CalendarView />


            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
  );
}

export default Dashboard
