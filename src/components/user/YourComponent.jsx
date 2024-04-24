import React, { useState } from 'react';

const YourComponent = () => {
     const [inputValue, setInputValue] = useState('');
     const [suggestions, setSuggestions] = useState([]);

     const handleChangeDestination = async (event) => {
          const value = event.target.value;
          setInputValue(value);
          console.log(inputValue);
          await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=d6a365a1c9f74a1dbb5a5fa4cabca404`)
               .then(response => response.json())
               .then(response => {
                    console.log(response, 'response');
                    const obj = response
                    const arr = obj.results
                    setSuggestions(arr)
                    console.log(arr, 'arr');
               })
               .catch(error => {
                    console.error('Error fetching autocomplete suggestions:', error);
               });
     };
     console.log(suggestions, 'oo');

     return (
          <div className="w-full lg:w-6/12 px-4">
               <div className="relative w-full mb-3">
                    <label className="block text-blueGray-600 text-xs mb-2" htmlFor="destination">
                         Address
                    </label>
                    <input
                         id="destination"
                         type="text"
                         value={inputValue}
                         onChange={handleChangeDestination}
                         className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white text-black rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    {suggestions && suggestions.length > 0 && (
                         <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg">
                              {suggestions.map((suggestion, index) => (
                                   <li
                                        key={index}
                                        className="py-1 px-3 cursor-pointer hover:bg-gray-100"
                                        onClick={() => {
                                             // Handle selection of suggestion
                                             console.log('Selected suggestion:', suggestion);
                                             setInputValue(suggestion.formatted);
                                             setSuggestions([]);
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
     );
};

export default YourComponent;
