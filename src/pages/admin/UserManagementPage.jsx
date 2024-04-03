import React from 'react'
import SideBar from '../../components/admin/sideBar/SideBar'
import UserManagement from '../../components/admin/userManagement/UserManagement'

function UserManagementPage() {
     return (
          <div className='flex'>
               <SideBar></SideBar>
               <UserManagement></UserManagement>
          </div>
     )
}

export default UserManagementPage
