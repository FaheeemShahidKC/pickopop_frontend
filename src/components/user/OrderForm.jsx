import React, { useState } from 'react';
import { toast } from 'sonner';
import { validateEmail, validateIndianPhoneNumber } from 'project-pack'
import { getIncome, placeOrder } from '../../api/user';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

function OrderForm() {
     const navigate = useNavigate()

     const [origin, setOrigin] = useState('');
     const [destination, setDestination] = useState('');
     const [distance, setDistance] = useState(null);

     const [productName, setProductName] = useState('');
     const [isFargile, setIsFragile] = useState(true);
     const [weight, setWeight] = useState('');

     const [senderName, setSenderName] = useState('');
     const [senderMobile, setSenderMobile] = useState('');
     const [senderAddress, setSenderAddress] = useState('');
     const [senderLocation, setSenderLocation] = useState('');
     const [senderSuggetions, setSenderSuggetions] = useState([]);

     const [receiverName, setReceiverName] = useState('');
     const [receiverMobile, setReceiverMobile] = useState('');
     const [receiverAddress, setReceiverAddress] = useState('');
     const [receiverLocation, setReceiverLocation] = useState('');
     const [receiverSuggetions, setReceiverSuggetions] = useState([]);

     const [description, setDescription] = useState('')

     const [payment, setPayment] = useState('')
     const [amount, setAmount] = useState(null)

     const handleChangeDestination = async (event) => {
          const value = event.target.value;
          if (event.target.name == 'senderLocation') {
               setSenderLocation(value);
          } else {
               setReceiverLocation(value)
          }
          const key = import.meta.env.VITE_LOCATION_API_KEY
          await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=${key}`)
               .then(response => response.json())
               .then(response => {
                    const obj = response
                    const arr = obj.results
                    if (event.target.name == 'senderLocation') {
                         setSenderSuggetions(arr);
                    } else {
                         setReceiverSuggetions(arr)
                    }
               })
               .catch(error => {
                    console.error('Error fetching autocomplete suggestions:', error);
               });

          if (senderLocation && receiverLocation) {
               try {
                    console.log(senderLocation, receiverLocation);
                    const response = await getIncome(senderLocation, receiverLocation);
                    const rounded = Math.floor(response.data.income);
                    setAmount(rounded);
               } catch (error) {
                    console.error(error);
                    toast.error('An error occurred while fetching data');
               }
          }
     };

     const handlePayment = async (event) => {
          event.preventDefault();

          try {
               // if (!productName.trim().length) {
               //      toast.error('Fill the product name')
               // } else if (!weight.trim().length) {
               //      toast.error('Give an approximate weight')
               // } else if (!senderName.trim()) {
               //      toast.error('Give the sender name')
               // } else if (!validateIndianPhoneNumber(senderMobile)) {
               //      toast.error('Give the valid mobile number')
               // } else if (!senderAddress.trim()) {
               //      toast.error('Provide the propper location')
               // } else if (!receiverName.trim()) {
               //      toast.error('Give the receiver name')
               // } else if (!validateIndianPhoneNumber(senderMobile)) {
               //      toast.error('Give the valid mobile number')
               // } else if (!senderAddress.trim()) {
               //      toast.error('Provide the propper location')
               // } else if (!senderAddress.trim()) {
               //      toast.error('Select the payment method')
               // } else {
               //      const response = await getIncome(senderLocation, receiverLocation);
               //      const rounded = Math.floor(response.data.income)
               //      setAmount(rounded)
               // }

               const formData = new FormData()
               formData.append("productName", productName)
               formData.append("isFargile", isFargile)
               formData.append("weight", weight)
               formData.append("senderName", senderName)
               formData.append("senderMobile", senderMobile)
               formData.append("senderAddress", senderAddress)
               formData.append("senderLocation", senderLocation)
               formData.append("receiverName", receiverName)
               formData.append("receiverMobile", receiverMobile)
               formData.append("receiverAddress", receiverAddress)
               formData.append("receiverLocation", receiverLocation)
               formData.append("description", description)
               formData.append("payment", description)
               formData.append("amount", amount)

               const stripe = await loadStripe(toString(import.meta.env.VITE_STRIPE_PUBLIC_KEY))
               const response = await placeOrder(amount);
               const sessionId = response?.data.stripeId;
               const ress = await stripe?.redirectToCheckout({ sessionId });
               console.log(ress);
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
               <section className="py-1 bg-blueGray-50 bg-pp-dark">
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
                                                            name='productName'
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="w-full lg:w-6/12 px-4">
                                                  <div className="relative w-full mb-3">
                                                       <div className="flex items-center">
                                                            <input
                                                                 type="checkbox"
                                                                 name='isFargile'
                                                                 className="form-checkbox h-4 w-4 text-blue-600"
                                                                 onClick={() => setIsFragile(!isFargile)}
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
                                                                 type="number"
                                                                 name='weight'
                                                                 className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-12 ease-linear transition-all duration-150"
                                                                 maxLength={3} // Maximum length set to 3 characters
                                                            />
                                                            <span className="ml-2 text-gray-700">kg</span>
                                                       </div>
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
                                                            name='senderName'
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
                                                            type="number"
                                                            name='senderMobile'
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
                                                            type="text"
                                                            name='senderAddress'
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
                                                            Location
                                                       </label>
                                                       <input
                                                            value={senderLocation}
                                                            onChange={handleChangeDestination}
                                                            name='senderLocation'
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                       {senderSuggetions && senderSuggetions.length > 0 && (
                                                            <ul className="absolute z-10 bg-white text-black border border-gray-300 w-full mt-1 rounded-md shadow-lg">
                                                                 {senderSuggetions.map((suggestion, index) => (
                                                                      <li
                                                                           key={index}
                                                                           className="py-1 px-3 border border-pp-gray-3 cursor-pointer hover:bg-gray-100"
                                                                           onClick={() => {
                                                                                // Handle selection of suggestion
                                                                                console.log('Selected suggestion:', suggestion);
                                                                                setSenderLocation(suggestion.formatted);
                                                                                setSenderSuggetions([]);
                                                                           }}
                                                                      >
                                                                           {suggestion.formatted}
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       )
                                                       }
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
                                                            Receiver name
                                                       </label>
                                                       <input
                                                            type="text"
                                                            name='receiverName'
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
                                                            type="number"
                                                            name='receiverMobile'
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
                                                            type="text"
                                                            name='receiverAddress'
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
                                                            Location
                                                       </label>
                                                       <input
                                                            value={receiverLocation}
                                                            onChange={handleChangeDestination}
                                                            name='receiverLocation'
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                       />
                                                       {receiverSuggetions && receiverSuggetions.length > 0 && (
                                                            <ul className="absolute z-10 bg-white text-black border border-gray-300 w-full mt-1 rounded-md shadow-lg">
                                                                 {receiverSuggetions.map((suggestion, index) => (
                                                                      <li
                                                                           key={index}
                                                                           className="py-1 px-3 cursor-pointer border border-pp-gray-3 hover:bg-gray-100"
                                                                           onClick={() => {
                                                                                setReceiverLocation(suggestion.formatted);
                                                                                setReceiverSuggetions([]);
                                                                           }}
                                                                      >
                                                                           {suggestion.formatted}
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       )
                                                       }
                                                  </div>
                                             </div>

                                        </div>
                                        <hr className="mt-10 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             Anything more
                                        </h6>
                                        <div className="w-full px-4">
                                             <div className="relative w-full mb-3">
                                                  <label
                                                       className="block  text-blueGray-600 text-xs  mb-2"
                                                       htmlfor="grid-password"
                                                  >
                                                       Additional information
                                                  </label>
                                                  <textarea
                                                       type="text"
                                                       name='description'
                                                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                  />
                                             </div>
                                        </div>
                                        <hr className="mt-10 border-b-1 border-blueGray-300" />
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6  uppercase">
                                             Payment
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
                                                       <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                            <option value="" disabled hidden>Select an option</option>
                                                            <option value="COD" className="">Cash on delivery</option>
                                                            <option value="UPI" className="">UPI payment</option>
                                                       </select>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* <div className='items-center justify-center flex'>
                                             <button
                                                  onClick={handlePayment}
                                                  className='m-5 bg-[#274d65] w-144 p-2 rounded-sm hover:bg-[#27546f]'>
                                                  Proceed to payment
                                             </button>
                                        </div> */}
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
               <div className={amount ? "sticky bottom-0  justify-between px-16 text-white z-50 bg-[#144340] flex items-center w-full h-[90px]" : 'hidden'}>
                    <div>
                         <p className='text-sm'>
                              Total delivery charge
                              <p className='text-2xl font-semibold'>$ {amount}</p>
                         </p>
                    </div>
                    <div className='items-center justify-center flex'>
                         <button
                              onClick={() => { navigate('/orders') }}
                              className=' mx-0 m-5 bg-[#ffa7a7] text-sm text-black font-semibold p-2 px-4 rounded-lg hover:bg-[#ff4b4b]'>
                              Cancel
                         </button>
                         <button
                              onClick={handlePayment}
                              className='m-5 bg-[#00ff55] text-sm text-black font-semibold p-2 px-4 rounded-lg hover:bg-[#236d27]'>
                              Proceed to payment
                         </button>
                    </div>
               </div>

          </div>
     )
}

export default OrderForm
