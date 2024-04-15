import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import { getPickers, blockPicker } from '../../api/admin'

function PickerManagement() {
     const [pickers, setPickers] = useState([])
     const [block, setBlock] = useState(false)
     useEffect(() => {
          const fetchPickers = async () => {
               try {
                    const response = await getPickers()
                    const { data } = response
                    console.log(data);
                    if (data) {
                         setPickers(data.pickers)
                    }
               } catch (error) {
                    console.log(error);
               }
          }

          fetchPickers()
     }, [block])

     const handleBlock = async (id) => {
          console.log("dsas");
          let res = await blockPicker(id);
          if (res.data.success) {
               setBlock(!block)
          }
     }
     return (
          <div className='bg-black w-5/6 h-screen flex-row justify-end'>
               <NavBar></NavBar>
               <div className="p-4 text-white max-sm:overflow-scroll ">
                    {
                         pickers.length > 0
                              ?
                              <table class="w-full text-center">
                                   <thead>
                                        <tr>
                                             <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">User Management</th>
                                        </tr>
                                   </thead >
                                   <tbody className='text-xs font-normal tracking-wider'>
                                        <tr class="p-2 m-4 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                             <td class="w-1/4 px-3">Name</td>
                                             <td class="w-1/4 px-3">Email</td>
                                             <td class="w-1/4 px-3">Mobile</td>
                                             <td class="w-1/4 px-3">Action</td>
                                        </tr>
                                        {
                                             pickers.map((picker, index) => {
                                                  return (
                                                       <tr key={index} class="p-2 m-2 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center">
                                                                 {
                                                                      picker.isBlock ?
                                                                           <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Unblock</button> :
                                                                           <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Block</button>
                                                                 }
                                                            </td>
                                                       </tr>
                                                  )
                                             })
                                        }
                                   </tbody>
                              </table>

                              :
                              <p className='text-center'>No pickers exists</p>
                    }
               </div>

          </div>
     )
}

export default PickerManagement
