// import { Search } from 'iconoir-react'
import { ChevronLeft, Search, Settings2 } from 'lucide-react'
import React from 'react'
import { Flex, Progress } from 'antd';
import '../All Projects/Customant.css';
import CapacityComp from './CapacityComp';



function Report() {
    return (
        <div className="lg:w-96 bg-[#F2F2F2] h-screen p-4 mb-40">

            <div className='pt-5 pb-5 flex items-center justify-between gap-4'>

                <h1> Report and Analysis </h1>
                <div className='flex gap-2 '><div className='bg-white p-2 rounded-lg shadow-sm'><Search size={20} /></div>
                    <div className='bg-white p-2 rounded-lg shadow-sm'><Settings2 /></div></div>
            </div>


            <div className='bg-white p-4 mb-4 rounded-xl'>
                <h3 className='pb-5'>Tasks Overview</h3>
                <div className='flex'>
                    <div className='w-1/3 flex items-center flex-col gap-2 '>
                        <Progress type="circle" percent={34} size={80} strokeWidth={12} format={(percent) => `${percent}`} strokeColor={"#13AE85"} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>Pending</p>
                    </div>
                    <div className='w-1/3 flex items-center flex-col gap-2'>
                        <Progress type="circle" percent={59} size={80} strokeWidth={12} format={(percent) => `${percent}`} strokeColor={'#FF6333'} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>In Progress</p>
                    </div>
                    <div className='w-1/3 flex items-center flex-col gap-2'>
                        <Progress type="circle" percent={90} size={80} format={(percent) => `${percent}`} strokeWidth={12} strokeColor={'#748EFE'} />
                        <p className='text-center text-[#888888] text-[12px] font-thin'>Completed</p>
                    </div>
                </div>

            </div>

            <h3>Resource Utilization</h3>

        <CapacityComp title={"Employee Workload"} t1={"Editors"} t2={"Graphic design"} t3={"Web design"} p1={42} p2={91} p3={12} />

            <div className='bg-white mt-4 p-4 mb-6 rounded-xl'>
                <h3> Company Time </h3>
                <div>
                    <p className='pt-5 mb-[-25px] text-[14px]'>10:00 - 06:00</p>
                    <Progress percentPosition={{
                        align: 'center',
                        type: 'outer',
                    }} percent={23} status="active" size={[300, 11]} strokeColor="#13AE85" />
                </div>
            </div>

        </div>
    )
}

export default Report
