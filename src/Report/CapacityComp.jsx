import { Progress } from 'antd'
import React from 'react'

const CapacityComp =( {title, t1 , p1 , t2 , p2 , t3 , p3}) =>{
  return (
    <div>
      <div className='bg-white mt-4 p-4 pb-6 mb-6 rounded-xl'>
                <h3>{title}</h3>
                <div>
                    <p className='pt-5 mb-[-25px] text-[14px]'>{t1}</p>
                    <Progress percentPosition={{
                        align: 'center',
                        type: 'outer',
                    }} percent={p1} status="active" size={[300, 11]} strokeColor="#13AE85" />
                </div>

                <div>
                    <p className='pt-5 mb-[-25px] text-[14px]'>{t2}</p>
                    <Progress percentPosition={{
                        align: 'center',
                        type: 'outer',
                    }} percent={p2} status="active" size={[300, 11]} strokeColor="#13AE85" />
                </div>

                <div>
                    <p className='pt-5 mb-[-25px] text-[14px]'>{t3}</p>
                    <Progress percentPosition={{
                        align: 'center',
                        type: 'outer',
                    }} percent={p3} status="active" size={[300, 11]} strokeColor="#13AE85" />
                </div>

            </div>
    </div>
  )
}

export default CapacityComp
