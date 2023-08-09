import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('http://127.0.0.1:1337/api/contacts', req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'envoi du message' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
