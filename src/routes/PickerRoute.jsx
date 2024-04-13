import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from '../pages/picker/RegistrationPage'
import Home from '../pages/picker/Home'
import Otp from '../pages/picker/Otp'
import LoginPage from '../pages/picker/LoginPage'

function PickerRoute() {
     return (
          <Routes>
               <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
               <Route path='/otp/:id' element={<Otp></Otp>}></Route>
               <Route path='/home' element={<Home></Home>}></Route>
               <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          </Routes>
     )
}

export default PickerRoute