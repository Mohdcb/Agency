import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Titlebar = ({ title }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className='pt-5 pb-5 flex items-center gap-4'>
      <div 
        className='bg-white p-1 rounded-lg shadow-sm cursor-pointer' 
        onClick={() => navigate(-1)} // Go to the previous page
      >
        <ChevronLeft />
      </div>
      <h1> {title} </h1>
    </div>
  )
}

export default Titlebar
