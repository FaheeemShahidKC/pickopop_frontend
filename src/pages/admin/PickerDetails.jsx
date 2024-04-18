import React, { useEffect, useState } from 'react'
import { getPickerData, reject } from '../../api/admin'
import NavBar from '../../components/admin/navbar/NavBar'
import { Navigate, useParams } from 'react-router-dom'
import SideBar from '../../components/admin/sideBar/SideBar'

function PickerDetails() {
     const [idProofImg, setIdProofImg] = useState(true)
     const [panCardImg, setPanCardImg] = useState(true)
     const [profileImg, setProfileImg] = useState(true)
     const [hiddenInput, setHiddenInput] = useState(true)
     const [pickerDetails, setPickerDetails] = useState({})
     const [pickerAccountDetails, setPickerAccountDetails] = useState({})
     const [reason, setReason] = useState('')
     const { id } = useParams()

     useEffect(() => {
          console.log('poooooooooooooooooooo');
          console.log(id);
          const fetchData = async () => {
               const response = await getPickerData(id)
               if (response.data.success) {
                    console.log(response.data.pickerData.image, 'pickerrrrrrrrrrrrrrrrr=======================================');
                    setPickerDetails(response.data.pickerData)
                    setPickerAccountDetails(response.data.pickerData.account)
               }
          }
          fetchData()
          console.log(pickerDetails,'oooooooooooooooooooo');
     },[])
     
     const handleProfileImg = () => {
          setProfileImg(!profileImg)
     }
     const handleIdproofImg = () => {
          setIdProofImg(!idProofImg)
     }
     const handlePanCardImg = () => {
          setPanCardImg(!panCardImg)
     }
     const handleInput = (e) => {
          e.preventDefault()
          setHiddenInput(!hiddenInput)
     }
     const handleSubmit = async (e) => {
          e.preventDefault()
          await reject(pickerDetails._id, reason)
          return <Navigate to={'/admin/pickers'}></Navigate>
     }
     return (
          <div className='flex'>
               <SideBar></SideBar>
               <div className='bg-black w-5/6 h-screen flex-row justify-end'>
                    <NavBar></NavBar>
                    <div className="p-4 text-white max-sm:overflow-scroll "> \
                         <div className='flex m-5'>
                              <div className='m-4'>
                                   <div className='flex m-4'>
                                        <p className=''><span className='z'>Profile</span> : </p>
                                        {
                                             profileImg ?
                                                  <img onClick={handleProfileImg} className='m-4 h-10 hover:scale-105 cursor-pointer' src={`http://10.4.2.61:5000/${pickerDetails.image}`} alt="" ></img>
                                                  :
                                                  <img onClick={handleProfileImg} className='m-4 h-80 max-sm:h-40 max-md:h-56' src={`http://10.4.2.61:5000/${pickerDetails.image}`} alt="" />
                                        }
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
                                        {
                                             idProofImg ?
                                                  <img onClick={handleIdproofImg} className='m-4 h-10 hover:scale-105 cursor-pointer' src={`http://10.4.2.61:5000/${pickerAccountDetails.idProof}`} alt="" ></img>
                                                  :
                                                  <img onClick={handleIdproofImg} className='m-4 h-80 max-sm:h-40 max-md:h-56' src={`http://10.4.2.61:5000/${pickerAccountDetails.idProof}`} alt="" />
                                        }
                                   </div>
                                   <p className='m-4'><span className='z'>IFSC Code</span> : <span className='text-xs'>shs256fghs698gsb162ds5</span></p>
                                   <p className='m-4'><span className='z'>Account number</span> : <span className='text-xs'>561658956695282</span></p>
                                   <div className='flex m-4'>
                                        <p className=''><span className='z'>PAN Card</span> : </p>
                                        {
                                             panCardImg ?
                                                  <img onClick={handlePanCardImg} className='m-4 h-10 hover:scale-105 cursor-pointer' src={`http://10.4.2.61:5000/${pickerAccountDetails.panCard}`} alt="" ></img>
                                                  :
                                                  <img onClick={handlePanCardImg} className='m-4 h-80 max-sm:h-40 max-md:h-56' src={`http://10.4.2.61:5000/${pickerAccountDetails.panCard}`} alt="" />
                                        }
                                   </div>
                                   <button onClick={handleInput} className={hiddenInput ? "block bg-pp-dark mt-2 text-white h-8 py-1 text-sm px-2 rounded" : 'hidden'}>
                                        Reject
                                   </button>
                              </div>
                              <div className={hiddenInput ? 'hidden' : 'block m-4'}>
                                   <form action="">
                                        <div className='flex-row'>
                                             <input onChange={(e) => { setReason(e.target.value) }} value={reason} type="text" className='h-20 w-128 bg-pp-dark-1 bg-opacity-40 rounded-md' />
                                        </div>
                                        <button onClick={handleSubmit} className="bg-pp-dark mt-2  text-white h-8 py-1 text-sm px-2 rounded">
                                             Send
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
