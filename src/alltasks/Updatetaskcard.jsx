import { Avatar, Button } from 'antd';
import React, { useState } from 'react';
import CalendarView from '../Dashboard/CalenderView';
import { CircleCheck, Edit2Icon } from 'lucide-react';

function Updatetaskcard() {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility
  const [selectedStatus, setSelectedStatus] = useState(''); // Track selected status

  // Close the popup when called
  const handleClose = () => {
    setIsVisible(false);
  };

  // If the component is not visible, return null (do not render)
  if (!isVisible) return null;

  // Handler for changing status
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="bg-[#faf9f5] p-7 fixed z-50 w-full left-0 bottom-0 rounded-t-2xl h-[391px]">
      {/* Close Button */}
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 text-gray-600"
      >
        X
      </button>

      <div className="w-[50px] h-[1px] bg-[#888888]"></div>
      <div className="mb-3">
        <h3 className="text-[14px]">Grodience / Nov</h3>
        <p className="font-light text-[12px] text-[#888888]">Scripting</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white flex py-3 flex-col items-center border border-blue-800 rounded-2xl">
          <Avatar src="images/Task Image 1.png" size={55} />
          <h3 className="text-[12px]"> Hashim </h3>
        </div>
        <div className="bg-white flex py-3 flex-col items-center rounded-2xl">
          <Avatar src="images/Task Image 1.png" size={55} />
          <h3 className="text-[12px]"> Hashim </h3>
        </div>
        <div className="bg-white flex py-3 flex-col items-center rounded-2xl">
          <Avatar src="images/Task Image 1.png" size={55} />
          <h3 className="text-[12px]"> Hashim </h3>
        </div>
      </div>

      <CalendarView />

      <div className="grid grid-cols-3 gap-4">
        <Button 
          className={`py-3 flex items-center justify-center gap-1 rounded-md p-1 ${selectedStatus === 'Done' ? 'bg-[#13AE85] text-white' : 'bg-[#F2F2F2] text-[#13AE85]'}`} 
          onClick={() => handleStatusChange('Done')}
        >
          <p className="text-[10px]">Done</p>
          <CircleCheck size={12} strokeWidth={1} />
        </Button>

        <Button 
          className={`py-3 flex items-center justify-center gap-1 rounded-md p-1 ${selectedStatus === 'Changes' ? 'bg-[#FF6333] text-white' : 'bg-[#F2F2F2] text-[#FF6333]'}`} 
          onClick={() => handleStatusChange('Changes')}
        >
          <p className="text-[10px]">Changes</p>
          <Edit2Icon size={12} strokeWidth={1} />
        </Button>

        <Button 
          className={`py-3 flex items-center justify-center gap-1 rounded-md p-1 ${selectedStatus === 'Confirmed' ? 'bg-[#748EFE] text-white' : 'bg-[#F2F2F2] text-[#748EFE]'}`} 
          onClick={() => handleStatusChange('Confirmed')}
        >
          <p className="text-[10px]">Confirmed</p>
          <CircleCheck size={12} strokeWidth={1} />
        </Button>
      </div>

      <div className="bg-[#13AE85] rounded-lg py-2 mt-4">
        <p className="text-white text-center">Apply</p>
      </div>
    </div>
  );
}

export default Updatetaskcard;
