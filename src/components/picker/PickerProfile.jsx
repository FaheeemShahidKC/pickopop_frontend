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
     // const [rejected, setRejected] = useState({})
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
          <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
               style={{ backgroundImage: "url('../../assets/Mail Call_ The Ins and Outs of Shipping and Receiving Fish.jpeg')" }}>
               <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    {/* Main Col */}
                    <div id="profile"
                         className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-pp-dark text-white opacity-75 mx-6 lg:mx-0">
                         <div className="p-4 md:p-12 text-center lg:text-left">
                              {/* Image for mobile view */}
                              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                   style={{ backgroundImage: `url("${pickerDetails.image}")` }}></div>
                              <h1 className="text-3xl font-bold pt-8 lg:pt-0">{pickerDetails.name}</h1>
                              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                              <p className="pt-4 text-sm flex-col items-center justify-center lg:justify-start">
                                   <p className='py-1'>Email : <span>{pickerDetails.email}</span></p>
                                   <p className='py-1'>Mobile : <span>{pickerDetails.mobile}</span></p>
                                   <p className='py-1'>Email : <span>{pickerDetails.email}</span></p>
                                   <button onClick={handleLogout} className='my-2 bg-red text-white  cursor-pointer border-red border w-14 text-sm justify-center items-center flex rounded-sm'>
                                        LogOut
                                   </button>
                              </p>
                              {/* Rest of the content */}
                         </div>
                    </div>
                    {/* Img Col */}
                    <div className="w-full lg:w-2/5">
                         <img src={pickerDetails.image} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="Profile" />
                    </div>
                    {/* Pin to top right corner */}
                    <div className="absolute top-0 right-0 h-12 w-18 p-4">
                         <button className="js-change-theme focus:outline-none">🌙</button>
                    </div>
               </div>
          </div>
     )
}

export default PickerProfile
