import questions from '../data/questions';

const fetchQuestions = async (url = 'http://localhost:3000/questions.txt') => {
  const response = await fetch(url);
  const text = await response.text();
  const questions = text.trim().split('\n').map(q => q.trim());
  console.log(JSON.stringify(questions, null, 2));
  return questions;
};

const fetchQuestionsProd = async () => questions;

export default process.env.NODE_ENV === 'production' ? fetchQuestionsProd : fetchQuestions;
