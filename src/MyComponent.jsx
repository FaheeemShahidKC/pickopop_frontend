import React, { useState } from 'react';

const MyComponent = () => {
     const [origin, setOrigin] = useState('');
     const [destination, setDestination] = useState('');
     const [distance, setDistance] = useState(null);

     const handleChangeOrigin = (event) => {
          setOrigin(event.target.value);
     }

     const handleChangeDestination = (event) => {
          setDestination(event.target.value);
     };

     const handleSubmit = async (event) => {
          event.preventDefault();

          try {
               const api = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=gtjpeZs6qV7pJJRFqHN80cUqgfY1XmMd1CVw3NW1Aa44oxaXLFMEvAwTYJLLNkvI`;

               const response = await fetch(api);

               if (!response.ok) {
                    throw new Error('Network response was not ok');
               }

               const data = await response.json();
               // Extract and set distance data here
               setDistance(data);
          } catch (error) {
               console.error(error);
          }
     };

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <label htmlFor="origin">Origin:</label>
                    <input
                         type="text"
                         id="origin"
                         value={origin}
                         onChange={handleChangeOrigin}
                         placeholder="Enter origin location"
                    />
                    <label htmlFor="destination">Destination:</label>
                    <input
                         type="text"
                         id="destination"
                         value={destination}
                         onChange={handleChangeDestination}
                         placeholder="Enter destination location"
                    />
                    <button type="submit">Get Distance</button>
               </form>

               {/* Display distance data if available */}
               {distance && (
                    <div>
                         Distance: {distance.rows[0].elements[0].distance.text}
                    </div>
               )}
          </div>
     );
};

export default MyComponent;
