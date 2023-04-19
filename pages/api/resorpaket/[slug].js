
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  console.log("HAlåå?")
  const client = await clientPromise;
  const db = client.db("test")
  switch (req.method) {
    case "POST":
     let bodyObject = JSON.parse(req.body);
      let newPost = await db.collection("valecias").insertOne(bodyObject); // Inserimento di un singolo documento
      res.json(newPost.ops[0]);
      //res.json("HEEJ");
      break;
    case "GET":
      console.log(req.query.slug)
      const str2 = req.query.slug.charAt(0).toUpperCase()+ req.query.slug.slice(1);
      const posts = await db.collection("valecias").find({ name: { "$eq": str2 }}).toArray();
      res.json({ status: 200, data: posts });
     // res.json({ status: 200, data: [hej: "Yaaay"] });
      break;
  }
}

