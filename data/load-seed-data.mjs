import dbPromise from '../lib/mongodb.js';
import questions from './questions.js';

const db = await dbPromise;

const seedData = async () => {
  const collection = db.collection('questions');
  console.log('Seeding data...');
  return await collection.create(questions);
};

const seedUserData = async () => {
  const collection = db.collection('users');

  return await collection.create([
    
  ]);
};

seedData();

export default seedData;
