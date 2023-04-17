import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'

export default function ResorDetails() {

  const router = useRouter()
  const Id = router.query.Id

  const [state, setState] = useState({})
  const destinations = [
  
    {
      name: 'Malaga, Spain',
      Id: "Malaga",
      image: 'https://heygolfguide.se/wp-content/uploads/2020/12/la-reserva-Sotogrande-3.jpg',
      imgAlt: 'Collect moments in Spain',
      price: 'sek 1556',
      deal: '7 nights hotel + flight'
  },
  {
      name: 'Real Club Valderama, Costa del Sol',
      Id: "Costa del Sol",
      image: 'https://heygolfguide.se/wp-content/uploads/2020/12/la-reserva-Sotogrande-4-scaled.jpg',
      imgAlt: 'Denna mytomspunna golfbana som står på alla golfares lista över banor som önskas ass spela är nu tillgänglig via Hey Golf Guides unika paket. I grundpaketet spelar du tre av världens bästa banor och ges möjligheten att lägga till ur godispåsen av golfbanor som är placerad på Costa del Sol i närheten av Gibraltar. Sol och underbar golf i en drömlik kombination',
      price: 'sek 16 995',
      deal: '7 nights hotel +  flight'
  },
  {
      name: 'Jack Nicklaus Golf, Alicante',
      Id: "Alicante",
      image: 'https://heygolfguide.se/wp-content/uploads/2020/12/GNK-GOLF-LA-TORRE.jpg',
      imgAlt: 'I Alicante finner du ett antal Jack Nicklaus designer som passar in i det soldränkta och karga landskapet.',
      price: 'sek 1598',
      deal: '7 nights hotel +  flight'
  }
  ]
  console.log(destinations)

  useEffect(() => {
    destinations.forEach((item) => {
      if (item.Id == Id) {
        setState(item)
      }
    })

  }, [Id]);
    
    return (
      
           
         
        <div>
      {/* <h1>details resor {destinations.name}</h1> */}

      {destinations.map((item) => {
        return (
          <>
          {/* <div 
          key={item.name}>{item.name}
          </div> */}
          <div 
          key={item.name}>{item.Id }
          <h1>{item.deal}</h1>
          </div>
     
          </>
        )
      })}
        </div>
       
    )
}