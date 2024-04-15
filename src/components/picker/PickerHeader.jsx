import React from 'react'
import { useNavigate } from 'react-router-dom'

function PickerHeader() {
     const navigate = useNavigate()
     return (
          <div className='h-16 bg-pp-dark flex text-white justify-between px-10 font-serif'>
               <div className='flex justify-center items-center text-xl font-semibold'>
                    <p>Pick o pop</p>
               </div>
               <div className='flex justify-center items-center text-sm '>
                    <p  className='m-4 hover:text-gray cursor-pointer'>Orders</p>
                    <p className='m-4 hover:text-gray cursor-pointer'>Work</p>
                    <p className='m-4 hover:text-gray cursor-pointer'>Account</p>
                    <p onClick={()=>navigate('/picker/profile')} className='m-4 hover:text-gray cursor-pointer'>Profile</p>
               </div>
          </div>
     )
}

export default PickerHeader
