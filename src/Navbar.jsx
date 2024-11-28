import React from "react";
import { Home, Settings, List, BarChart2, Plus, Users, ClipboardList, ChartSpline } from "lucide-react";
import './curve.css' ;
import { HomeSimple, ReportColumns } from "iconoir-react";

const Navbar = () => {
  return (
    <div   style={{ background: 'radial-gradient(circle at 50% -10%, transparent 20%, white 20%)' }} 

className="fixed z-50 bg-blue-50 b- flex items-center justify-around p-3 shadow-lg rounded-t-3xl bottom-0 w-full ">
      {/* Left icons */}
      <div className="flex gap-1 flex-col items-center text-black text-[9px]">
        
        <HomeSimple height={25} width={25} strokeWidth={1} />
        <span>Home</span>
      </div>
      <div className="flex gap-1 flex-col items-center text-black text-[9px]">
        <Users strokeWidth={1} className="w-6 h-6" />
        <span>Resources</span>
      </div>

      {/* Central button */}
      <div className="mt-[-80px] mr-3 ">
        <button className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
          <Plus className="text-white w-6 h-6" />
          
        </button>
      </div>

      {/* Right icons */}
      <div className="flex gap-1 flex-col items-center text-black text-[9px]">
        
        <ClipboardList strokeWidth={1} / >
        <span>Task</span>
      </div>
      <div className="flex gap-1 flex-col items-center text-black text-[9px]">
        <ChartSpline strokeWidth={1}/>

        <span>Reports</span>
      </div>
    </div>
  );
};

export default Navbar;
