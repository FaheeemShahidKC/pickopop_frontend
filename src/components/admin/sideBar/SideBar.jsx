import React, { useState, useEffect, useRef } from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function SideBar() {
     const navigate = useNavigate()
     return (
          <div className='h-screen w-1/6 bg-black'>
               <div className="p-4 text-white borde">
                    <h1 className="text-2xl font-semibold max-sm:hidden max-md:hidden font- text-center" >Pick'o'Pop</h1>
                    <ul className="mt-10 flex-col max-lg:text-xs text-center">
                         <li onClick={()=>{navigate('/admin/dashboard')}} className=" p-2 py-3 mb border-x-0 border-gray hover:bg-added-grey-900 cursor-pointer border-t-0 border flex ">
                              <div className='mr-4'>
                                   <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                              </div>
                              <p className="block cursor-pointer hover:text-indigo-400 max-sm:hidden max-md:hidden">
                                   Dashboard
                              </p>
                         </li>
                         <li onClick={()=>{navigate('/admin/users')}} className=" p-2 py-3 mb border-x-0 border-gray hover:bg-added-grey-900 cursor-pointer border-t-0 border flex ">
                              <div className='mr-4'>
                                   <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                              </div>
                              <p className="block cursor-pointer hover:text-indigo-400 max-sm:hidden max-md:hidden">
                                   User management
                              </p>
                         </li>
                         <li className=" p-2 py-3 mb border-x-0 border-gray hover:bg-added-grey-900 cursor-pointer border-t-0 border flex ">
                              <div className='mr-4'>
                                   <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                              </div>
                              <p className="block cursor-pointer hover:text-indigo-400 max-sm:hidden max-md:hidden">
                                   Picker management
                              </p>
                         </li>
                         <li className=" p-2 py-3 mb border-x-0 border-gray hover:bg-added-grey-900 cursor-pointer border-t-0 border flex ">
                              <div className='mr-4'>
                                   <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                              </div>
                              <p className="block cursor-pointer hover:text-indigo-400 max-sm:hidden max-md:hidden">
                                   Home
                              </p>
                         </li>

                    </ul>
               </div>
          </div>
     );
}

export default SideBar;
