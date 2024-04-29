import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { resendOtp, verifyOtp } from '../../../api/user';
import { toast } from 'sonner';
import { setUserCredential } from '../../../store/slice/authSlice';
import { useDispatch } from 'react-redux';

function Otp() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { id } = useParams();
     const [otp, setOtp] = useState('');
     const [error, setError] = useState('');
     const [timer, setTimer] = useState(60);
     const [resendDisabled, setResendDisabled] = useState(false);

     useEffect(() => {
          const storedTimer = localStorage.getItem('utimer');
          const parsedTimer = parseInt(storedTimer, 10);
          if (!isNaN(parsedTimer) && parsedTimer > 0) {
               setTimer(parsedTimer);
               setResendDisabled(true);
          } else {
               localStorage.removeItem('utimer');
          }
     }, [])

     useEffect(() => {
          let interval;
          if (timer > 0) {
               interval = setInterval(() => {
                    setTimer(prevTimer => {
                         localStorage.setItem('utimer', prevTimer - 1);
                         return prevTimer - 1;
                    });
               }, 1000);
          } else {
               setResendDisabled(false);
          }
          return () => clearInterval(interval);
     }, [timer]);

     const handleResend = async () => {
          try {
               const response = await resendOtp(id);
               if (response && response.data.success) {
                    setTimer(60);
                    setResendDisabled(true)
                    toast.success('We have resend OTP to your mail.');
               } else {
                    toast.error('Something went wrong. Try again.')
               }
          } catch (error) {
               console.error('Error resending OTP:', error);
          }
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               if (otp.trim().length < 6) {
                    setError("Fill the OTP field.");
                    return;
               }

               if (timer <= 0) {
                    toast.error('OTP expires. send it again.')
                    return
               }

               let response = await verifyOtp(otp, id);
               if (response && response.data.success) {
                    await dispatch(setUserCredential(response.data.token));
                    toast.success('Welcome to DROPi');
                    navigate('/profile');
               } else {
                    toast.error(response.data.message);
               }
          } catch (error) {
               toast.warning(error.message);
          }
     };

     return (
          <div className="min-h-screen bg-pp-dark py-6 flex flex-col justify-center sm:py-12">
               <div className="relative py-3 sm:max-w-xl sm:mx-auto z-50">
                    <div className="absolute inset-0 bg-pp-dark-1 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                         <div className="max-w-md mx-auto">
                              <div className='text-center'>
                                   <h1 className="sm:text-3xl text-2xl font-extrabold text-pp-dark font-mono">DROPi</h1>
                              </div>
                              <div className="divide-y divide-gray-200">
                                   <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                             <input name="otp" autoComplete="off" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Enter OTP" />
                                             <label htmlFor="otp" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Enter OTP</label>
                                             <p className='text-xs px-1 py-1 text-red'>{error}</p>
                                             <div>
                                                  <button className='text-xs rounded-sm bg-[#1778f037] p-1' onClick={handleResend} disabled={resendDisabled}>{resendDisabled ? `Expires in ${timer}s` : 'Resend'}</button>
                                             </div>
                                        </div>
                                        <div className="relative">
                                             <button onClick={handleSubmit} className="bg-cyan-500 text-sm bg-pp-dark-1 text-white rounded-md px-2 py-1" type="submit">Submit</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Otp;
