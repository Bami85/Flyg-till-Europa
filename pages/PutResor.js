import React, { useState } from 'react'
import Link from 'next/link'


export default function FormComponent({ tests }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
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
          name: '',
          email: '',
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
                  Email address
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
                  htmlFor="password"
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
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
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
              <div className="">
                  <Link href="/"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Home
                      </Link>
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
