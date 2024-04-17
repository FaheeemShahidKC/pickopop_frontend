import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProfile, logout } from '../../api/picker'
import { useNavigate, useParams } from 'react-router-dom'
import { pickerLogout } from '../../store/slice/authSlice'
import { toast } from 'sonner'
import { getPickerData } from '../../api/admin'

function PickerProfile() {
     const navigate = useNavigate()
     const [pickerDetails, setPickerDetails] = useState({})
     const [rejected,setRejected] = useState({})
     const [isLogin, setIslogIn] = useState()
     const { pickerToken } = useSelector((state) => state.auth)
     const dispatch = useDispatch()
     useEffect(() => {
          setIslogIn(pickerToken)
          const fetchData = async () => {
               const response = await getProfile()
               console.log(response);
               if (response.data.success) {
                    console.log(response, 'pickerrrrrrrrrrrrrrrrr=======================================');
                    setPickerDetails(response.data.pickerData)
               }
          }
          fetchData()
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
               <section className="py-10 my-auto dark:bg-gray-900 font-serif bg-pp-gray-2 h-screen">
                    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 ">
                         {/* profile */}
                         <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto  bg-white shadow-md p-4 rounded-sm h-72 self-center dark:bg-gray-800/40">
                              {/* <h1 className=''>Picker name</h1> */}
                              <div className='flex max-sm:flex-col'>
                                   <div className="">
                                        <div className=" rounded-2xl p-1 ">
                                             <div className="">
                                                  <div>
                                                       <img
                                                            src={`http://10.4.2.61:5000/${pickerDetails.image}`}
                                                            alt=""
                                                            className="rounded-xl h-16"
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
                                             <h1 className=" font-bold p-2 text-2xl">{pickerDetails.name}</h1>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Email address</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>{pickerDetails.email}</p>
                                             </div>
                                        </div>
                                        <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Mobile Number</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>{pickerDetails.mobile}</p>
                                             </div>
                                        </div>
                                        {/* <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Cargos</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'>{pickerDetails.cargos[0]}</p>
                                             </div>
                                        </div> */}
                                        {/* <div className='m-4'>
                                             <p className='text-sm font-semibold py-1'>Account</p>
                                             <div className='bg-white items-center flex h-8 w-80 border rounded-md border-1 border-pp-gray-2'>
                                                  <p className='text-sm px-1'></p>
                                             </div>
                                        </div> */}
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>
          </div>
     )
}

export default PickerProfile
