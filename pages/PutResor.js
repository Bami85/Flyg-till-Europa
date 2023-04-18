// import React, { useState } from 'react'
// import Link from 'next/link'


// export default function FormComponent({ tests }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   })

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setFormData({ ...formData, [name]: value })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     try {
//       const response = await fetch('/api/test/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         // Gör något efter framgångsrik inlämning
//         console.log('Formulärdata skickad till API:', formData)
//         // Återställ formuläret efter inlämning
//         setFormData({
//           name: '',
//           email: '',
//         })
//       } else {
//         // Hantera fel från API
//         console.error('Något gick fel vid inlämning av formulärdata')
//       }
//     } catch (error) {
//       // Hantera eventuella nätverksfel
//       console.error('Något gick fel vid inlämning av formulärdata', error)
//     }
//   }
//   return (
//     <>
    
//       <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//             Add a new resa in MongoDB{' '}
//           </h2>
//         </div>

//         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//               action="#"
//               method="POST"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Email address
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Name
//                 </label>
//                 <div className="mt-2">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//               <div className="">
//                   <Link href="/"
//                         className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                       >
//                         Home
//                       </Link>
//                       </div>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 {tests &&
//                   tests.map((test) => (
//                     <a
//                       href="https://nextjs.org/docs"
//                       key={test._id}
//                       className={styles.card}
//                     >
//                       <h2>{test.name} &rarr;</h2>
//                       <p>{test.email}</p>
//                     </a>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react'

export default function FormComponent({ tests }) {
  const [formData, setFormData] = useState({
    name: ``,
    flyg: ``,
    departure: ``,
    destination: ``,
    avgångstid: ``,
    hemresa: ``,
    antalPlatser: ``,
    bokade: ``,
    avbokningsDatum: ``,
    price: ``,
    url: ``,
    email: ``, // Add a valid email value
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/test/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Gör något efter framgångsrik inlämning
        console.log('Formulärdata skickad till API:', formData)
        // Återställ formuläret efter inlämning
        setFormData({
          name: ``,
          flyg: ``,
          departure: ``,
          destination: ``,
          avgångstid: ``,
          hemresa: ``,
          antalPlatser: ``,
          bokade: ``,
          avbokningsDatum: ``,
          price: ``,
          url: ``,
          email: ``, // Add a valid email value
        })
      } else {
        // Hantera fel från API
        console.error('Något gick fel vid inlämning av formulärdata')
      }
    } catch (error) {
      // Hantera eventuella nätverksfel
      console.error('Något gick fel vid inlämning av formulärdata', error)
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add a new resa in MongoDB{' '}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="current-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor="flyg"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Flyg
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="flyg"
                      value={formData.flyg}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="departure"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Departure
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="departure"
                      value={formData.departure}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Destination
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="avgångstid"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    avgångstid
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="avgångstid"
                      value={formData.avgångstid}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="hemresa"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    hemresa
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="hemresa"
                      value={formData.hemresa}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="antalPlatser"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    antalPlatser
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="antalPlatser"
                      value={formData.antalPlatser}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="bokade"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    bokade
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="bokade"
                      value={formData.bokade}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="avbokningsDatum"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    avbokningsDatum
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="avbokningsDatum"
                      value={formData.avbokningsDatum}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    price
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    url
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
             
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                {tests &&
                  tests.map((test) => (
                    <a
                      href="https://nextjs.org/docs"
                      key={test._id}
                      className={styles.card}
                    >
                      <h2>{test.name} &rarr;</h2>
                      <p>{test.flyg}</p>
                      <p>{test.departure}</p>
                      <p>{test.destination}</p>
                      <p>{test.avgångstid}</p>
                      <p>{test.hemresa}</p>
                      <p>{test.antalPlatser}</p>
                      <p>{test.bokade}</p>
                      <p>{test.avbokningsDatum}</p>
                      <p>{test.price}</p>
                      <p>{test.url}</p>
                      <p>{test.email}</p>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

