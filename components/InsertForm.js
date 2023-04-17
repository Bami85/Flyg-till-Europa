// // components/InsertForm.js

// import React, { useState } from "react";

// const InsertForm = () => {
//   const [field1, setField1] = useState("");
//   const [field2, setField2] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Effettua una chiamata API POST per inserire il documento nel database MongoDB
//     try {
//       const response = await fetch("/api/malaga", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ field1, field2 }), // Passa i dati del form come corpo della richiesta in formato JSON
//       });

//       if (response.ok) {
//         // Gestisci la risposta positiva
//         console.log("Documento inserito con successo nel database MongoDB.");
//         // Effettua eventuali altre azioni dopo l'inserimento del documento
//       } else {
//         // Gestisci la risposta negativa
//         console.error("Errore durante l'inserimento del documento nel database MongoDB.");
//         // Effettua eventuali azioni in caso di errore
//       }
//     } catch (error) {
//       console.error("Errore durante la chiamata API:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="field1">Field 1:</label>
//       <input
//         type="text"
//         id="field1"
//         value={field1}
//         onChange={(event) => setField1(event.target.value)}
//       />
//       <label htmlFor="field2">Field 2:</label>
//       <input
//         type="text"
//         id="field2"
//         value={field2}
//         onChange={(event) => setField2(event.target.value)}
//       />
//       <button type="submit">Invia</button>
//     </form>
//   );
// };

// export default InsertForm;


// components/InsertForm.js

import React, { useState } from "react";

const InsertForm = () => {
  const [name, setName] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Effettua una chiamata API POST per inserire il documento nel database MongoDB
    try {
      const response = await fetch("/api/malaga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, imgAlt, price }), // Passa i dati del form come corpo della richiesta in formato JSON
      });

      if (response.ok) {
        // Gestisci la risposta positiva
        console.log("Documento inserito con successo nel database MongoDB.");
        // Effettua eventuali altre azioni dopo l'inserimento del documento
      } else {
        // Gestisci la risposta negativa
        console.error("Errore durante l'inserimento del documento nel database MongoDB.");
        // Effettua eventuali azioni in caso di errore
      }
    } catch (error) {
      console.error("Errore durante la chiamata API:", error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="deal">imgAlt</label>
      <input
        type="text"
        id="imgAlt"
        value={imgAlt}
        onChange={(event) => setImgAlt(event.target.value)}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit">Invia</button>
    </form>
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
           Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
           Surname
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Surname"
            name="surname"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="email"
            name="email"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Destination
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Inserisci la destinazione del viaggio"
            name="destination"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Departure
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="departure"
            name="departure"
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
        type="submit"
      >
        Booka now
    </button>
    </form>

</>
  );
};

export default InsertForm;
