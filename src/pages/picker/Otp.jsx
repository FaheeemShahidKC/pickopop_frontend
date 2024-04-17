import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { verifyOtp } from '../../api/picker'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setPickerCredential } from '../../store/slice/authSlice'

function Otp() {
     const dispatch = useDispatch()
     const { id } = useParams()
     console.log(id);
     const navigate = useNavigate()
     const [otp, setOtp] = useState()
     const [error, setError] = useState('')
     const handleSubmit = async (e) => {
          e.preventDefault()
          try {
               if (otp.trim().length < 6) {
                    setError("Fill the OTP")
                    return
               }

               let response = await verifyOtp(otp,id)
               if (response.data.success) {
                    toast.success('Your are signed in successfully now just login to continue')
                    navigate(`/picker/login`)
               } else {
                    toast.error(response.data.message)
               }
          } catch (error) {
               console.log(error);
          }
     }
     return (
          <div class="min-h-screen  bg-pp-dark py-6 flex flex-col justify-center sm:py-12">
               <div class="relative py-3 sm:max-w-xl sm:mx-auto z-50">
                    <div
                         class="absolute inset-0 bg-pp-dark-1 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                         <div class="max-w-md mx-auto">
                              <div className='text-center'>
                                   <h1 class="sm:text-3xl text-2xl font-extrabold text-pp-dark font-mono">Pick'O'Pop</h1>
                              </div>
                              <div class="divide-y divide-gray-200">
                                   <form action="">
                                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                             <div class="relative">
                                                  <input autocomplete="off" id="email" value={otp} onChange={(e) => setOtp(e.target.value)} type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                                  <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter OTP</label>
                                                  <p className='text-xs px-1 py-1 text-red'>{error}</p>
                                             </div>
                                             <div class="relative ">
                                                  <button onClick={handleSubmit} class="bg-cyan-500 bg-pp-dark-1 text-white rounded-md px-2 py-1">Submit</button>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Otp
