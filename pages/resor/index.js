import Link from 'next/link'
import { useEffect, useState } from 'react'

const posts = []

export default function Example() {
  const [flights, setFlights] = useState()

  const fetchDataHandler = async (url, state) => {
    const response = await fetch(url)

    const data = await response.json()

    state(data.data)
  }

  useEffect(() => {
    fetchDataHandler('/api/malaga', setFlights)
  }, [])

  console.log(flights)

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hej från Malaga
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Allt data kommer från mongodb
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {flights &&
              flights.map((flights) => {
                return (
                  <div key={flights.name}>
                    <h2>{flights.name}</h2>
                    {flights.deal}
                    <h2>{flights.imgAlt}</h2>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
