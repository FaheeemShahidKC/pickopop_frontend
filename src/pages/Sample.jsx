import React, { useState } from 'react';

function Sample({cargo,setCargo}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  const options = ['Two wheeler', 'Four wheeler', 'goods'];

  const handleToggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setCargo(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 font-semibold flex items-center justify-between w-full focus:outline-none focus:border-blue-500"
        onClick={handleToggleDropdown}
      >
        {cargo || 'Select an option'}
        <svg
          className={`w-5 h-5 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sample;
