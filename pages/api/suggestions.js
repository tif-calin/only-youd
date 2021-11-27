import Suggestion from '../../lib/models/Suggestion';

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        const { query } = req;
        const suggestions = await Suggestion.find(query || {});
        res.status(200).json(suggestions);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      break;
    case 'POST':
      try {
        const { body } = req;
        const suggestion = await Suggestion.create(body);
        res.status(201).json(suggestion);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      break;
    default:
      re.status(501);
  }
};

export default handler;
