import dbPromise from '../lib/mongodb.js';
import questions from './questions.js';

const db = await dbPromise;

const seedData = async () => {
  const collection = db.collection('questions');
  console.log('Seeding data...');
  const response = await collection.insertMany(questions.map(question => ({ 
    question,
    updatedAt: new Date()
  })));

  return response;
};

seedData();

export default seedData;
