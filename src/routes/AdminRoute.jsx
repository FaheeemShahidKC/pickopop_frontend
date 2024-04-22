import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/admin/LoginPage'
import Dashboard from '../pages/admin/Dashboard'
import UserManagementPage from '../pages/admin/UserManagementPage'
import IsAdminLoggedIn from '../components/authentication/IsAdminLoggedIn'
import IsAdminLoggedOut from '../components/authentication/IsAdminLoggedOut'
import PickerManagementPage from '../pages/admin/PickerManagementPage'
import PickerDetails from '../pages/admin/PickerDetails'
import IncomeManagementPage from '../pages/admin/IncomeManagementPage'


function AdminRoute() {
     return (
          <Routes>
               <Route path='' element={<IsAdminLoggedOut></IsAdminLoggedOut>}>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
               </Route>
               <Route element={<IsAdminLoggedIn></IsAdminLoggedIn>}>
                    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                    <Route path='/users' element={<UserManagementPage></UserManagementPage>}></Route>
                    <Route path='/pickers' element={<PickerManagementPage></PickerManagementPage>}></Route>
                    <Route path='/pickerDetails/:id' element={<PickerDetails></PickerDetails>}></Route>
                    <Route path='/income' element={<IncomeManagementPage></IncomeManagementPage>}></Route>
               </Route>
          </Routes>
     )
}

export default AdminRoute