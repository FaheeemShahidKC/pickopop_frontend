import React from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogout } from '../../store/slice/authSlice'
import { useDispatch } from 'react-redux'
import { logout } from '../../api/user'

function UserHeader() {
     const navigate = useNavigate()
     const dispatch = useDispatch()
     const handleLogout = async (e) => {
          e.preventDefault()
          const res = await logout()
          dispatch(userLogout())
          navigate('/login')
          toast.success("You are logged out!")
     }
     return (
          <div className=''>
               <div className='z-10 '>
                    <div className='h-20 bg-pp-dark w-full flex items-center justify-between px-10 max-sm:px-3'>
                         <h1 className='text-white font-extrabold font-mono max-sm:text-2xl text-4xl'>PICK'O'POP</h1>
                         <div className='flex'>
                              <button onClick={() => { navigate('/profile') }} className=' h-7 p-3 max-sm:mx-1 mx-2 rounded-md  flex items-center font-semibold max-sm:text-xs'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                   </svg>
                                   <span className='max-sm:hidden block text-white'>Profile</span>
                              </button>
                              <button onClick={() => { navigate('/orders') }} className=' h-7 p-3 max-sm:mx-1 mx-2 rounded-md  flex items-center font-semibold max-sm:text-xs'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                   </svg>
                                   <span className='max-sm:hidden block text-white'> Orders</span>
                              </button>

                              <button onClick={handleLogout} className=' h-7 p-3 max-sm:mx-1 mx-2 rounded-md hover:bg-red hover:bg-opacity-20 flex items-center font-semibold max-sm:text-xs'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                   </svg>
                                   <span className='max-sm:hidden block text-red'>Logout</span>
                              </button>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default UserHeader
