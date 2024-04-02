import React from 'react'

function Header() {
     return (
          <div className='z-10 '>
               <div className='h-20 bg-pp-dark flex items-center justify-between px-10 max-sm:px-3'>
                    <h1 className='text-white font-extrabold font-mono max-sm:text-2xl text-4xl'>Pick'O'Pop</h1>
                    <div className='flex '>
                         <button className='hover:bg-pp-dark h-7 p-3 max-sm:mx-1 mx-2 bg-pp-gray-3 bg-opacity-70 rounded-md  flex items-center font-semibold max-sm:text-xs'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                              </svg>
                              <span className='max-sm:hidden block'> Home</span>
                         </button>
                         <button className='hover:bg-pp-dark h-7 p-3 bg-pp-gray-3 max-sm:mx-1 mx-2 opacity-70 rounded-md flex items-center font-semibold max-sm:text-xs '>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                              </svg>
                              <span className='max-sm:hidden block'> I'm in</span>
                         </button>
                         <button className='hover:bg-pp-dark h-7 p-3 bg-pp-gray-3 max-sm:mx-1 mx-2 opacity-70 rounded-md flex items-center font-semibold max-sm:text-xs '>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 max-sm:block hidden">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                              </svg>
                              <span className='max-sm:hidden block'> Register</span>
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default Header