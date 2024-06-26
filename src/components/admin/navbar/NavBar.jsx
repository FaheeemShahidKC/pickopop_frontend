import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogout } from '../../../store/slice/authSlice'
import { logout } from '../../../api/admin'
import { toast } from 'sonner'
import AdminConfirmationModal from '../AdminConfirmationModal'

function NavBar() {
     const [showConfirmation, setShowConfirmation] = useState(false)
     const { adminToken } = useSelector((state) => state.auth)
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const handleLogout = async () => {
          await logout()
          dispatch(adminLogout())
          toast.success('You logged out successfully')
          navigate('/admin/login')
     }
     return (
          <div className=' w-full h-14 flex px-5 justify-between items-center '>
               {
                    showConfirmation &&
                    <AdminConfirmationModal onConfirm={handleLogout} message={'Are you sure?'} onCancel={() => setShowConfirmation(false)}></AdminConfirmationModal>
               }
               <div className="relative text-xs m-4">
                    <input
                         className="appearance-none text-white border-2 pl-10 border-gray bg-black hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                         id="username"
                         type="text"
                         placeholder="Search..."
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center text-">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2}
                                   d="M6 18L18 6M6 6l12 12"
                              />
                         </svg>
                    </div>
                    <div className="absolute left-0 inset-y-0 flex items-center text-white">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2}
                                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                         </svg>
                    </div>
               </div>
               {
                    adminToken &&
                    <button onClick={() => { setShowConfirmation(true) }} className="bg-pp-dark text-white h-8 py-1 text-sm px-2 rounded">
                         Logout
                    </button>
               }
          </div>
     )
}

export default NavBar
