import fetchQuestions from '../../lib/questions';
import questions from '../../data/questions';

const handler = (req, res) => {
  // const { id } = req.query;

  switch (req.method) {
    case 'GET':
      if (process.env.NODE_DEV === 'development') {
        fetchQuestions().then(bank => res.status(200).json(bank)); 
      } else res.status(200).json(questions);
      break;
    case 'POST':
    default:
      res.status(501);
  }
};

export default handler;
