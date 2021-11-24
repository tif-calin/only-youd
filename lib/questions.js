const baseURL = process.env.NODE_ENV === 'production' ? 'https://only-youd.vercel.app' : 'http://localhost:3000';

const fetchQuestions = async (url = `${baseURL}/questions.txt`) => {
  const response = await fetch(url);
  const text = await response.text();
  const questions = text.trim().split('\n').map(q => q.trim());
  // console.log(JSON.stringify(questions, null, 2));
  return questions;
};

export default fetchQuestions;
