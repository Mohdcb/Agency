import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../Titlebar';
import { Avatar } from 'antd';
import Settingsdiv from './Settingsdiv';
import Settingsdiv2 from './Settingsdiv2';


function Mainsettings() {
  return (
    <div className="p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen">
      <Titlebar title={"Settings"} />
      <div className="bg-white rounded-xl justify-between p-4 flex py-5 mb-4">
        <div>
          <Avatar src="/images/emp1.png" />
          <h3>Krupa</h3>
          <p className="font-light text-[10px] text-[#888888]">Project Manager</p>
        </div>
        <div>
          <div className="bg-[#F2F2F2] p-2 py-3 flex gap-1 rounded-lg">
            <div className="h-1 w-1 bg-[#888888] rounded"></div>
            <div className="h-1 w-1 bg-[#888888] rounded"></div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#888888] text-[12px]">Organizational Framework</h3>
        <Link to="/company-settings">
          <Settingsdiv title={"Company Information"} img={"images/Company Icon Container.svg"} />
        </Link>
      </div>

      <div className="mt-5">
        <h3 className="text-[#888888] text-[12px]">Project Operations</h3>
        <Link to="/projects-settings">
          <Settingsdiv title={"Project Settings"} img={"images/Project Icon.svg"} />
        </Link>
        <Link to="/work-settings">
          <Settingsdiv title={"Work Settings"} img={"images/Layer_1.svg"} />
        </Link>
        {/* <Link to="/task-settings">
          <Settingsdiv title={"Task Settings"} img={"images/Task Icon.svg"} />
        </Link> */}
      </div>

      <div className="mt-5">
        <h3 className="text-[#888888] text-[12px]">Employee</h3>
        <Link to="/user-settings">
          <Settingsdiv title={"Employee Settings"} img={"images/svg8.svg"} />
        </Link>
      </div>
    </div>
  );
}

export default Mainsettings;
