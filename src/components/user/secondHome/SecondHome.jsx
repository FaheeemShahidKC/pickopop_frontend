import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faChartLine, faComments, faSignOutAlt, faMapLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons'

function SecondHome() {
     return (
          <div class="bg-white py-6 flex flex-col lg:flex-row justify-center items-center">
               <button class="w-60 h-20 m-4 px-3 hover:bg-pp-dark-1 md:w-144 md:h-40 md:text-[33px] md:px-8 md:my-10 lg:w-[650px] lg:h-36 lg:text-[38px] lg:px-12 lg:my-16  rounded-xl bg-pp-dark flex flex-row justify-evenly items-center">
                    <div>
                         <h3 className='font-semibold  text-white font-serif px-2 lg:px-6'>Truthful delivery all over Kerala </h3>
                    </div>
                    <div>
                         <FontAwesomeIcon icon={faTruck} className=' h-8 md:h-16 lg:h-16 text-black' />
                    </div>
               </button>
               <button class="w-60 h-20 m-4 px-3 hover:bg-pp-dark-1 md:w-144 md:h-40 md:text-[33px] md:px-8 md:my-10 lg:w-[650px] lg:h-36 lg:text-[38px] lg:px-12 lg:my-16 rounded-xl bg-pp-dark flex flex-row justify-evenly items-center">
                    <div>
                         <h3 className='font-semibold text-white font-serif px-2 lg:px-6'>Truthful delivery all over Kerala </h3>
                    </div>
                    <div>
                         <FontAwesomeIcon icon={faMapLocationDot} className='h-8 md:h-16 lg:h-16 text-black' />
                    </div>
               </button>
          </div>
     )
}

export default SecondHome
