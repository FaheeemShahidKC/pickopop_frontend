import React, { useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar'
import { getUsers,blockUser } from '../../../api/admin'

function UserManagement() {

  const [users, setUsers] = useState([])
  const [block, setBlock] = useState(false)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers()
        const { data } = response
        console.log(data);
        if (data) {
          setUsers(data.users)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers()
  }, [block])

  const handleBlock = async (id) => {
    console.log("dsas");
    let res = await blockUser(id);
    if (res.data.success) {
      setBlock(!block)
    }
  }
  return (
    <div className='bg-black w-5/6 h-screen flex-row justify-end'>
      <NavBar></NavBar>
      <div className="p-4 text-white max-sm:overflow-scroll ">
        {
          users.length > 0
            ?
            <table class="w-full text-center">
              <thead>
                <tr>
                  <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">User Management</th>
                </tr>
              </thead >
              <tbody className='text-xs font-normal tracking-wider'>
                <tr class="p-2 m-4 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                  <td class="w-1/4 px-3">Name</td>
                  <td class="w-1/4 px-3">Email</td>
                  <td class="w-1/4 px-3">Mobile</td>
                  <td class="w-1/4 px-3">Action</td>
                </tr>
                {
                  users.map((user, index) => {
                    return (
                      <tr key={index} class="p-2 m-2 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
                        <td class="w-1/4 px-3 text-center items-center flex justify-center">{user.name}</td>
                        <td class="w-1/4 px-3 text-center items-center flex justify-center">{user.email}</td>
                        <td class="w-1/4 px-3 text-center items-center flex justify-center ">{user.mobile}</td>
                        <td class="w-1/4 px-3 text-center items-center flex justify-center">
                          {
                            user.isBlock ?
                              <button onClick={()=>{handleBlock(user._id)}} class="bg-black hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Unblock</button> :
                              <button onClick={()=>{handleBlock(user._id)}} class="bg-black hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Block</button>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>

            :
            <p className='text-center'>No users exists</p>
        }
      </div>

    </div>
  )
}

export default UserManagement
