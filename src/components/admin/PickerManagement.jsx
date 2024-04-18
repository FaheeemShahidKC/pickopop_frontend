import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import { getPickers, blockPicker, verifyPicker, reject } from '../../api/admin'
import { useNavigate } from 'react-router-dom'

function PickerManagement() {
     const navigate = useNavigate()
     const [pickers, setPickers] = useState([])
     const [unVerifiedPickers, setUnverifiedPickers] = useState([])
     const [block, setBlock] = useState(false)
     const [verify, setVerify] = useState(false)
     useEffect(() => {
          const fetchPickers = async () => {
               try {
                    const response = await getPickers()
                    const { data } = response
                    console.log(data);
                    if (data) {
                         let verified = []
                         verified = data.pickers.filter((picker) => {
                              return picker.isVerifiedByAdmin == 'verified' && picker.isVerified
                         })
                         console.log(verified);
                         setPickers(verified)
                         let unVerified = []
                         unVerified = data.pickers.filter((picker) => {
                              return picker.isVerifiedByAdmin == 'pending' && picker.isVerified
                         })
                         setUnverifiedPickers(unVerified)
                         console.log(unVerified, 'sssssssssssssss');
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchPickers()
     }, [block, verify])

     const handleBlock = async (id) => {
          console.log("dsas");
          let res = await blockPicker(id);
          if (res.data.success) {
               setBlock(!block)
          }
     }

     const handleVerify = async (id) => {
          console.log("dsas");
          let res = await verifyPicker(id);
          if (res.data.success) {
               setVerify(!verify)
          }
     }

     

     return (
          <div className='bg-black w-5/6 h-screen flex-row justify-end'>
               <NavBar></NavBar>
               <div className="p-4 text-white max-sm:overflow-scroll ">
                    {
                         unVerifiedPickers.length > 0
                              ?
                              <table class="w-full text-center mt-16">
                                   <thead>
                                        <tr>
                                             <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">Unverified Pickers</th>
                                        </tr>
                                   </thead >
                                   <tbody className='text-xs font-normal tracking-wider'>
                                        <tr class="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                             <td class="w-1/4 px-3">Name</td>
                                             <td class="w-1/4 px-3">Email</td>
                                             <td class="w-1/4 px-3">Mobile</td>
                                             <td class="w-1/4 px-3">Action</td>
                                        </tr>
                                        {
                                             unVerifiedPickers.map((picker, index) => {
                                                  return (
                                                       <tr key={index} class="hover:bg-added-grey-900 cursor-pointer p-2 h-14 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                                            <td onClick={() =>  navigate(`/admin/pickerDetails/${picker._id}`) } class="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
                                                            <td onClick={() => navigate(`/admin/pickerDetails/${picker._id}`) } class="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
                                                            <td onClick={() => navigate(`/admin/pickerDetails/${picker._id}`) } class="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center">
                                                                 <button onClick={() => { handleVerify(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Verify</button>
                                                            </td>
                                                       </tr>
                                                  )
                                             })
                                        }
                                   </tbody>
                              </table>

                              :
                              <p className='text-center'></p>
                    }
                    {
                         pickers.length > 0
                              ?
                              <table class="w-full text-center mt-16">
                                   <thead>
                                        <tr>
                                             <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">Picker Management</th>
                                        </tr>
                                   </thead >
                                   <tbody className='text-xs font-normal tracking-wider'>
                                        <tr class="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                             <td class="w-1/4 px-3">Name</td>
                                             <td class="w-1/4 px-3">Email</td>
                                             <td class="w-1/4 px-3">Mobile</td>
                                             <td class="w-1/4 px-3">Action</td>
                                        </tr>
                                        {
                                             pickers.map((picker, index) => {
                                                  return (
                                                       <tr key={index} class="p-2 h-14 cursor-pointer hover:bg-added-grey-900 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                                            <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
                                                            <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
                                                            <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} class="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
                                                            <td class="w-1/4 px-3 text-center items-center flex justify-center">
                                                                 {
                                                                      picker.isBlock
                                                                           ?
                                                                           <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Unblock</button>
                                                                           :
                                                                           <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Block</button>
                                                                 }
                                                            </td>
                                                       </tr>
                                                  )
                                             })
                                        }
                                   </tbody>
                              </table>

                              :
                              <p className='text-center'></p>
                    }
               </div>

          </div>
     )

}

export default PickerManagement