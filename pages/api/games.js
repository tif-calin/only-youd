import Game from '../../lib/models/Game';

const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      const games = req.body;
      const response = await post(games);
      res.status(response.error ? 500 : 201).json(response);
      break;
    default:
      res.status(501);
  }
};

const post = async games => {
  try {
    return await Game.create([games].flat());
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default handler;
export { post };
