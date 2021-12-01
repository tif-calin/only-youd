import Question from '../../lib/models/Question';

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      const resp = await get();
      res.status(resp.error ? 500 : 200).json(resp);
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

const get = async () => {
  try {
    return await Question.find({});
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default handler;
export { get };
