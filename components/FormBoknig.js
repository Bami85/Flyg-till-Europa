import React, { useEffect, useState } from 'react'

const FlightSearchForm = ({ results }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [departure, setDeparture] = useState('')
  const [arrival, setArrival] = useState('')
  const [flag, setFlag] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleFormSubmit = async (event) => {
    event.preventDefault()
  
    // Gör API-anrop med sökparametrar och sätt limit till 10
    const API_KEY = '2b29f6a6-8b74-4977-9e9d-c51d51e60cc5'
    const limit = 10 // Sätt limit till 10
    const URL = `https://airlabs.co/api/v9/flights?api_key=${API_KEY}&flag=${flag}&departure=${departure}&destination=${searchQuery}&arrival=${arrival}&limit=${limit}`; // Lägg till limit i URL:en
    const response = await fetch(URL)
    const data = await response.json()
  
    // Uppdatera sökresultat med API-svar
    setSearchResults(data.response)
  }
  

  return (
    <>
    
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.aftonbladet-cdn.se/v2/images/17c6d66d-2b02-4599-bd44-43536748f657?fit=crop&format=auto&h=900&q=50&tight=true&w=1200&s=e13af89b37a8fa0fc724f70a6a632dccb015aa73')",
        }}
       
      >
         <ul className="divide-y divide-gray-200 bg-white ">
                {searchResults.map((result, i) => (
                  <tr key={i}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      <h1>Flight_number </h1>
                      {result.flight_number} 
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">  <h1>Reg_number </h1>
                    {result.reg_number}</td>

                  </tr>
                ))}
              </ul>
        

        <form
          onSubmit={handleFormSubmit}
          className="bg-center outline-black outline-2 outline-dotted outline-offset-2"
        >
          <h1 className="">Book Your Flight</h1>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="return" className="block mb-1">
              Från
            </label>
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              placeholder="Departure"
            />
          </div>
          <div className="w- 48:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="return" className="block mb-1">
              Till
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Destination"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="return" className="block mb-1">
              Utresa
            </label>
            <input type="date" id="return" placeholder="Select return date" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <label htmlFor="return" className="block mb-1">
              HEMRESA
            </label>
            <input type="date" id="return" placeholder="Select return date" />
          </div>
              Lands Flag
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <input
              type="text"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              placeholder="Lands flag"
            />
          </div>
          <button className="" type="submit">
            Sök
          </button>
        </form>
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

export default FlightSearchForm
