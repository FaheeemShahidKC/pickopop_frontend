import React, { useState, useRef } from 'react';
import Header from '../../user/header/Header';
import Sample from '../../../pages/Sample';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../api/picker';
import { toast } from 'sonner';

function RegistrationForm() {
     const navigate = useNavigate()
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [profile, setProfile] = useState(null)
     const [mobile, setMobile] = useState('');
     const [cargo, setCargo] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [ifscCode, setIfscCode] = useState('');
     const [accountNumber, setAccountNumber] = useState('');
     const [panCardFile, setPanCardFile] = useState(null);
     const [idProofFile, setIdProofFile] = useState(null);
     const [previewSrc, setPreviewSrc] = useState('../src/assets/profile.png');
     const [errors, setErrors] = useState({});

     const preview_img = useRef()
     const handleFileChange = (event, fileType) => {
          const file = event.target.files[0];
          if (file) {
               if (fileType === 'profile') {
                    // Generate a preview of the selected file
                    const previewUrl = URL.createObjectURL(file);
                    // Update the src attribute of the image element
                    preview_img.current.src = previewUrl;
                    // Set the file in the state
                    setProfile(file);
               } else if (fileType === 'panCard') {
                    setPanCardFile(file);
               } else if (fileType === 'idProof') {
                    setIdProofFile(file);
               }
          }
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          const errors = {};

          if (!name.trim()) {
               errors.name = 'Name is required';
          }

          if (!email.trim()) {
               errors.email = 'Email is required';
          } else if (!/\S+@\S+\.\S+/.test(email)) {
               errors.email = 'Email is invalid';
          }

          if (!profile) {
               errors.profile = 'Please upload your profile picture';
          }

          if (!mobile.trim()) {
               errors.mobile = 'Mobile is required';
          } else if (!/^\d{10}$/.test(mobile)) {
               errors.mobile = 'Mobile is invalid';
          }

          if (!cargo.trim()) {
               errors.cargo = 'Cargo is required';
          }

          if (!password.trim()) {
               errors.password = 'Password is required';
          } else if (password.length < 6) {
               errors.password = 'Password must be at least 6 characters long';
          }

          if (password !== confirmPassword) {
               errors.confirmPassword = 'Passwords do not match';
          }

          if (!ifscCode.trim()) {
               errors.ifscCode = 'IFSC code is required';
          }

          if (!accountNumber.trim()) {
               errors.accountNumber = 'Account number is required';
          }

          if (!panCardFile) {
               errors.panCard = 'Please upload your PAN card';
          }

          if (!idProofFile) {
               errors.idProof = 'Please upload your ID proof';
          }

          if(password !== confirmPassword){
               errors.confirmPassword = "Password doesn't match"
          }

          if (Object.keys(errors).length === 0) {
               // Form submission logic
               const formData = new FormData()
               formData.append("name", name)
               formData.append("email", email)
               formData.append("mobile", mobile)
               formData.append("cargos", cargo)
               formData.append("password", password)
               formData.append("ifscCode", ifscCode)
               formData.append("accountNumber", accountNumber)
               formData.append("idProof", idProofFile)
               formData.append("panCard", panCardFile)
               formData.append("image", profile)
     
               const response = await signup(formData)
               console.log(response, "resss");
               if (response.data.success) {
     
                    navigate(`/picker/otp/${response.data.savedUserid}`)
               } else {
                    toast.error(response.data.message)
               }
               console.log('Form submitted successfully!');
          } else {
               setErrors(errors);
          }

     };

     return (
          <div>
               <Header />
               <div className="flex items-center justify-center p-12 bg-pp-dark">
                    <div className="mx-auto w-full max-w-[550px]">
                         <h1 className="text-2xl py-2 font-semibold text-white">
                              Fill the registration form to continue. It's safe and used for verification.
                         </h1>
                         <form onSubmit={handleSubmit}>
                              <div className="mb-5">
                                   <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
                                        Full Name
                                   </label>
                                   <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.name && 'border-red-500'
                                             }`}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                   />
                                   {errors.name && <p className="text-red text-sm mt-1">{errors.name}</p>}
                              </div>
                              <div className="mb-5">
                                   <label htmlFor="phone" className="mb-3 block text-base font-medium text-white">
                                        Phone Number
                                   </label>
                                   <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.mobile && 'border-red-500'
                                             }`}
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                   />
                                   {errors.mobile && <p className="text-red text-sm mt-1">{errors.mobile}</p>}
                              </div>
                              <div className="mb-5">
                                   <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                                        Email Address
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.email && 'border-red-500'
                                             }`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                   />
                                   {errors.email && <p className="text-red text-sm mt-1">{errors.email}</p>}
                              </div>
                              <div className="mb-5 pt-3">
                                   <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                                        Upload your photo
                                   </label>
                                   <div className="shrink-0 py-3">
                                        <img ref={preview_img} id="preview_img" className="h-16 w-16 object-cover rounded-full" src={previewSrc} alt="Current profile photo" />
                                   </div>
                                   <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input
                                             type="file"
                                             onChange={(e) => handleFileChange(e, 'profile')}
                                             className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                        />
                                        {errors.profile && <p className="text-red text-sm mt-1">{errors.profile}</p>}
                                   </label>
                              </div>

                              {/* Cargo Selection */}
                              <div className="mb-5">
                                   <label htmlFor="cargo" className="mb-3 block text-base font-medium text-white">
                                        Select the cargo
                                   </label>
                                   <Sample cargo={cargo} setCargo={setCargo} />
                                   {errors.cargo && <p className="text-red text-sm mt-1">{errors.cargo}</p>}
                              </div>

                              {/* Account Details */}
                              <div className="mb-5 pt-3">
                                   <label htmlFor="ifscCode" className="mb-3 block text-base font-medium text-white">
                                        IFSC Code
                                   </label>
                                   <input
                                        type="text"
                                        name="ifscCode"
                                        id="ifscCode"
                                        placeholder="Enter IFSC code"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.ifscCode && 'border-red-500'
                                             }`}
                                        value={ifscCode}
                                        onChange={(e) => setIfscCode(e.target.value)}
                                   />
                                   {errors.ifscCode && <p className="text-red text-sm mt-1">{errors.ifscCode}</p>}
                              </div>
                              <div className="mb-5">
                                   <label htmlFor="accountNumber" className="mb-3 block text-base font-medium text-white">
                                        Account Number
                                   </label>
                                   <input
                                        type="text"
                                        name="accountNumber"
                                        id="accountNumber"
                                        placeholder="Enter account number"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.accountNumber && 'border-red-500'
                                             }`}
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                   />
                                   {errors.accountNumber && <p className="text-red text-sm mt-1">{errors.accountNumber}</p>}
                              </div>

                              <div className="mb-5 pt-3">
                                   <label htmlFor="panCard" className="mb-3 block text-base font-medium text-white">
                                        Upload your PAN card
                                   </label>

                                   <label className="block">
                                        <span className="sr-only">Choose PAN card</span>
                                        <input
                                             type="file"
                                             onChange={(e) => handleFileChange(e, 'panCard')}
                                             className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                        />
                                   </label>
                                   {errors.panCard && <p className="text-red text-sm mt-1">{errors.panCard}</p>}
                              </div>
                              {/* ID Proof */}
                              <div className="mb-5 pt-3">
                                   <label htmlFor="idProof" className="mb-3 block text-base font-medium text-white">
                                        Upload your ID proof
                                   </label>
                                   <label className="block">
                                        <span className="sr-only">Choose ID proof</span>
                                        <input
                                             type="file"
                                             onChange={(e) => handleFileChange(e, 'idProof')}
                                             className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                        />
                                   </label>
                                   {errors.idProof && <p className="text-red text-sm mt-1">{errors.idProof}</p>}
                              </div>
                              {/* Password */}
                              <div className="mb-5">
                                   <label htmlFor="password" className="mb-3 block text-base font-medium text-white">
                                        Password
                                   </label>
                                   <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.password && 'border-red-500'
                                             }`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                   />
                                   {errors.password && <p className="text-red text-sm mt-1">{errors.password}</p>}
                              </div>

                              {/* Confirm Password */}
                              <div className="mb-5">
                                   <label htmlFor="confirmPassword" className="mb-3 block text-base font-medium text-white">
                                        Confirm Password
                                   </label>
                                   <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Confirm your password"
                                        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${errors.confirmPassword && 'border-red-500'
                                             }`}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                   />
                                   {errors.confirmPassword && <p className="text-red text-sm mt-1">{errors.confirmPassword}</p>}
                              </div>

                              <div>
                                   <button
                                        type="submit"
                                        className="hover:bg-pp-dark w-full rounded-md bg-pp-dark-1 py-3 px-8 text-center text-base font-semibold text-white outline-none"
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

export default RegistrationForm;
