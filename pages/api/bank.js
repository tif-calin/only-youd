import Question from '../../lib/models/Question';
import questions from '../../data/questions';

const handler = async (req, res) => {
  // const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const bank = await Question.findMany();
        res.status(200).json(bank);
      } catch (error) {
        console.error(error);
        res.status(200).json(questions);
      }
      break;
    case 'POST':
    default:
      res.status(501);
  }
};

export default handler;
