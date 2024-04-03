import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import Dashboard from '../pages/admin/Dashboard'
import UserManagementPage from '../pages/admin/UserManagementPage'

function AdminRoute() {
     return (
          <Routes>
               <Route path='/login' element={<LoginPage></LoginPage>}></Route>
               <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
               <Route path='/userManagement' element={<UserManagementPage></UserManagementPage>}></Route>
          </Routes>
     )
}

export default AdminRoute