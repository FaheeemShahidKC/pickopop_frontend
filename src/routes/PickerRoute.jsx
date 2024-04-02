import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegistrationPage from '../pages/picker/RegistrationPage'

function PickerRoute() {
     return (
          <Routes>
               <Route path='/register' element={<RegistrationPage></RegistrationPage>}></Route>
          </Routes>
     )
}

export default PickerRoute