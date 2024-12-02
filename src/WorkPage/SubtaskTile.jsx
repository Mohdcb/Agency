import React from 'react';
import { CornerDownRight, Maximize2, Plus } from 'lucide-react';

const SubtaskTile = ({ task, person, status, color1, color2 }) => {
    return (
      <div>
        <div
          className="p-2 mt-[-10p] flex justify-between rounded-xl items-center"
          style={{ backgroundColor: color1 } }
        >
          <div>
            <p className="text-[12px]">{task}</p>
            <div className="flex">
              <CornerDownRight strokeWidth={1} color="#13AE85" size={10} />
              <p className="text-[8px] text-[#888888] pl-1">/{person}</p>
            </div>
          </div>
          <div
            className="rotate-90 w-[47px] flex justify-center items-center mr-[-22px] rounded-t-lg h-[18px]"
            style={{ backgroundColor: color2 }}
          >
            <p className="text-white font-light text-[8px]">{status}</p>
          </div>
        </div>
      </div>
    );
  };

export default SubtaskTile;