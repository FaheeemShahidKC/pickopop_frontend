import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/picker';
import { toast } from 'sonner';
import Header from '../../user/header/Header';
import { useDispatch } from 'react-redux';
import { setPickerCredential } from '../../../store/slice/authSlice';

function LoginForm() {
     const dispatch = useDispatch()
     const navigate = useNavigate();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [errors, setErrors] = useState({});

     const handleSubmit = async (e) => {
          e.preventDefault();
          const errors = {};

          if (!email.trim()) {
               errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(email)) {
               errors.email = 'Email is invalid';
          }

          if (!password.trim()) {
               errors.password = 'Password is required';
          }


          if (Object.keys(errors).length === 0) {
               // Form submission logic
               // const formData = new FormData();
               // formData.append('email', email);
               // formData.append('password', password);

               const response = await login(email, password);
               if (response.data.success) {
                    await dispatch(setPickerCredential(response.data.token))
                    navigate(`/picker/profile`);
               } else {
                    toast.error(response.data.message);
               }
          } else {
               setErrors(errors);
          }
     };

     return (
          <div>
               <Header />
               <div className="flex items-center justify-center p-12 h-screen bg-pp-dark">
                    <div className="mx-auto w-full max-w-[450px]">
                         <h1 className="text-2xl py-2 font-semibold my-5 text-white">
                              Login
                         </h1>
                         <form onSubmit={handleSubmit}>
                              <div className="mb-5">
                                   <label htmlFor="email" className="mb-3 block text-xs font-medium text-white">
                                        Email Address
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className={`w-full rounded-md border h-10 border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.email && 'border-red-500'
                                             }`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                   />
                                   {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
                              </div>
                              {/* Password */}
                              <div className="mb-5">
                                   <label htmlFor="password" className="mb-3 block text-xs font-medium text-white">
                                        Password
                                   </label>
                                   <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className={`w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-xs font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.password && 'border-red-500'
                                             }`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                   />
                                   {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
                              </div>
                              <p className='text-xs px-1 py-1'>Create new account?<span onClick={() => { navigate('/picker/register') }} className='text-bermuda cursor-pointer'> Register.</span></p>
                              <div>
                                   <button
                                        type="submit"
                                        className="hover:bg-pp-dark w-full rounded-md bg-pp-dark-1 py-3 px-8 text-center text-sm font-semibold text-white outline-none"
                                   >
                                        Submit for verification
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
}

export default LoginForm;
