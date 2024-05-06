import React from "react";

const AdminConfirmationModal = ({ onConfirm, onCancel, message }) => {
     return (
          <>
               <div
                    id="popup-modal"
                    tabIndex={-1}
                    className=" bg-gray-950 bg-opacity-60 my-auto fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 max-h-full"
               >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                         <div className="relative bg-[#000000] border border-white rounded shadow">
                              <div className="p-4 md:p-5 text-center">
                                   <svg
                                        className="mx-auto mb-4 text-gray-400 w-12 h-12"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                   >
                                        <path
                                             stroke="white"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth={2}
                                             d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                   </svg>
                                   <h3 className="mb-5 text-gray-800 text-white">{message}</h3>
                                   <button
                                        onClick={onConfirm}
                                        data-modal-hide="popup-modal"
                                        type="button"
                                        className="text-black bg-[#ffffff] hover:bg-[#7cee98] font-medium rounded text-sm inline-flex items-center px-4 py-2 text-center"
                                   >
                                        Yes
                                   </button>
                                   <button
                                        onClick={onCancel}
                                        data-modal-hide="popup-modal"
                                        type="button"
                                        className=" px-4 py-2 ms-3 text-sm font-medium focus:outline-none bg-white rounded border border-[#007562] text-black hover:bg-[#ee7c7c] "
                                   >
                                        cancel
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default AdminConfirmationModal;
