import React from "react";
import { Home, Settings, List, BarChart2, Plus, Users, ClipboardList, ChartSpline, FolderOpenDot, Settings2 } from "lucide-react";
import './curve.css';
import { HomeSimple, ReportColumns } from "iconoir-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-50  flex items-center justify-around p-3 shadow-lg rounded-t-3xl bottom-[0px] w-full">
      <img className="w-full absolute" src="/images/Vector (1).svg" alt="background vector" />
      
      {/* Left icons */}
      <Link to="/" className="flex gap-1 flex-col items-center z-30 text-black text-[9px]">
        <HomeSimple height={25} width={25} strokeWidth={1} />
        <span>Home</span>
      </Link>

      <Link to="/Allprojects" className="flex gap-1 flex-col items-center z-30 text-black text-[9px]">
        <FolderOpenDot strokeWidth={1} className="w-6 h-6" />
        <span>Projects</span>
      </Link>

      {/* Central button */}
      <div className="mt-[-80px] mr-3 z-30">
        <button className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
          <Plus className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Right icons */}
      <Link to="/alltask" className="flex gap-1 flex-col items-center z-30 text-black text-[9px]">
        <ClipboardList strokeWidth={1} />
        <span>Task</span>
      </Link>

      <Link to="/settings" className="flex gap-1 flex-col items-center z-30 text-black text-[9px]">
        <Settings strokeWidth={1} />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default Navbar;
