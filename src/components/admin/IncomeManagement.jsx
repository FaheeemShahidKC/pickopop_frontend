import React, { useEffect, useState } from 'react'
import NavBar from './navbar/NavBar'
import { getIncome, income } from '../../api/admin'
import { toast } from 'sonner'

function IncomeManagement() {
     const [mileage, setMileage] = useState(null)
     const [fuel, setFuel] = useState(null)
     const [isEditing, setIsEditing] = useState(false)
     const [error, setError] = useState(null)
     const [incomeDetails, setIncome] = useState({})
     useEffect(() => {
          const fetchData = async () => {
               const response = await getIncome()
               setIncome(response.data.incomeData[0]);
               setFuel(response.data.incomeData[0].fuel)
               setMileage(response.data.incomeData[0].mileage)
          }
          fetchData()
     }, [])

     const handleSubmit = async () => {
          // Validation checks
          if (!mileage || !fuel) {
               toast.error("Please fill out all fields."); 
               return;
          }

          try {
               const response = await income(incomeDetails._id, fuel, mileage);
               setIncome(response.data.incomeData);
               setIsEditing(false);
               setError(null); // Reset error state on successful submission
          } catch (error) {
               console.log(error);
               if (error.response && error.response.data && error.response.data.message) {
                    setError(error.response.data.message); // Set error message from the server response
               } else {
                    setError("An error occurred while submitting the form."); // Generic error message
               }
          }
     }

     return (
          <div className='bg-black w-5/6 h-screen flex-row justify-end'>
               <NavBar></NavBar>
               <div className="p-4 max-sm:w-80 w-96  text-white max-sm:overflow-scroll ml-10">
                    <p class="text-2xl mt-5 font-semibold max-sm:hidden max-md:hidden text-left">Income management</p>
                    <form>
                         <div className='m-4'>
                              <div>
                                   <p className="text-sm font-medium my-2 text-muted-foreground group-focus-within:text-white text-gray-400">
                                        Average milage of two wheelers.
                                   </p>
                                   <div className="group relative rounded-lg border focus-within:border-sky-200 p-0.5 px-2 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <input
                                             onChange={(e) => { setMileage(e.target.value) }}
                                             type="number"
                                             name="milage"
                                             value={mileage}
                                             readOnly={!isEditing}
                                             placeholder=""
                                             autoComplete="off"
                                             className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground
                                             h-8"

                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="m-4 ">
                              <div>
                                   <p className="text-sm font-medium my-2 text-muted-foreground group-focus-within:text-white text-gray-400">
                                        Current price of petrol for 1L.
                                   </p>
                                   <div className="group relative rounded-lg border focus-within:border-sky-200 p-0.5 px-2 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <input
                                             onChange={(e) => { setFuel(e.target.value) }}
                                             type="number"
                                             name="fuel"
                                             value={fuel}
                                             placeholder=""
                                             readOnly={!isEditing}
                                             autoComplete="off"
                                             className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground h-8"
                                        />
                                   </div>
                                   <p className='text-red py-1'>{error}</p>
                              </div>
                         </div>
                         <p className='m-4'>Total amount for 1 km : ₹{incomeDetails.incomePerKM}</p>
                         <div className="mt-4 mr-4 flex items-center justify-end gap-x-2">
                              <button
                                   onClick={() => {
                                        if (isEditing) {
                                             handleSubmit();
                                        } else {
                                             setIsEditing(true);
                                        }
                                   }}
                                   className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-8 px-2"
                                   type="button"
                              >
                                   {isEditing ? <span>Submit</span> : <span>Edit</span>}
                              </button>

                         </div>
                    </form>
               </div >

          </div >
     )
}

export default IncomeManagement
