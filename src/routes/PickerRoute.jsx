import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from '../pages/picker/RegistrationPage'
import Home from '../pages/picker/Home'
import Otp from '../pages/picker/Otp'

function PickerRoute() {
     return (
          <Routes>
               <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
               <Route path='/otp/:id' element={<Otp></Otp>}></Route>
               <Route path='/home' element={<Home></Home>}></Route>
          </Routes>
     )
}

export default PickerRoute