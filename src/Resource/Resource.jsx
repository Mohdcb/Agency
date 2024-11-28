import React from 'react'
import CapacityComp from '../Report/CapacityComp'
import { Teamdata } from './Teamdata';
import { Avatar,Badge } from 'antd';
import Titlebar from '../Titlebar';
import { Clock } from 'lucide-react';
import { ClockRotateRight } from 'iconoir-react';



function Resource() {

    let size = 55;

    

    return (
        <div className="lg:w-96 bg-[#F2F2F2] h-screen p-4 mb-40">
            <Titlebar title={"Resources"}/>
            <div className='bg-white rounded-2xl p-4 '>
            <h2 className='pt-2 pb-2'> Employees </h2>
            <div class="grid grid-cols-5 grid-rows-1 gap-1 ">
            <Badge dot>
            <Avatar size={size} src={Teamdata.employees[0].image}></Avatar>     </Badge>

            <Avatar size={size} src={Teamdata.employees[1].image}></Avatar>

            <Avatar size={size} src={Teamdata.employees[2].image}></Avatar>


            <Avatar size={size} src={Teamdata.employees[3].image}></Avatar>

            <Avatar size={size} src={Teamdata.employees[2].image}></Avatar>

            <Avatar size={size} src={Teamdata.employees[1].image}></Avatar>
            <Avatar size={size} src={Teamdata.employees[0].image}></Avatar>
            <Avatar size={size} src={Teamdata.employees[3].image}></Avatar>
            <Avatar size={size} src={Teamdata.employees[2].image}></Avatar>
            <Avatar size={size} src={Teamdata.employees[1].image}></Avatar>



            </div>
            </div>
            <div className='bg-white rounded-2xl mt-4 p-4 '>
            <h2 className='pt-2 pb-4 text-center'> Company timing </h2>
            <div className='flex items-center  justify-evenly '>
                <div className='flex p-3 rounded-2xl gap-2 bg-[#f2f2f2] text-[#13AE85]'>
                    <ClockRotateRight color='#13AE85'/>
                    <p> 10:00 am </p>
                </div>
                <div className='flex p-3 rounded-2xl gap-2 bg-[#f2f2f2] text-[#13AE85]'>
                    <ClockRotateRight color='#13AE85'/>
                    <p> 8:00 pm </p>
                </div>
            </div>

            
            
            </div>

            <CapacityComp title={"Task Capacity"} t1={"Editors"} t2={"Graphic design"} t3={"Web design"} p1={42} p2={91} p3={12} />

        </div>
    )
}

export default Resource
