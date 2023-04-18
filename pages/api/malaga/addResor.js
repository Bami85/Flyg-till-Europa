import Valecia from '../../../models/malagaModel';
import connectMongo from '../../../utils/connectMongo';


/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addValencia(req, res) {
  try {
    console.log('CONNECTING TO MONGO Valancia');
    await connectMongo();
    console.log('CONNECTED TO MONGO Valancia');

    console.log('CREATING DOCUMENT Valancia');
    const valencia = await Valecia.create(req.body);
    console.log('CREATED DOCUMENT Valancia');

    res.json({ valencia });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}