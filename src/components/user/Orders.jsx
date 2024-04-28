import React, { useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import { Navigate, useNavigate } from 'react-router-dom'
import { getOrders } from '../../api/user'
import ConfirmationModal from '../ConfirmationModal'

function Orders() {
     const navigate = useNavigate()
     const [orders, setOrders] = useState([])

     useEffect(() => {
          const fetchData = async() => {
               const response = await getOrders()
               if (response.success) {
                    setOrders(response.data.orders)
               }
          }
          fetchData()
     }, [])
     return (
          <div className='bg-[#143A42] h-screen p-5'>
               {/* <ConfirmationModal></ConfirmationModal> */}
               <UserHeader></UserHeader>
               <table className="min-w-full divide-y divide-gray-200 mt-10 overflow-x-scroll text-added-grey-300 ">
                    <thead className="">
                         <tr className='bg-[#143A42]'>
                              <th
                                   scope="col"
                                   className="py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   <button onClick={() => navigate('/neworder')} className=' h-7 p-3 max-sm:mx-1 mx-6 rounded-md bg-white bg-opacity-60 hover:bg-opacity-100 flex items-center font-semibold max-sm:text-xs'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                        <span className='max-sm:hidden block text-black'>New order</span>
                                   </button>
                              </th>
                         </tr>
                         <tr className='bg-[#143A42]'>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Name
                              </th>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Title
                              </th>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Status
                              </th>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Role
                              </th>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Email
                              </th>
                              <th
                                   scope="col"
                                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                   Actions
                              </th>
                         </tr>
                    </thead>
                    <tbody className="bg- divide-y divide-gray-200">
                         <tr className='bg-[#143A42]' >
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                             <img
                                                  className="h-10 w-10 rounded-full"
                                                  src="https://i.pravatar.cc/150?img=1"
                                                  alt=""
                                             />
                                        </div>
                                        <div className="ml-4">
                                             <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                             <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                                        </div>
                                   </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <div className="text-sm text-gray-900">
                                        Regional Paradigm Technician
                                   </div>
                                   <div className="text-sm text-gray-500">Optimization</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                   </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   Admin
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   jane.cooper@example.com
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                   <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                   </a>
                                   <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                                        Delete
                                   </a>
                              </td>
                         </tr>
                         <tr className='bg-[#143A42] border-pp-gray-2' >
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                             <img
                                                  className="h-10 w-10 rounded-full"
                                                  src="https://i.pravatar.cc/150?img=1"
                                                  alt=""
                                             />
                                        </div>
                                        <div className="ml-4">
                                             <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                             <div className="text-sm text-gray-500">jane.cooper@example.com</div>
                                        </div>
                                   </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <div className="text-sm text-gray-900">
                                        Regional Paradigm Technician
                                   </div>
                                   <div className="text-sm text-gray-500">Optimization</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                   </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   Admin
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   jane.cooper@example.com
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                   <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit
                                   </a>
                                   <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                                        Delete
                                   </a>
                              </td>
                         </tr>
                    </tbody>
               </table>

          </div>
     )
}

export default Orders
