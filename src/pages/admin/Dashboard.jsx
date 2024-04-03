import React from 'react'
import SideBar from '../../components/admin/sideBar/SideBar'
import DashBoard from '../../components/admin/dashboard/DashBoard'

function Dashboard() {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <DashBoard></DashBoard>
    </div>
  )
}

export default Dashboard
