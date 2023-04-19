import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

export default function handler(req, res) {
  const { slug } = req.query;
  const filePath = path.join(process.cwd(), 'public', 'images', `${slug}.jpg`);
  const fileContents = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/jpeg');
  res.send(fileContents);
}
