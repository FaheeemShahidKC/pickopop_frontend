import React from 'react'
import SideBar from '../../components/admin/sideBar/SideBar'
import IncomeManagement from '../../components/admin/IncomeManagement'

function IncomeManagementPage() {
     return (
          <div className='flex'>
               <SideBar></SideBar>
               <IncomeManagement></IncomeManagement>
          </div>
     )
}

export default IncomeManagementPage
