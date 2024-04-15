import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../api/picker'
import { useNavigate } from 'react-router-dom'
import { pickerLogout } from '../../store/slice/authSlice'
import { toast } from 'sonner'

function PickerProfile() {
     const navigate = useNavigate()
     const [isLogin, setIslogIn] = useState()
     const { pickerToken } = useSelector((state) => state.auth)
     const dispatch = useDispatch()
     useEffect(() => {
          setIslogIn(pickerToken)
     }, [])
     const handleLogout = async (e) => {
          e.preventDefault()
          await logout()
          dispatch(pickerLogout())
          setIslogIn('')
          toast.success("You are logged out!")
          navigate('/picker/login')
     }
     return (
          <div>
               <section className="py-10 my-auto dark:bg-gray-900 font-serif bg-pp-gray-2">
                    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 ">
                         {/* profile */}
                         <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto  bg-white shadow-md p-4 rounded-sm h-fit self-center dark:bg-gray-800/40">
                              {/* <h1 className=''>Picker name</h1> */}
                              <div className='flex max-sm:flex-col'>
                                   <div className="">
                                        <div className=" rounded-2xl p-1 ">
                                             <div className="">
                                                  <div>
                                                       <img
                                                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cHJvZmlsZXxlbnwwfDB8fHwxNzA2NzQ5NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                                                            alt=""
                                                            className="rounded-sm h-28"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <button onClick={handleLogout} className='m-2 hover:bg-red hover:text-white  cursor-pointer border-red border w-14 text-sm justify-center items-center flex rounded-sm'>
                                             LogOut
                                        </button>
                                   </div>
                                   <div className=' mx-7 h-144'>
                                        <div>
                                             <h1 className=" font-bold p-2 text-2xl">Picker name</h1>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Email address</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>Picker@gmail.com</p>
                                             </div>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Mobile Number</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>7034879410</p>
                                             </div>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Cargos</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>Cargo</p>
                                             </div>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Account</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>Picker@gmail.com</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>
          </div>
     )
}

export default PickerProfile
