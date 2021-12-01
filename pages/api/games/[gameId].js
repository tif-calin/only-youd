import Game from '../../../lib/models/Game';

const handler = async (req, res) => {
  const { gameId } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        await Game.find({ _id: Number(gameId) });
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
