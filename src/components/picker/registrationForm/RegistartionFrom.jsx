import React, { useState } from 'react'
import Header from '../../user/header/Header'
import FileUpload from '../../utils/fileUpload/FileUpload'
import Sample from '../../../pages/Sample';

function RegistartionFrom() {

     const [previewSrc, setPreviewSrc] = useState("../src/assets/profile.png");

     const handleFileChange = (event) => {
          const file = event.target.files[0];
          if (file) {
               setPreviewSrc(URL.createObjectURL(file));
          }
     };

     return (
          <div>
               <Header></Header>
               <div className="flex items-center justify-center p-12 bg-pp-dark">
                    <div className="mx-auto w-full max-w-[550px]">
                         <h1 className='text-2xl py-2 font-semibold text-white'>Fill the registration form to continue. It's safe and used for verification.</h1>
                         <form>
                              <div className="mb-5">
                                   <label
                                        htmlFor="name"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Full Name
                                   </label>
                                   <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                   />
                              </div>
                              <div className="mb-5">
                                   <label
                                        htmlFor="phone"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Phone Number
                                   </label>
                                   <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                   />
                              </div>
                              <div className="mb-5">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Email Address
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                   />
                              </div>
                              <div className="mb-5 pt-3">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Upload your photo
                                   </label>
                                   <div className="shrink-0 py-3">
                                        <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={previewSrc} alt="Current profile photo" />
                                   </div>
                                   <label className="block">
                                        <span className="sr-only">Choose profile photo</span>
                                        <input
                                             type="file"
                                             onChange={handleFileChange}
                                             className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100"
                                        />
                                   </label>
                              </div>

                              {/*==================================================== Cargo start */}
                              <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Select the cargo
                                   </label>
                              <Sample></Sample>
                              {/*======================================================== Cargo end */}

                              {/* ==================================================== address start */}

                              <div className="mb-5 pt-3">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Address Details
                                   </label>
                                   <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="area"
                                                       id="area"
                                                       placeholder="Enter area"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="city"
                                                       id="city"
                                                       placeholder="Enter city"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="state"
                                                       id="state"
                                                       placeholder="Enter state"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="post-code"
                                                       id="post-code"
                                                       placeholder="Post Code"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/*------------------------------------- address end  */}

                              {/*---------------------------------- account start */}
                              <div className="mb-5 pt-3">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Account Details
                                   </label>
                                   <div className="mb-5 pt-3">
                                        <label
                                             htmlFor="email"
                                             className="mb-3 block text-base font-medium text-white"
                                        >
                                             Upload your valid ID proof
                                        </label>
                                        <div className="shrink-0 py-3">
                                             {/* <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={previewSrc} alt="Current profile photo" /> */}
                                        </div>
                                        <label className="block">
                                             <span className="sr-only"></span>
                                             <input
                                                  type="file"
                                                  onChange={handleFileChange}
                                                  className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100"
                                             />
                                        </label>
                                   </div>
                                   <div className="mb-5 pt-3">
                                        <label
                                             htmlFor="email"
                                             className="mb-3 block text-base font-medium text-white"
                                        >
                                             Upload your PAN card
                                        </label>
                                        <div className="shrink-0 py-3">
                                             {/* <img id='preview_img' className="h-16 w-16 object-cover rounded-full" src={previewSrc} alt="Current profile photo" /> */}
                                        </div>
                                        <label className="block">
                                             <span className="sr-only"></span>
                                             <input
                                                  type="file"
                                                  onChange={handleFileChange}
                                                  className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-violet-50 file:text-violet-700
                                        hover:file:bg-violet-100"
                                             />
                                        </label>
                                   </div>
                                   <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="area"
                                                       id="area"
                                                       placeholder="Enter IFSC code"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                             <div className="mb-5">
                                                  <input
                                                       type="text"
                                                       name="city"
                                                       id="city"
                                                       placeholder="Enter account number"
                                                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/*---------------------------------------- account end  */}

                              {/*-------------------------------------- password start */}
                              <div className="mb-5">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Password
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                   />
                              </div>
                              <div className="mb-5">
                                   <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-white"
                                   >
                                        Confirm password
                                   </label>
                                   <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                   />
                              </div>
                              {/*------------------------------------------- password end  */}
                              <div>
                                   <button className="hover:shadow-form w-full rounded-md bg-pp-dark-1 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                        Submit for verification
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default RegistartionFrom
