import React from 'react'
import NavBar from '../navbar/NavBar'

function UserManagement() {
  return (
    <div className='bg-black w-5/6 h-screen flex-row justify-end'>
      <NavBar></NavBar>
      <div class="p-4 text-white max-sm:overflow-scroll">
        <table class="w-full text-center">
          <thead>
            <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">User managemant</th>
          </thead>
          <tbody className=''>
            <tr class="p-2 m-6 py-3 mb border-x-0 border-gray  border-t-0 max-md:text-xs border flex justify-between">
              <td class="block hover:text-indigo-400 font-semibold px-3" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold px-3" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold px-3" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold px-3" >Dashboard</td>
              <td class="block hover:text-indigo-400 font-semibold px-3" >
                <button class="bg-black  hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
                  Block
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default UserManagement
