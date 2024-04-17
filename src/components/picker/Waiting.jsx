import React from 'react'
import Header from '../user/header/Header'

function Waiting() {
     return (
          <div>
               <Header></Header>
               <div className='h-screen bg-pp-dark flex justify-center items-center'>
                    <div className='h-16 shadow-md w-80 text-center p-4'>
                         <div class="flex gap-2 ">
                              <p className='font-semibold text-pp-gray-3'>Waiting for admin's approvel</p>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                         </div>
                         <p className='text-pp-gray-2 text-xs m-1'>Will respond within 24Hours</p>
                    </div>

               </div>
          </div>
     )
}

export default Waiting
