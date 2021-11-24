const { URL } = process.env;

const urlBase = URL || 'http://localhost:3000';

const fetchQuestions = async (url = `${urlBase}/questions.txt`) => {
  const response = await fetch(url);
  const text = await response.text();
  const questions = text.trim().split('\n').map(q => q.trim());
  console.log(questions);
  return questions;
};

export {
  fetchQuestions,
};
