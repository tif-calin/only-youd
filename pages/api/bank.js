import fetchQuestions from '../../lib/questions';

const handler = (req, res) => {
  // const { id } = req.query;

  switch (req.method) {
    case 'GET':
      fetchQuestions()
        .then(bank => res.status(200).json(bank))
      ;
      break;
    case 'POST':
    default:
      res.status(501);
  }
};

export default handler;
