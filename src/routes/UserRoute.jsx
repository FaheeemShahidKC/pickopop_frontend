import React from 'react'
import HomePage from '../pages/user/HomePage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from '../pages/user/SignupPage'
import LoginPage from '../pages/user/LoginPage'

function UserRoute() {
     return (
          <Routes>
               <Route path='/' element={<HomePage></HomePage>}></Route>
               <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
               <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          </Routes>
     )
}

export default UserRoute