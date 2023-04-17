// components/BookingForm.js

import React, { useEffect, useState } from 'react'

const BookingForm = ({ results }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [departure, setDeparture] = useState('')
  const [flag, setFlag] = useState('')
  const [searchResults, setSearchResults] = useState([])
 

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    // Make API request with search parameters
    const API_KEY = '2b29f6a6-8b74-4977-9e9d-c51d51e60cc5'
    const URL = `https://airlabs.co/api/v9/flights?api_key=${API_KEY}&flag=${flag}&destination=${searchQuery}&departure=${departure}`
    const response = await fetch(URL)
    const data = await response.json()

    // Update search results with API response
    setSearchResults(data.response)
  
  }

  return (
    <>
  
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Book Your Flight</h1>
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Departure"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Destination"
          />
           <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="return" className="block mb-1">
              Return
            </label>
            <input
              type="date"
              id="return"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Select return date"
            />
          </div>
        
          <input
            type="text"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            placeholder="Lands flag"
          />
          <button type="submit">Search flight</button>
        </form>
        <ul>
          <ul>
            {searchResults.map((result, i) => {
              return (
                <li key={i}>
                  <a href={result.flight_number} legacyBehavior>
                    {result.reg_number}
                  </a>
                </li>
              )
            })}
          </ul>
        </ul>
      </div>
    </div>
    </>
  )
}

const API_KEY = '2b29f6a6-8b74-4977-9e9d-c51d51e60cc5'
export async function getStaticProps() {
  const URL = `https://airlabs.co/api/v9/flights?api_key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.response)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results: data.response,
    },
  }
}

export default BookingForm


