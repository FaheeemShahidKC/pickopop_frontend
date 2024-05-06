import React, { useRef } from 'react'

function A() {
     return (
          <div
               id="popup-modal"
               tabIndex={-1}
               className=" bg-gray-950 bg-opacity-60 my-auto fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 max-h-full">
               <img src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80" alt="" />
          </div>
     )
}

export default A


// <p className='m-2'><span className='z'>Name</span> : <span className='text-xs'>Faheeem shshid</span></p>
// <p className='m-2'><span className='z'>Name</span> : <span className='text-xs'>Faheeem shshid</span></p>
// <p className='m-2'><span className='z'>Name</span> : <span className='text-xs'>Faheeem shshid</span></p>
// <p className='m-2'><span className='z'>Name</span> : <span className='text-xs'>Faheeem shshid</span></p>
// <img {} className='h-144' src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />





// const navigate = useNavigate()
// const [pickers, setPickers] = useState([])
// const [unVerifiedPickers, setUnverifiedPickers] = useState([])
// const [block, setBlock] = useState(false)
// const [verify, setVerify] = useState(false)
// useEffect(() => {
//      const fetchPickers = async () => {
//           try {
//                const response = await getPickers()
//                const { data } = response
//                console.log(data);
//                if (data) {
//                     let verified = []
//                     verified = data.pickers.filter((picker) => {
//                          return picker.isVerifiedByAdmin && picker.isVerified
//                     })
//                     console.log(verified);
//                     setPickers(verified)
//                     let unVerified = []
//                     unVerified = data.pickers.filter((picker) => {
//                          return picker.isVerifiedByAdmin == false && picker.isVerified
//                     })
//                     setUnverifiedPickers(unVerified)
//                     console.log(unVerified, 'sssssssssssssss');
//                }
//           } catch (error) {
//                console.log(error);
//           }
//      }
//      fetchPickers()
// }, [block, verify])

// const handleBlock = async (id) => {
//      console.log("dsas");
//      let res = await blockPicker(id);
//      if (res.data.success) {
//           setBlock(!block)
//      }
// }

// const handleVerify = async (id) => {
//      console.log("dsas");
//      let res = await verifyPicker(id);
//      if (res.data.success) {
//           setVerify(!verify)
//      }
// }

// return (
//      <div className='bg-black w-5/6 h-screen flex-row justify-end'>
//           <NavBar></NavBar>
//           <div className="p-4 text-white max-sm:overflow-scroll ">
//                {
//                     unVerifiedPickers.length > 0
//                          ?
//                          <table class="w-full text-center mt-16">
//                               <thead>
//                                    <tr>
//                                         <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">Unverified Pickers</th>
//                                    </tr>
//                               </thead >
//                               <tbody className='text-xs font-normal tracking-wider'>
//                                    <tr class="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
//                                         <td class="w-1/4 px-3">Name</td>
//                                         <td class="w-1/4 px-3">Email</td>
//                                         <td class="w-1/4 px-3">Mobile</td>
//                                         <td class="w-1/4 px-3">Action</td>
//                                    </tr>
//                                    {
//                                         unVerifiedPickers.map((picker, index) => {
//                                              return (
//                                                   <tr key={index} class="hover:bg-added-grey-900 cursor-pointer p-2 h-14 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
//                                                        <td class="w-1/4 px-3 text-center items-center flex justify-center">
//                                                             <button onClick={() => { handleVerify(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Verify</button>
//                                                        </td>
//                                                   </tr>
//                                              )
//                                         })
//                                    }
//                               </tbody>
//                          </table>

//                          :
//                          <p className='text-center'></p>
//                }
//                {
//                     pickers.length > 0
//                          ?
//                          <table class="w-full text-center mt-16">
//                               <thead>
//                                    <tr>
//                                         <th class="text-2xl m-5 font-semibold max-sm:hidden max-md:hidden text-left">Picker Management</th>
//                                    </tr>
//                               </thead >
//                               <tbody className='text-xs font-normal tracking-wider'>
//                                    <tr class="p-2 py-1 text-sm border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
//                                         <td class="w-1/4 px-3">Name</td>
//                                         <td class="w-1/4 px-3">Email</td>
//                                         <td class="w-1/4 px-3">Mobile</td>
//                                         <td class="w-1/4 px-3">Action</td>
//                                    </tr>
//                                    {
//                                         pickers.map((picker, index) => {
//                                              return (
//                                                   <tr  key={index} class="p-2 h-14 cursor-pointer hover:bg-added-grey-900 py-1 border-x-0 border-gray border-t-0 max-md:text-xs border flex justify-between">
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.name}</td>
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center">{picker.email}</td>
//                                                        <td onClick={()=>{navigate(`/admin/pickerDetails${picker._id}`)}} class="w-1/4 px-3 text-center items-center flex justify-center ">{picker.mobile}</td>
//                                                        <td class="w-1/4 px-3 text-center items-center flex justify-center">
//                                                             {
//                                                                  picker.isBlock
//                                                                       ?
//                                                                       <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Unblock</button>
//                                                                       :
//                                                                       <button onClick={() => { handleBlock(picker._id) }} class="bg-black hover:bg-pp-dark text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">Block</button>
//                                                             }
//                                                        </td>
//                                                   </tr>
//                                              )
//                                         })
//                                    }
//                               </tbody>
//                          </table>

//                          :
//                          <p className='text-center'></p>
//                }
//           </div>

//      </div>
// )






// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { Navigate, Outlet } from "react-router-dom";
// import { getProfile, getRejection } from "../../api/picker";
// import Waiting from "../picker/Waiting";

// const IsPickerLoggedIn = () => {

//      const [isVerifiedByAdmin, setIsVerifiedByAdmin] = useState('')
//      const [loading, setLoading] = useState(true)

//      useEffect(() => {

//           const fetchData = async () => {
//                try {

//                     const response = await getProfile()
//                     const rejectionResponse = await getRejection()
//                     console.log(rejectionResponse.data, "eeeeeeeeeeeeeeeeeeeee");
//                     if (response.data.success) {
//                          console.log(response.data.pickerData.isVerifiedByAdmin, "idha");
//                          if (response.data.pickerData.isVerifiedByAdmin) {
//                               setIsVerifiedByAdmin('verified')
//                          } else if (rejectionResponse.data.success) {
//                               setIsVerifiedByAdmin('rejected')
//                          } else {
//                               setIsVerifiedByAdmin('pending')
//                          }
//                          console.log(isVerifiedByAdmin);
//                     }
//                } catch (error) {
//                     console.log(error);
//                } finally {
//                     setLoading(false)
//                }
//           }
//           fetchData()
//      }, [])

//      const { pickerToken } = useSelector((state) => state.auth);
//      if (!pickerToken) {
//           return <Navigate to='/picker/login' />
//      }
//      if (loading == false && isVerifiedByAdmin == 'verified') {
//           console.log(isVerifiedByAdmin);
//           console.log("iiiiiiiiiiiiiiiiiii");
//           return <Outlet></Outlet>
//      } else if (loading == false && isVerifiedByAdmin == 'rejected') {
//           return <Navigate to={'/picker/rejected'} />
//      } else if (loading == false && isVerifiedByAdmin == 'pending') {
//           return (<Waiting></Waiting>)
//      }

// }

// export default IsPickerLoggedIn;