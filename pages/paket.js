
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';



const transactions = [
  {
    Flyg: 'SK231',
    Destination: 'MALAGA',
    Från: 'Stockholm',
    Utresa: '20 maj',
    Avgångstid: '06:00',
    Hemresa: '27 maj',
    Antalplatser: '20',
    Bokade: '12',
    SistaAvbokningdatum: '10 mars',
    Pris: ' kr 4200',
  },
  // More transactions...
]

export default function Home() {
  const [flights, setFlights] = useState();

  const fetchDataHandler = async (url, state) => {

    const response = await fetch(url)

    const data = await response.json()

    state(data.data)
  }

  useEffect(() => {

    fetchDataHandler("/api/posts", setFlights)

  }, [])
   console.log(flights)


//api dataflyg

  const [data,setData]=useState();

  const url = 'https://travel-advisor.p.rapidapi.com/airports/search?query=malaga&locale=en_US';
  

  useEffect(()=>{
   
  const options = {
    method: 'GET',
  
    headers: {
      'X-RapidAPI-Key': '8e0745a5admshf51c0217e0542cep134952jsnc4c461e4e424',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };  
  fetch(url, options)
  .then(response=>response.json())
  .then(response=>{
    console.log(response);
    setData(response)
  })
  .catch(err=>{
    console.error(err);
  })
  },[])
 
  return (
    <>
    <Header/>
 

    <div className="px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    
                  >
                    Flyg
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Destination
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                  Från 
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Utresa
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Avgångstid
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Hemresa
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Antal platser
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Bokade
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Sista avbokningsdatum
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                   Pris
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-6 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.Flyg}>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                     
                          {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.resa}>
                                  {/* <h2>{d.name}</h2> */}
                                  <h2>{flight.från}</h2>
                                  {/* {d.description}
                                  {d.country_code} */}
                                </div>
                              )
                              })
                          } 
                    
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                    
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900"> 
                    {/* resa */}
                   
                      {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.resa}>
                                  {/* <h2>{d.name}</h2> */}
                                  <h2>{flight.från}</h2>
                                  {/* {d.description}
                                  {d.country_code} */}
                                </div>
                              )
                              })
                          } 
                    
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.destination}>
                                  <h2>{flight.destination}</h2>
                                </div>
                              )
                              })
                          } 
                    
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                    {/* destination */}
                    {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.destination}>
                                  <h2>{flight.tider}</h2>
                                </div>
                              )
                              })
                          } 
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {transaction.Hemresa}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {/* antalPlatser */}

                      {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.antalPlatser}>
                                  <h2>{flight.antalPlatser}</h2>
                                </div>
                              )
                              })
                          } 
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {/* transaction.Bokade */}
                      {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.bokade}>
                                  <h2>{flight.bokade}</h2>
                                </div>
                              )
                              })
                          } 
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {/* {transaction.SistaAvbokningdatum} */}
                      {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.sistaAvbokningsDatum}>
                                  <h2>{flight.sistaAvbokningsDatum}</h2>
                                </div>
                              )
                              })
                          } 
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {/* {transaction.Pris} */}
                      {
                                flights && flights.map((flight) => {
                                return(
                                <div key={flight.pris}>
                                  <h2>{flight.pris}</h2>
                                </div>
                              )
                              })
                          } 
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
