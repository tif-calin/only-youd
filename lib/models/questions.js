// const baseURL = process.env.NODE_ENV === 'production' ? 'https://only-youd.vercel.app' : 'http://localhost:3000';

// const fetchQuestions = async (url = `${baseURL}/questions.txt`) => {
//   const response = await fetch(url);
//   const text = await response.text();
//   const questions = text.trim().split('\n').map(q => q.trim());
//   // console.log(JSON.stringify(questions, null, 2));
//   return questions;
// };

import clientPromise from '../mongodb';

const MONGODB_DB = process.env.MONGODB_DB || 'db1';

const fetchQuestions = async () => {
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  const collection = db.collection('questions');
  const questions = await collection.find({}).toArray();
  return questions;
};

export default fetchQuestions;
