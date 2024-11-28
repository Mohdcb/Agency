import React from 'react';
import { Avatar, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Titlebar from '../Titlebar';
import { CornerDownRight } from 'lucide-react';

const Notification = () => {
  const notifications = [
    {
      name: 'Darshana',
      image: '/images/Task Image 3 (1).png' ,
      role: 'editing task',
      type: 'note',
      time: '12:30 pm',
      date: '2024-11-28',
    },
    {
      name: 'Aadhil',
      image: '/images/Task Image 3.png',
      role: 'digital marketing task',
      type: 'note',
      time: '12:30 pm',
      date: '2024-11-28',
    },
    {
      name: 'Farzana',
      image: '/images/Task Image 1.png',
      role: 'social media',
      type: 'complete',
      time: '12:30 pm',
      date: '2024-11-26',
    },
    {
      name: 'Nibraz',
      image: '/images/Task Image 2 (1).png' ,
      role: 'posters',
      type: 'complete',
      time: '04:57 pm',
      date: '2024-11-26',
    },
  ];

  // Hardcoded current date to match your sample data
  const getCurrentDate = () => {
    return '2024-11-28';
  };

  // Filter notifications
  const today = notifications.filter((n) => n.date === getCurrentDate());
  const otherDays = notifications.filter((n) => n.date !== getCurrentDate());

  return (
    <div className="lg:w-96 bg-[#F2F2F2] h-screen p-4">
     <Titlebar title={"Notification"}/>
      <div>
        <h4 className="text-black text-sm mb-4">Today</h4>
        {today.length > 0 ? (
          today.map((notification, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <Avatar src={notification.image} className="mr-2" />
                <div>
                  <p className="text-gray-800 text-[12px]">
                    {notification.name} {notification.type === 'note' ? 'has been sent a note' : 'has completed their task'}
                  </p>
                 <div className='flex i pl-2 gap-1'> <CornerDownRight size={12} color='green'/>
                  <p className="text-[#888888] text-[10px] font-light">/{notification.role}</p> </div>
                </div>
              </div>
              <div className="text-[#888888] text-[9px]">
                {notification.time}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No notifications for today</p>
        )}

        <Divider className="my-4" />

        <h4 className="text-Black text-sm mb-4">Other Days</h4>
        {otherDays.length > 0 ? (
          otherDays.map((notification, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl p-4 mb-4 flex items-center justify-between"
            >
                   <div className="flex items-center">
                <Avatar src={notification.image} className="mr-2" />
                <div>
                  <p className="text-gray-800 text-[12px]">
                    {notification.name} {notification.type === 'note' ? 'has been sent a note' : 'has completed their task'}
                  </p>
                 <div className='flex i pl-2 gap-1'> <CornerDownRight size={12} color='green'/>
                  <p className="text-[#888888] text-[10px] font-light">/{notification.role}</p> </div>
                </div>
              </div>
              <div className="text-[#888888] text-[9px]">
                {notification.time}
              </div>
            
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No notifications from other days</p>
        )}
      </div>
    </div>
  );
};

export default Notification;