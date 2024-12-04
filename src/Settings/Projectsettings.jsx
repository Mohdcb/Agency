import React from 'react';
import Titlebar from '../Titlebar';
import Settingsdiv from './Settingsdiv';
import Settingsdiv2 from './Settingsdiv2';

function Projectsettings() {
  return (
    <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen'>
    <Titlebar title={"Projects"} />


    <div>
        <h3 className='text-[#888888] text-[12px]'> All Packages </h3>
        <div className='grid grid-cols-2  gap-x-4 gap-y-[0]'>
        <Settingsdiv2 title={"Package 1"} img={"images/Layer_1 (1).svg"} />
        <Settingsdiv2 title={"Web Package"} img={"images/Icon Container.svg"} />

        <Settingsdiv2 title={"Marketing Package"} img={"images/Capa_1 (1).svg"} />
        <Settingsdiv2 title={"New Year package"} img={"images/Capa_1.svg"} />

        </div>
    </div>

    <div className='pt-5'>
        <h3 className='text-[#888888] text-[12px]'> Clients </h3>
        <div className='grid grid-cols-2  gap-x-4 gap-y-[0]'>
        <Settingsdiv2 title={"Grodience"} img={"images/Layer_1 (2).svg"} />
        <Settingsdiv2 title={"Asmr"} img={"images/Layer_1 (3).svg"} />

        <Settingsdiv2 title={"Colour Code"} img={"images/Layer_1 (4).svg"} />
        <Settingsdiv2 title={"Vyb"} img={"images/Layer_1 (5).svg"} />

        </div>
    </div>
</div>
  )
}

export default Projectsettings
