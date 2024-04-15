import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from '../pages/picker/RegistrationPage'
import Home from '../pages/picker/Home'
import Otp from '../pages/picker/Otp'
import LoginPage from '../pages/picker/LoginPage'
import Profile from '../pages/picker/Profile'
import IsPickerLoggedIn from '../components/authentication/IsPickerLoggedIn'
import IsPickerLoggedOut from '../components/authentication/IsPickerLoggedOut'

function PickerRoute() {
     return (
          <Routes>
               <Route path='' element={<IsPickerLoggedOut></IsPickerLoggedOut>}>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
                    <Route path='/otp/:id' element={<Otp></Otp>}></Route>
               </Route>
               <Route path='' element={<IsPickerLoggedIn></IsPickerLoggedIn>}>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/profile' element={<Profile></Profile>}></Route>
               </Route>
          </Routes>
     )
}

export default PickerRoute