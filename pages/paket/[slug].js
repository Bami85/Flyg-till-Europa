import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    name: 'EL PARAISO ',
    description:
      'EL PARAISO GOLF CLUB är en av de mest etablerade golfbanorna på Costa del Sol i södra Spanien, med en historia som sträcker sig tillbaka till 1970-talet. Banan, som ligger i hjärtat av det exklusiva området El Paraiso, är omgiven av vackra trädgårdar och har fantastiska utsikter över bergen och havet.',
    imageSrc:
      'https://heygolfguide.se/wp-content/uploads/2023/04/EL-PARAISO-MALAGA%E2%80%8B.jpeg',
    imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
  },
  {
    name: 'VALDERRAMA',
    description:
      'VALDERRAMA GOLF CLUB – MALAGA är en av de mest prestigefyllda golfbanorna i världen och är belägen i Sotogrande, en exklusiv destination på Costa del Sol i södra Spanien. Banan är känd för att vara en av de mest utmanande i Europa, och har varit värd för flera internationella golfmästerskap, inklusive Ryder Cup och Volvo Masters.',
    imageSrc: 'https://www.yorbalindaclub.com/Images/Library/about-album-4.jpg',
    imageAlt: 'Green cardstock box open with 50 cards inside.',
  },
  {
    name: 'Almenara',
    description:
      'ALMENARA GOLF RESORT – MALAGA beläget i San Roque, nära Sotogrande i Malaga, är en av de mest kända golfanläggningarna i södra Spanien. Banan är designad av den välrenommerade banarkitekten Dave Thomas och erbjuder en utmanande golfupplevelse för spelare av alla nivåer.',
    imageSrc:
      'https://heygolfguide.se/wp-content/uploads/2023/04/ALMENARA-MALAGA%E2%80%8B-1.jpeg',
    imageAlt:
      'Detail of white today card, beige next card, and brown someday card with dot grid.',
  },
]

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Example() {
  const [flights, setFlights] = useState([])
  const [searchPaket, setSearchPaket] = useState('')
  const router = useRouter()
  const { slug } = router.query
  console.log(slug) // Add this line to check if slug is defined

  //const imagePath = `/images/${slug}.jpeg` // Create the image path using the slug
  //console.log(imagePath) // Check if the image path is correct

  const imagePath = '/images/malaga.jpeg'
  ;<img src={imagePath} alt="Malaga" />

  console.log('kommer jag hit?')
  console.log(slug)

  const fetchDataHandler = async (url) => {
    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
    setFlights(data.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchPaket) {
      fetchDataHandler(`/api/resorpaket/${searchPaket}`)
      setSearchPaket('')
    }
  }

  // useEffect(() => {
  //   console.log('kommer jag in här?')
  //   if (slug) {
  //     //console.log(`/api/resorpaket/${slug}`)
  //     fetchDataHandler(`/api/resorpaket/${slug}`)
  //   }
  // }, [slug])

  console.log(flights)
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end"> </div>

            <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
              <div className="px-6 py-6 md:px-8 md:py-0">
                <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                  Hitta din nästa{' '}
                  <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                    Golf
                  </span>{' '}
                  resa till Spanien
                </h2>
                <form onSubmit={handleSubmit}>
                  <button className="mt-4 text-red-500" type="submit">
                    Search
                  </button>
                  <input
                    type="text"
                    id="search"
                    value={searchPaket}
                    onChange={(e) => setSearchPaket(e.target.value)}
                  />
                </form>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400"></p>
              </div>
            </div>

            <p className="mt-4 text-gray-500">
              <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                EL PARAISO GOLF CLUB
              </span>{' '}
              är en av de mest etablerade golfbanorna på Costa del Sol i södra
              Spanien, med en historia som sträcker sig tillbaka till
              1970-talet. Banan, som ligger i hjärtat av det exklusiva området
              El Paraiso, är omgiven av vackra trädgårdar och har fantastiska
              utsikter över bergen och havet. Designad av den legendariske
              golfarkitekten Gary Player, är El Paraiso Golf Club en 18-håls
              parkbana med breda fairways, snabba greener och en mängd utmanande
              bunkrar och vattenhinder. Banan är väl underhållen och har nyligen
              genomgått en omfattande renovering för att förbättra spelprestanda
              och golfupplevelsen.
            </p>
          </div>

          <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col-reverse">
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}

            {flights &&
              flights.map((flights) => {
                return (
                  <div key={flights.name} className="flex flex-col-reverse">
                    {flights.deal}
                    <h2 className="text-sm font-medium text-gray-900">
                      <button>Booka Resa </button>
                      <br />
                      {flights.imgAlt}
                    </h2>
                    {/* <img
                      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
                      src={`/api/image/${slug}`}
                      alt="Image"
                      className="object-cover object-center"
                      width={500}
                      height={500}
                    /> */}
                    <img src={imagePath} alt={`Image of ${slug}`} />
                  </div>
                )
              })}
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                Home
                <HiOutlineChevronDoubleUp className="#db2777" size={50} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

