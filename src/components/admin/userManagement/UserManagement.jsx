import React from 'react'
import NavBar from '../navbar/NavBar'

function UserManagement() {
  return (
    <div className='bg-black w-5/6 h-screen flex-row justify-end'>
      <NavBar></NavBar>
      <div class="p-4 text-white">
        <table class="w-full text-center">
          <thead>
            <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden font text-left">User managemant</th>
          </thead>
          <tbody className=''>
            <tr class="p-2 m-6 py-3 mb border-x-0 border-gray  border-t-0 border flex justify-between">
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold" >Dashboard</td>
            </tr>
            <tr class="p-2 m-6 py-3 mb border-x-0 border-gray  border-t-0 border flex justify-between">
              <td class="block hover:text-indigo-400" >Dashboard</td>
              <td class="block hover:text-indigo-400" >Dashboard</td>
              <td class="block hover:text-indigo-400" >Dashboard</td>
              <td class="block hover:text-indigo-400" >Dashboard</td>
              <td class="block hover:text-indigo-400" >Dashboard</td>
              <td class="block hover:text-indigo-400" >Dashboard</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UserManagement
