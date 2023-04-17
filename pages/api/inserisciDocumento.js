// pages/api/inserisciDocumento.js

// import { MongoClient } from "mongodb";
// import { NextApiRequest, NextApiResponse } from "next";
// import { MONGO_URI, MONGODB_DB } from '../../lib/mongodb'
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     // Verifica che la richiesta sia di tipo POST
//     return res.status(400).json({ message: "Richiesta non valida." });
//   }

//   const { field1, field2 } = req.body; // Estrai i dati dal corpo della richiesta

//   try {
//     // Connettiti al tuo database MongoDB
//     const client = await MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = client.db(MONGODB_DB);

//     // Inserisci il documento nel tuo collection
//     const result = await db.collection("Malaga").insertOne({ field1, field2 });
//     client.close();

//     // Gestisci la risposta positiva
//     return res.status(201).json({ message: "Documento inserito con successo nel database MongoDB.", data: result.ops[0] });
//   } catch (error) {
//     console.error("Errore durante l'inserimento del documento nel database MongoDB:", error);
//     return res.status(500).json({ message: "Errore durante l'inserimento del documento nel database MongoDB." });
//   }
// }


// pages/api/inserisciDocumento.js




import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { MONGO_URI, MONGODB_DB } from '../../lib/mongodb'
export default async function handler(req, res) {
  if (req.method !== "POST") {
    // Verifica che la richiesta sia di tipo POST
    return res.status(400).json({ message: "Richiesta non valida." });
  }

  const { name, imgAlt, price } = req.body; // Estrai i dati dal corpo della richiesta

  try {
    // Connettiti al tuo database MongoDB
    const client = await MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(MONGODB_DB);

    // Inserisci il documento nel tuo collection
    const result = await db.collection("Malaga").insertOne({ name, imgAlt, price});
    client.close();

    // Gestisci la risposta positiva
    return res.status(201).json({ message: "Documento inserito con successo nel database MongoDB.", data: result.ops[0] });
  } catch (error) {
    console.error("Errore durante l'inserimento del documento nel database MongoDB:", error);
    return res.status(500).json({ message: "Errore durante l'inserimento del documento nel database MongoDB." });
  }
}
