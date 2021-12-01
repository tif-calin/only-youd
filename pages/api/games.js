import Game from '../../lib/models/Game';

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const games = req.body;
        const response = await Game.create([games].flat());
        
        res.status(201).json(response);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      break;
    default:
      res.status(501);
  }
};

export default handler;
