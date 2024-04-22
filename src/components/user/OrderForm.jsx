import React, { useState } from 'react';
import { toast } from 'sonner';

function OrderForm() {
     const [origin, setOrigin] = useState('');
     const [destination, setDestination] = useState('');
     const [distance, setDistance] = useState(null);

     const handleChangeOrigin = (event) => {
          setOrigin(event.target.value);
     };

     const handleChangeDestination = (event) => {
          setDestination(event.target.value);
     };

     const handleSubmit = async (event) => {
          event.preventDefault();

          try {
               console.log(origin,destination);
               const api = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=gtjpeZs6qV7pJJRFqHN80cUqgfY1XmMd1CVw3NW1Aa44oxaXLFMEvAwTYJLLNkvI`;

               const response = await fetch(api);

               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }
               const data = await response.json();
               console.log(data);
               // Extract and set distance data here
               setDistance(data);
          } catch (error) {
               console.error(error);
               toast.error('An error occurred while fetching data');
          }
     };

     return (
          <div>
               {/* <UserHeader></UserHeader> */}
               {/* component */}
               {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                   <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/> */}
               <section className=" py-1 bg-blueGray-50  bg-pp-dark">
                    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6  ">
                         <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-blueGray-100 border-0">
                              <div className="rounded-t bg-pp-dark mb-0 px-6 py-6">
                                   <div className="text-center flex justify-between">
                                        <h6 className=" text-xl text-white font-semibold">New order</h6>
                                        {/* <button
                                                  className="bg-pink-500 text-white active:bg-pink-600  uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                                  type="button"> Settings
                                             </button> */}
                                   </div>
                              </div>
                              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-pp-dark text-white">
                                   <form className=''>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             Product Information
                                        </h6>
                                        <div className=" flex-wrap">
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Product name
                                                       </label>
                                                       <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <div className="flex items-center">
                                                            <input
                                                                 type="checkbox"
                                                                 className="form-checkbox h-4 w-4 text-blue-600"
                                                            // checked={checked}
                                                            // onChange={handleChange}
                                                            />
                                                            <span className="ml-2 text-gray-700">Fragile product</span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Approximate weight
                                                       </label>
                                                       <div>
                                                            <input
                                                                 type="text"
                                                                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-12 ease-linear transition-all duration-150"
                                                                 maxLength={3} // Maximum length set to 3 characters
                                                            />
                                                            <span className="ml-2 text-gray-700">kg</span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Description
                                                       </label>
                                                       <input
                                                            type="email"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>

                                             </div>
                                        </div>
                                        <hr className="mt-10 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             Pick details
                                        </h6>
                                        <div className="flex flex-wrap">
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Attender name
                                                       </label>
                                                       <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Mobile number
                                                       </label>
                                                       <input
                                                            type="email"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                            >
                                                            Address
                                                       </label>
                                                       <input
                                                            onChange={handleChangeDestination}
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Additional information
                                                       </label>
                                                       <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <hr className="mt-10 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             Drop details
                                        </h6>
                                        <div className="flex flex-wrap">
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Reciver name
                                                       </label>
                                                       <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Mobile number
                                                       </label>
                                                       <input
                                                            type="email"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Address
                                                       </label>
                                                       <input
                                                            onChange={handleChangeOrigin}
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block  text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Additional information
                                                       </label>
                                                       <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <hr className="mt-10 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             {distance && distance.rows[0].elements[0].distance.text}
                                        </h6>
                                        <div className="flex flex-wrap">
                                             <div className="w-full lg:w-12/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <label
                                                            className="block text-blueGray-600 text-xs  mb-2"
                                                            htmlfor="grid-password"
                                                       >
                                                            Payment methord
                                                       </label>
                                                       <select
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       >
                                                            <option value="" disabled selected hidden>Select an option</option>
                                                            <option className='' value="Option 1">Cash on delivery</option>
                                                            <option className='' value="Option 1">UPI payment</option>
                                                       </select>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className='items-center justify-center flex'>
                                             <button onClick={handleSubmit} className='m-5 bg-[#274d65] w-144 p-2 rounded-sm hover:bg-[#27546f]'>
                                                  Proceed to payment
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>

          </div>
     )
}

export default OrderForm
