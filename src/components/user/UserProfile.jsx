import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, getProfile } from '../../api/user'
import { toast } from 'sonner'
import { userLogout } from '../../store/slice/authSlice'
import UserHeader from './UserHeader'

function UserProfile() {

     const navigate = useNavigate()
     const { userToken } = useSelector((state) => state.auth)
     const [isLogIn, setIslogIn] = useState()
     const dispatch = useDispatch()
     useEffect(() => {
          setIslogIn(userToken)
     }, [])
     const [showEdit, setShowEdit] = useState(false);
     const [userdata, setUserdata] = useState({});
     useEffect(() => {
          let fetchData = async () => {
               let res = await getProfile();
               setUserdata(res?.data.userData);
          };
          fetchData();
     }, []);

     return (
          <div className='min-h-screen  bg-pp-dark'>
               <UserHeader></UserHeader>
               <div className=" flex m-40 justify-center items-center">
                    <div className="user-card bg-white rounded-2xl p-8 w-full max-w-lg relative overflow-hidden shadow-md">
                         <div className="user-card-img flex justify-center items-center z-10">
                         <img
                              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png"
                              alt=""
                              className="w-48 h-48 object-cover rounded-full"
                         />
                         </div>
                         <div className="user-card-info text-center">
                              <h2 className="text-2xl font-bold mb-4">{userdata.name}</h2>

                              <p className="mb-2">
                                   <span>Email:</span> {userdata.email}
                              </p>
                              <p className="mb-2">
                                   <span>Mobile:</span> {userdata.mobile}
                              </p>
                              <p>
                                   Explore your delivery in right place at right time.
                              </p>
                         </div>
                         <div className="absolute bg-pp-gray-3 bg-opacity-60 w-96 h-full top-0 left-0 transform rotate-12 -translate-x-64 -translate-y-48 z-0" />
                         
                    </div>
               </div>
          </div>
     )
}

export default UserProfile
