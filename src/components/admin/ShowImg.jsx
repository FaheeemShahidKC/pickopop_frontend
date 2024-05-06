import React from 'react'

function ShowImg({ img, onCancel }) {
     return (
               <div
                    id="popup-modal"
                    tabIndex={-1}
                    className="bg-gray-950 bg-opacity-60 my-auto fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 max-h-full">
                    <img className='h-144' src={img} alt="" />
                    <button
                         onClick={onCancel}
                         type="button"
                         className="absolute top-10 end-40 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                         data-modal-hide="popup-modal"
                    >
                         <svg
                              className="w-3 h-3 "
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                         >
                              <path
                                   stroke="white"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={3}
                                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                         </svg>
                         <span className="sr-only">Close modal</span>
                    </button>
               </div>
     )
}

export default ShowImg
