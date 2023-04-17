
// import clientPromise from "../../lib/mongodb";

// export default async function handler(req, res) {
//   const client = await clientPromise;
//   const db = client.db("flight");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let newPost = await db.collection("Malaga").insertOne(bodyObject); // Inserimento di un singolo documento
//       res.json(newPost.ops[0]);
//       break;
//     case "GET":
//       const posts = await db.collection("Malaga").find({}).toArray();
//       res.json({ status: 200, data: posts });
//       break;
//   }
// }


import { MongoClient } from "mongodb";

// Configurazione della connessione al database
const CONNECTION_URL = process.env.MONGO_URI; // Utilizza il valore di MONGO_URI dall'ambiente
const DATABASE_NAME = process.env.MONGODB_DB; // Utilizza il valore di MONGODB_DB dall'ambiente
const COLLECTION_NAME = "Malaga"; // Nome della collezione

export default async function handler(req, res) {
  try {
    // Connessione al database
    const client = await MongoClient.connect(CONNECTION_URL);
    const db = client.db(DATABASE_NAME);

    // Dati del documento da inserire
    const documentToInsert = {
      field1: "value1",
      field2: "value2",
      // Aggiungi altri campi e valori del documento come necessario
    };

    // Inserimento del documento nella collezione
    const result = await db.collection(COLLECTION_NAME).insertOne(documentToInsert);
    const insertedDocument = result.ops[0];

    // Chiusura della connessione al database
    client.close();

    // Invio della risposta HTTP
    res.json({ status: 200, data: insertedDocument });
  } catch (error) {
    // Gestione degli errori
    console.error("Errore durante l'inserimento del documento:", error);
    res.status(500).json({ status: 500, message: "Errore durante l'inserimento del documento" });
  }
}
