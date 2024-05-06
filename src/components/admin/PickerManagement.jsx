import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import { getPickers, blockPicker, verifyPicker, reject } from '../../api/admin'
import { useNavigate } from 'react-router-dom'
import AdminConfirmationModal from './AdminConfirmationModal'

function PickerManagement() {
     const navigate = useNavigate()
     const [pickers, setPickers] = useState([])
     const [unVerifiedPickers, setUnverifiedPickers] = useState([])
     const [block, setBlock] = useState(false)
     const [verify, setVerify] = useState(false)
     const [onConfirmation, setOnConfirmation] = useState(false)
     const [pickerIdToBlock, setPickerIdToBlock] = useState(null);
     const [pickerIdToVerify, setPickerIdToVerify] = useState(null);

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
          setPickerIdToBlock(id);
          setOnConfirmation(true);
     };

     const handleVerify = async (id) => {
          setPickerIdToVerify(id);
          setOnConfirmation(true);
     };

     const handleConfirmation = async (confirm) => {
          if (confirm && pickerIdToBlock) {
               await blockPicker(pickerIdToBlock);
               setBlock(!block);
          } else if (confirm && pickerIdToVerify) {
               await verifyPicker(pickerIdToVerify);
               setVerify(!verify)
          }
          setOnConfirmation(false)
          setPickerIdToBlock(null)
          setPickerIdToVerify(null)
     };

     return (
          <div className='bg-black w-5/6 h-screen flex-row justify-end'>
               <NavBar></NavBar>
               {onConfirmation && (
                    <AdminConfirmationModal
                         onCancel={() => handleConfirmation(false)}
                         onConfirm={() => handleConfirmation(true)}
                         message={'Are you sure?'}
                    />
               )}
               <div className="p-4 text-white max-sm:overflow-scroll ">
                    {
                         unVerifiedPickers.length > 0 &&
                         <table className="w-full text-center">
                              <thead>
                                   <tr>
                                        <th className="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">Unverified Pickers</th>
                                   </tr>
                              </thead >
                              <tbody className='text-xs font-normal tracking-wider'>
                                   <tr className="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                        <td className="w-1/4 px-3">Name</td>
                                        <td className="w-1/4 px-3">Email</td>
                                        <td className="w-1/4 px-3">Mobile</td>
                                        <td className="w-1/4 px-3">Action</td>
                                   </tr>
                                   {
                                        unVerifiedPickers.map((picker, index) => {
                                             return (
                                                  <tr key={index} className="hover:bg-added-grey-900 cursor-pointer p-2 h-14 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                                       <td onClick={() => navigate(`/admin/pickerDetails/${picker._id}`)} className="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
                                                       <td onClick={() => navigate(`/admin/pickerDetails/${picker._id}`)} className="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
                                                       <td onClick={() => navigate(`/admin/pickerDetails/${picker._id}`)} className="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
                                                       <td className="w-1/4 px-3 text-center items-center flex justify-center">
                                                            <button onClick={() => { handleVerify(picker._id) }} className="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Verify</button>
                                                       </td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                    }
                    {
                         pickers.length > 0 &&
                         <table className={unVerifiedPickers.length > 0 ? `w-full text-center mt-16` : `w-full text-center `} >
                              <thead>
                                   <th className="text-2xl p-8 font-semibold max-sm:hidden max-md:hidden text-left">Picker Management</th>
                              </thead >
                              <tbody className='text-xs font-normal tracking-wider'>
                                   <tr className="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                        <td className="w-1/4 px-3">Name</td>
                                        <td className="w-1/4 px-3">Email</td>
                                        <td className="w-1/4 px-3">Mobile</td>
                                        <td className="w-1/4 px-3">Action</td>
                                   </tr>
                                   {
                                        pickers.map((picker, index) => {
                                             return (
                                                  <tr key={index} className="p-2 h-14 cursor-pointer hover:bg-added-grey-900 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                                                       <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} className="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
                                                       <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} className="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
                                                       <td onClick={() => { navigate(`/admin/pickerDetails/${picker._id}`) }} className="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
                                                       <td className="w-1/4 px-3 text-center items-center flex justify-center">
                                                            {
                                                                 picker.isBlock
                                                                      ?
                                                                      <button onClick={() => { handleBlock(picker._id) }} className="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Unblock</button>
                                                                      :
                                                                      <button onClick={() => { handleBlock(picker._id) }} className="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Block</button>
                                                            }
                                                       </td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </tbody>
                         </table>
                    }
               </div>

          </div>
     )

}

export default PickerManagement