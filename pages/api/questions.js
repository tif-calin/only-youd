import Question from '../../lib/models/Question';

const handler = async (req, res) => {
  // const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const bank = await Question.find({});
        
        res.status(200).json(bank);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error });
      }
      break;
    case 'POST':
      try {
        const questions = req.body;
        const response = await Question.create([questions].flat());
        
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
