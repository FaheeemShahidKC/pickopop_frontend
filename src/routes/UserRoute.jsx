import React from 'react'
import HomePage from '../pages/user/HomePage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from '../pages/user/SignupPage'
import LoginPage from '../pages/user/LoginPage'
import Otp from '../components/user/otp/Otp'
import IsUserLoggedOut from '../components/authentication/IsUserLoggedOut'
import IsUserLoggedIn from '../components/authentication/IsUserLoggedIn'
import UserProfile from '../components/user/UserProfile'

function UserRoute() {
     return (
          <Routes>
               <Route path='/' element={<HomePage></HomePage>}></Route>
               <Route path='' element={<IsUserLoggedOut></IsUserLoggedOut>}>
                    <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/verifyOTP' element={<Otp></Otp>}></Route>
               </Route>
               <Route path='' element={<IsUserLoggedIn></IsUserLoggedIn>}>
                    <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
               </Route>
          </Routes>
     )
}

export default UserRoute