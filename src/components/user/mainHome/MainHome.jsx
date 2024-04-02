import React from 'react'
import './MainHome.css'
import Login from '../login/Login'
import SecondHome from '../secondHome/SecondHome'

function MainHome() {
     return (
          <div className=' '>
               <div className='relative'>
                    {/* <Login></Login> */}
                    <div className="max-sm:">
                         <div className="custom-shape-divider-bottom-1711958709 bg-pp-dark">
                              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                   <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" />
                              </svg>
                         </div>
                    </div>
                    <div className=''>
                         <div className="absolute max-md:px-10 max-xl:px-40 max-lg:px-28 top-0 left-0 z-10 px-52 max-sm:py-4 py-14 flex">
                              <img src="../src/assets/scooter.png" className="max-lg:h-80 max-md:h-60 max-sm:h-28" alt="" />
                              <div>
                                   <p className='max-lg:text-4xl max-sm:text-2xl text-6xl font-semibold font-serif '>Drop your <br />needs with <br /> <span className='text-white'>PICK 'O' POP !</span> </p>
                              </div>
                         </div>
                    </div>

               </div>

          </div>
     )
}

export default MainHome
