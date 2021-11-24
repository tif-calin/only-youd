import fetchQuestions from '../../lib/questions';
import questions from '../../data/questions';

const handler = async (req, res) => {
  // const { id } = req.query;

  switch (req.method) {
    case 'GET':
      if (process.env.NODE_DEV === 'development') {
        const bank = await fetchQuestions();
        res.status(200).json(bank);
      } else res.status(200).json(questions);
      break;
    case 'POST':
    default:
      res.status(501);
  }
};

export default handler;
