import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import Dashboard from '../pages/admin/Dashboard'
import UserManagementPage from '../pages/admin/UserManagementPage'
import IsUserLoggedIn from '../components/authentication/IsUserLoggedIn'

function AdminRoute() {
     return (
          <Routes>
               <Route path='/login' element={<LoginPage></LoginPage>}></Route>
               <Route element={<IsUserLoggedIn></IsUserLoggedIn>}>
                    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                    <Route path='/users' element={<UserManagementPage></UserManagementPage>}></Route>
               </Route>
          </Routes>
     )
}

export default AdminRoute