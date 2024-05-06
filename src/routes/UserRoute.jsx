import React from 'react'
import HomePage from '../pages/user/HomePage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from '../pages/user/SignupPage'
import LoginPage from '../pages/user/LoginPage'
import Otp from '../components/user/otp/Otp'
import IsUserLoggedOut from '../components/authentication/IsUserLoggedOut'
import IsUserLoggedIn from '../components/authentication/IsUserLoggedIn'
import UserProfile from '../components/user/UserProfile'
import Waiting from '../components/picker/Waiting'
import Orders from '../components/user/Orders'
import OrderForm from '../components/user/OrderForm'
import SuccessPayment from '../components/user/SuccessPayment'
import CancelPayment from '../components/user/CancelPayment'
import A from '../components/user/a/A'

function UserRoute() {
     return (
          <Routes>
               <Route path='/' element={<HomePage></HomePage>}></Route>
               <Route path='' element={<IsUserLoggedOut></IsUserLoggedOut>}>
                    <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/verifyOTP/:id' element={<Otp></Otp>}></Route>
               </Route>
               <Route path='' element={<IsUserLoggedIn></IsUserLoggedIn>}>
                    <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
                    <Route path='/orders' element={<Orders></Orders>}></Route>
                    <Route path='/neworder' element={<OrderForm></OrderForm>}></Route>
                    <Route path='/success' element={<SuccessPayment></SuccessPayment>}></Route>
                    <Route path='/cancel' element={<CancelPayment></CancelPayment>}></Route>
               </Route>
               <Route path='/demo' element={<A></A>}></Route>
          </Routes>
     )
}

export default UserRoute