import React from 'react'
import SideBar from '../../components/admin/sideBar/SideBar'
import PickerManagement from '../../components/admin/PickerManagement'

function PickerManagementPage() {
     return (
          <div className='flex'>
               <SideBar></SideBar>
               <PickerManagement></PickerManagement>
          </div>
     )
}

export default PickerManagementPage
