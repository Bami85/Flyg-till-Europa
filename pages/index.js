import Link from 'next/link'
import { useEffect, useState } from 'react'
import FormBoknig from '../components/FormBoknig'
import Header from '../components/Header'
import Erbjudande from "./../components/Erbjudande"




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
    <Header/>  
     <FormBoknig/>
     <Erbjudande/>


 
   

      
    </>
  )
}
