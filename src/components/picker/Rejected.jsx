import React, { useEffect, useState } from 'react'
import { getRejection } from '../../api/picker'

function Rejected({reason}) {
     // const [reason, setReason] = useState('')
     // useEffect(() => {
     //      const fetchData = async () => {
     //           const reasonData = await getRejection()
     //           if (reasonData.data.success) {
     //                setReason(reasonData.data.rejectionData.reason)
     //           }else{
     //                setReason('nottttttttt')
     //           }
     //      }
     //      fetchData()
     // }, [])
     return (
          <div>
               <Header></Header>
               <div className='h-screen bg-pp-dark flex justify-center items-center'>
                    <div className='h-16 shadow-md w-80 text-center p-4'>
                         <div class="flex gap-2 ">
                              <p className='font-semibold text-pp-gray-3'>{reason}</p>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                              <div class="w-1 h-1 rounded-full animate-pulse mt-3 bg-pp-gray-2"></div>
                         </div>
                         <p className='text-pp-gray-2 text-xs m-1'>Signup ones again with proper data</p>
                    </div>

               </div>
          </div>
     )
}

export default Rejected
