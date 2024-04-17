import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from 'project-pack'
import { login as adminLogin } from '../../../api/admin'
import { toast } from 'sonner'
import { setAdminCredential } from '../../../store/slice/authSlice'
import { useDispatch } from 'react-redux'

function Login() {
     const navigate = useNavigate()
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('')
     const dispatch = useDispatch()
     const handdleLogin = async (e) => {
          e.preventDefault()
          if (!validateEmail(email)) {
               setError("Enter a valid email")
          }
          let response = await adminLogin(email, password);
          console.log(response,'res of admin');
          if (response.data.success) {
               toast.success("Successfully Logged in")
               dispatch(setAdminCredential(response.data.token))
               navigate('/admin/dashboard')
          } else {
               console.log(response.data.message);
               toast.error(response.data.message)
          }
     }

     return (
          <>
               <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
                    <div className="text-foreground font-mono  font-semibold text-5xl tracking-tighter mx-auto flex items-center gap-2">
                         Pick'O'Pop
                    </div>
                    <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                         <div
                              className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                              bis_skin_checked={1}
                         />
                         <div className="mx-5 border ">
                              <div className="flex flex-col p-6">
                                   <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                                        Login
                                   </h3>
                                   <p className="mt-1.5 text-sm font-medium text-white/50">
                                        Enter your credentials to continue.
                                   </p>
                              </div>
                              <div className="p-6 pt-0">
                                   <form>
                                        <div>
                                             <div>
                                                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                                       <div className="flex justify-between">
                                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                                 Email
                                                            </label>
                                                       </div>
                                                       <input
                                                            onChange={(e) => { setEmail(e.target.value) }}
                                                            type="text"
                                                            name="email"
                                                            placeholder=""
                                                            autoComplete="off"
                                                            className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mt-4">
                                             <div>
                                                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                                       <div className="flex justify-between">
                                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                                 Password
                                                            </label>
                                                       </div>
                                                       <div className="flex items-center">
                                                            <input
                                                                 onChange={(e) => { setPassword(e.target.value) }}
                                                                 type="password"
                                                                 name="password"
                                                                 className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                                            />
                                                       </div>
                                                  </div>
                                                       <p className='text-red py-1'>{error}</p>
                                             </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                             <p
                                                  className=" cursor-pointer text-sm font-medium text-foreground "
                                                  href="/forgot-password"
                                             >
                                                  Forgot password?<span className='text-navy px-1'>Click.</span>
                                             </p>
                                        </div>
                                        <div className="mt-4 flex items-center justify-end gap-x-2">
                                             <button
                                                  onClick={handdleLogin}
                                                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                                  type="submit"
                                             >
                                                  Log in
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </>

     )
}

export default Login
