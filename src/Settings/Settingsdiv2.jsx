import React from 'react'

const Settingsdiv2 = ( {img , title} ) => {
  return (
    <div>
      <div className='flex flex-col gap-2 mt-4 bg-white rounded-xl px-4 py-3 '>
      <img src={img} height={20} width={20} />
      <p className='text-[12px]'> {title} </p>
      </div>
    </div>
  )
}

export default Settingsdiv2
