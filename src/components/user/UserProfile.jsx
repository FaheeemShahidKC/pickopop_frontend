import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../api/user'
import { toast } from 'sonner'
import { userLogout } from '../../store/slice/authSlice'

function UserProfile() {
     const navigate = useNavigate()
     const { userToken } = useSelector((state) => state.auth)
     const [isLogIn, setIslogIn] = useState()
     const dispatch = useDispatch()
     useEffect(() => {
          setIslogIn(userToken)
     }, [])

     const handleLogout = async (e) => {
          e.preventDefault()
          const res = await logout()
          dispatch(userLogout())
          setIslogIn('')
          navigate('/login')
          toast.success("You are logged out!")
     }
     return (
          <div className="min-h-screen bg-pp-dark flex justify-center items-center">
               <div className="user-card bg-white rounded-2xl p-8 w-full max-w-lg relative overflow-hidden shadow-md">
                    {/* <div className="user-card-img flex justify-center items-center z-10"> */}
                    {/* <img
                              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
                              alt=""
                              className="w-48 h-48 object-cover rounded-full"
                         /> */}
                    {/* </div> */}
                    <div className="user-card-info text-center">
                         <h2 className="text-2xl font-bold mb-4">Mohamed Yousef</h2>

                         <p className="mb-2">
                              <span>Email:</span> example@example.com
                         </p>
                         <p className="mb-2">
                              <span>Location:</span> Palestine, Gaza Strip
                         </p>
                         <p className="mb-2">
                              <span>Occupation:</span> Web Developer
                         </p>
                         <p>
                              <span>About me:</span> Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua.
                         </p>
                    </div>
                    <div className="absolute bg-pp-gray-3 bg-opacity-60 w-96 h-full top-0 left-0 transform rotate-12 -translate-x-64 -translate-y-48 z-0" />
                         <button onClick={handleLogout} className='m-2 hover:bg-red hover:text-white  cursor-pointer border-red border w-14 text-sm justify-center items-center flex rounded-sm'>
                              LogOut
                         </button>
               </div>
          </div>
     )
}

export default UserProfile
