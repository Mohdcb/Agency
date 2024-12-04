import React from 'react';
import Titlebar from '../Titlebar';
import Settingsdiv from './Settingsdiv';
import Settingsdiv2 from './Settingsdiv2';

function Worksettings() {
    return (
            


       

        <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen'>
            <Titlebar title={"Department"} />


            <div>
                <h3 className='text-[#888888] text-[12px]'> All Works </h3>
                <div className='grid grid-cols-2  gap-x-4 gap-y-[0]'>
                <Settingsdiv2 title={"Videos"} img={"images/Layer_1 (1).svg"} />
                <Settingsdiv2 title={"Website"} img={"images/Icon Container.svg"} />

                <Settingsdiv2 title={"Marketing"} img={"images/Capa_1 (1).svg"} />
                <Settingsdiv2 title={"Posters"} img={"images/Capa_1.svg"} />
                <Settingsdiv2 title={"App"} img={"images/svg8.svg"} />


                </div>
            </div>
            </div>
            
  )
}

export default Worksettings
