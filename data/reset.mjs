import dbPromise from '../lib/mongodb.js';

const db = await dbPromise;

// 1. drop/empty all existing collections
(await db.listCollections().toArray()).forEach(async coll => {
  db.dropCollection(coll.name);
  // db.collection(coll.name).deleteMany({});
  console.log(`Dropped collection: ${coll.name}`);
});

// 2. create collections and their schemas
db.createCollection('questions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['question', 'updatedAt'],
      properties: {
        question: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        updatedAt: {
          bsonType: 'date',
          description: 'must be a date and is not required'
        }
      }
    }
  }
});
console.log('Created collection: questions');

db.createCollection('users');
console.log('Created collection: users');

// 3. insert seed data
// actually nvm, we'll leave this optional
