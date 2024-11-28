import React from 'react';
import { Card, Divider, Avatar, Input, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Titlebar from '../Titlebar';
import { SendDiagonalSolid } from 'iconoir-react';
import { CornerDownRight, CornerDownRightIcon } from 'lucide-react';

const { TextArea } = Input;

const TaskDetails = () => {
    const taskData = [
        { name: 'John Doe', image: '/images/Task Image 1.png', role: 'Editor' },
        { name: 'Jane Smith', image: '/images/Task Image 2 (1).png' },
        { name: 'Bob Johnson', image: '/images/Task Image 3.png' },
        { name: 'Sarah Lee', image: '/images/Task Image 3 (1).png' },
    ];

    return (
        <div className="p-5 h-screen bg-gray-100">
            <Titlebar title={"Task Details"} />
            <div className="flex items-center justify-end pb-4">
                <Avatar src={taskData[0].image} className="mr-2" />
                <div className='flex-col gap-0'>
                    <p className="text-black text-[10px]">{taskData[0].name}</p>
                    <p className="text-black text-right  text-[10px]">{taskData[0].role}</p>
                </div>
            </div>
            <div className="p-4 bg-white rounded-2xl">
                <div className="flex items-center justify-between">
                    <div >
                        <p className="text-black  text-base">Scripting</p>
                        <div className='flex ml-2'><CornerDownRightIcon size={12} /> <p className='text-[10px]'>Project Name </p> </div>
                    </div>
                    <div className="flex items-center">
                        {/* <Avatar src={taskData[0].image} className="mr-2" />
            <p className="text-black  text-base">{taskData[0].name}</p> */}
                        <p className="text-black  text-base">Xyrus Project</p>

                    </div>
                </div>
                <Divider className="my-4" />
                <div className="mb-4">
                    <TextArea rows={3} placeholder="Enter task description" className="text-black  text-base" />
                </div>
            </div>

            <div className="mb-4 bg-white rounded-2xl p-4 mt-5">
                <p className="text-black pb-4 ">Notes</p>
                <div>
                    <div className='flex flex-row-reverse justify-end gap-2'>
                        <div className="bg-[#D0EFE7] p-2 rounded-md mb-2">

                            <p className="text-black text-[10px]  ">Hi i need a more clarification on this !</p>
                            <p className='text-[7px] text-gray-600 text-right'> 12:00 am </p>
                        </div>
                        <div>
                            <Avatar src={taskData[1].image} className="mr-2" />
                        </div>
                    </div>

                    <div className='flex justify-end gap-4'>
                        <div className="bg-[#E3E8FF] p-2 rounded-md mb-2">
                            <p className="text-black text-[10px]  ">Sure I can help you out !</p>
                            <p className='text-[7px] text-gray-600 text-right'> 12:00 am</p>
                        </div>
                        <div>
                            <Avatar src={taskData[0].image} className="mr-2" />
                        </div>
                    </div>
                    <div className='pt-5 flex items-center gap-2 justify-center'>
                        <TextArea rows={1} placeholder="Enter task description" className="text-black w-4/5 pt-5 text-base" />
                        <div className='bg-[#f2f2f2] p-[6px] rounded-lg'><SendDiagonalSolid width={20} height={20} /></div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default TaskDetails;