import React, { useState } from 'react';

function  FileUpload() {
     const [previewSrc, setPreviewSrc] = useState("../src/assets/profile.png");

     const handleFileChange = (event) => {
          const file = event.target.files[0];
          if (file) {
               setPreviewSrc(URL.createObjectURL(file));
          }
     };

     return (
          <form>
               <div className="flex items-center space-x-6">
                    <div className="shrink-0">
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
          </form>
     );
}

export default FileUpload;
