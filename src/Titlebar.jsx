import { ChevronLeft } from 'lucide-react'
import React from 'react'

const Titlebar=({title})=> {
  return (
    <div className='pt-5 pb-5 flex items-center gap-4'>
          <div className='bg-white p-1 rounded-lg shadow-sm'><ChevronLeft/></div>
            <h1> {title} </h1>
        </div>
  )
}

export default Titlebar


