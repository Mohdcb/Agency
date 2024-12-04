import React from 'react';
import Titlebar from '../Titlebar';
import Settingsdiv from './Settingsdiv';
import Settingsdiv2 from './Settingsdiv2';
import Personcard from './Personcard';
import MonthView from '../Dashboard/MonthView.jsx/MonthView';


function Companysettings() {
  return (
    <div className='p-5 lg:w-96 m-auto bg-[#F2F2F2] h-screen'>
            <Titlebar title={"Company"} />
            <div className='bg-white rounded-xl justify-between p-4 flex  py-5 mb-4 '>
                <div>
                    <img src="images/Company Logo (3).png" height={70} width={70} />
                    <h3 className='text-[12px]'>Premium Member </h3>
                    <p className='font-light text-[10px] text-[#888888]'> Since 2024 </p>
                </div>
                <div>
                    <div className='bg-[#F2F2F2] p-2 py-3 flex gap-1  rounded-lg'>
                        <div className='h-1 w-1 bg-[#888888] rounded'></div>
                        <div className='h-1 w-1 bg-[#888888] rounded'></div>

                    </div>
                </div>
            </div>

            <div>
                <h3 className='text-[#888888] pb-4 text-[12px]'> Company Holidays </h3>
                <MonthView />
            </div>

            <div>
                <h3 className='text-[#888888] text-[12px]'> Department's </h3>
                <div className='flex w-full overflow-scroll gap-3'>
                    <Settingsdiv2 title={"Videos"} img={"images/Layer_1 (1).svg"} />
                    <Settingsdiv2 title={"Website"} img={"images/Icon Container.svg"} />

                    <Settingsdiv2 title={"Marketing"} img={"images/Capa_1 (1).svg"} />
                    <Settingsdiv2 title={"Posters"} img={"images/Capa_1.svg"} />
                    <Settingsdiv2 title={"App"} img={"images/svg8.svg"} />


                </div> </div>



                <div>
  <div className="mt-4 flex flex-col">
    <h3 className="text-[#888888] text-[12px]">Admin Access</h3>

    {/* Scrollable container */}
    <div 
      className="flex gap-12 overflow-x-scroll no-scrollbar w-full mt-4" 
      style={{
        scrollSnapType: 'x mandatory', 
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Adjusting the width of each child */}
      <div className="flex-shrink-0 w-[25%]  scroll-snap-align-start">
        <Personcard Name="Krupa" Position="Project Manager" img="/images/emp1.png" />
      </div>
      <div className="flex-shrink-0 w-[25%] scroll-snap-align-start">
        <Personcard Name="Krupa" Position="Project Manager" img="/images/emp1.png" />
      </div>
      <div className="flex-shrink-0 w-[25%] scroll-snap-align-start">
        <Personcard Name="Krupa" Position="Project Manager" img="/images/emp1.png" />
      </div>
      <div className="flex-shrink-0 w-[25%] scroll-snap-align-start">
        <Personcard Name="Krupa" Position="Project Manager" img="/images/emp1.png" />
      </div>
      <div className="flex-shrink-0 w-[25%] scroll-snap-align-start">
        <Personcard Name="Krupa" Position="Project Manager" img="/images/emp1.png" />
      </div>
    </div>
  </div>
</div>




        </div>
  )
}

export default Companysettings
