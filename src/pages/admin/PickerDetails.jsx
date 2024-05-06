import React, { useEffect, useState } from 'react'
import { getPickerData, reject } from '../../api/admin'
import NavBar from '../../components/admin/navbar/NavBar'
import { Navigate, useParams } from 'react-router-dom'
import SideBar from '../../components/admin/sideBar/SideBar'
import ShowImg from '../../components/admin/ShowImg'
import { toast } from 'sonner'

function PickerDetails() {
     const [hiddenInput, setHiddenInput] = useState(true)
     const [pickerDetails, setPickerDetails] = useState({})
     const [pickerAccountDetails, setPickerAccountDetails] = useState({})
     const [reason, setReason] = useState('')
     const [showImg, setShowImg] = useState(false)
     const [imgUrl, setImgUrl] = useState('')
     const { id } = useParams()

     useEffect(() => {
          const fetchData = async () => {
               const response = await getPickerData(id)
               if (response.data.success) {
                    console.log(response.data.pickerData.image, 'pickerrrrrrrrrrrrrrrrr=======================================');
                    setPickerDetails(response.data.pickerData)
                    setPickerAccountDetails(response.data.pickerData.account)
               }
          }
          fetchData()
          console.log(pickerDetails, 'oooooooooooooooooooo');
     }, [])

     const cancelView = () => {
          setShowImg(false)
          imgUrl(null)
     }

     const handleInput = (e) => {
          e.preventDefault()
          setHiddenInput(!hiddenInput)
     }
     const handleSubmit = async (e) => {
          e.preventDefault()
          if (!reason.trim()) {
               toast.error('Give the exact reason for rejection')
               return
          }
          try {
               await reject(pickerDetails._id, reason)
               toast.success('You have rejected the application')
               return <Navigate to={'/admin/pickers'}></Navigate>
          } catch (error) {
               toast.warning('Somthing went wrong')
          }
     }
     return (
          <div className='flex'>
               <SideBar></SideBar>
               {
                    showImg && (
                         <ShowImg img={imgUrl} onCancel={cancelView}></ShowImg>
                    )
               }
               <div className='bg-black w-5/6 h-screen flex-row justify-end'>
                    <NavBar></NavBar>
                    <div className="p-4 text-white max-sm:overflow-scroll ">
                         <div className='flex m-5 text-sm'>
                              <div className='m-4'>
                                   <div className='flex m-4'>
                                        <p className=''><span className='z'>Profile</span> : </p>
                                        <p onClick={() => {
                                             setImgUrl(pickerDetails.image)
                                             setShowImg(!showImg)
                                        }} className='text-xs cursor-pointer px-1 py-1 text-[#4b65da] rounded-sm mx-1'>Click to view</p>
                                   </div>
                                   <p className='m-4'><span className='z'>Name</span> : <span className='text-xs'>{pickerDetails.name}</span></p>
                                   <p className='m-4'><span className='z'>Email</span> : <span className='text-xs'>fay@gmail.com</span></p>
                                   <p className='m-4'><span className='z'>Mobile</span> : <span className='text-xs'>7034879410</span></p>
                                   <p className='m-4'><span className='z'>Cargos</span> : <span className='text-xs'>Two Wheeler</span></p>
                              </div>
                              <div className='m-4'>
                                   <p className='m-4'><span className='z'>Account details</span></p>
                                   <div className='flex m-4'>
                                        <p className=''><span className='z'>ID Proof</span> : </p>
                                        <p onClick={() => {
                                             setImgUrl(pickerAccountDetails.idProof)
                                             setShowImg(!showImg)
                                        }} className='text-xs px-1 cursor-pointer py-1 text-[#4b65da] rounded-sm mx-1'>Click to view</p>
                                   </div>
                                   <p className='m-4'><span className='z'>IFSC Code</span> : <span className='text-xs'>{pickerAccountDetails.ifscCode}</span></p>
                                   <p className='m-4'><span className='z'>Account number</span> : <span className='text-xs'>{pickerAccountDetails.accountNumber}</span></p>
                                   <div className='flex m-4'>
                                        <p className=''><span className='z'>PAN Card</span> : </p>
                                        <p onClick={() => {
                                             setImgUrl(pickerAccountDetails.panCard)
                                             setShowImg(!showImg)
                                        }} className='text-xs px-1 py-1 cursor-pointer text-[#4b65da] rounded-sm mx-1'>Click to view</p>
                                   </div>
                                   {
                                        !pickerDetails.isVerifiedByAdmin &&
                                        <button onClick={handleInput} className={hiddenInput ? " text-sm block bg-red mt-2 ml-4 text-white h-7 py-1 px-2 rounded" : 'hidden'}>
                                             Reject
                                        </button>
                                   }
                              </div>
                              <div className={hiddenInput ? 'hidden' : 'block m-4'}>
                                   <form action="">
                                        <div className='flex-row'>
                                             <textarea onChange={(e) => { setReason(e.target.value) }} value={reason} type="text" className='h-20 w-128 bg-pp-dark-1 bg-opacity-40 rounded-md' />
                                        </div>
                                        <button onClick={handleSubmit} className="bg-red mt-2  text-white h-8 py-1 text-sm px-2 rounded">
                                             Confirm rejection
                                        </button>
                                        <button onClick={handleInput} className="bg-pp-dark mt-2 ml-2 text-white h-8 py-1 text-sm px-2 rounded">
                                             Cancel
                                        </button>
                                   </form>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
     )
}

export default PickerDetails
