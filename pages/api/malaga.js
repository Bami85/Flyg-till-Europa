
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("flight");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("Malaga").insertOne(bodyObject); // Inserimento di un singolo documento
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const posts = await db.collection("Malaga").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }
}




