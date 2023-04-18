import Link from 'next/link'
import { useEffect, useState } from 'react'
import FormBoknig from '../components/FormBoknig'
import Header from '../components/Header'
import PricingPage from '../components/PricingPages'

export default function Example() {
  const [flights, setFlights] = useState()

  const fetchDataHandler = async (url, state) => {
    const response = await fetch(url)

    const data = await response.json()

    state(data.data)
  }

  useEffect(() => {
    fetchDataHandler('/api/valencias', setFlights)
  }, [])

  console.log(flights)

  return (
    <>
      <Header />
      <FormBoknig />
      <PricingPage />

      {/* {flights &&
              flights.map((flights) => {
                return (
                  <div key={flights.name}>
                    <h2>{flights.imgAlt}</h2>
                    {flights.deal}
                    <h2>{flights.price}</h2>
                  </div>
                )
              })} */}
    </>
  )
}
