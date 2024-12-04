import React from 'react'

const Settingsdiv = ( {img , title} ) => {
  return (
    <div>
      <div className='flex gap-4 mt-4 bg-white rounded-xl px-5 py-3 items-center'>
      <img src={img} height={20} width={20} />
      <p className='text-[12px]'> {title} </p>
      </div>
    </div>
  )
}

export default Settingsdiv
