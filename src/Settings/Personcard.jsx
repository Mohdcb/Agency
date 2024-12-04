import { Avatar } from 'antd'
import React from 'react'

const Personcard = ({Name, Position , img})=> {
  return (
    
      <div className='bg-white rounded-xl w-[114px] p-3 items-center py-5 flex flex-col'>
            <Avatar src={img} size={40}/>
             <h3 className='pt-2 text-[14px]'> {Name} </h3>
             <p className=' font-light text-[10px] text-[#888888]'> {Position} </p>
           </div>
    
  )
}

export default Personcard
