import dbPromise from '../mongodb';

const colPromise = dbPromise.then(async db => await db.collection('questions'));

class Question {
  id;
  question;
  createdAt;
  updatedAt;

  constructor({ _id, question, updatedAt }) {
    this.id = _id.toString();
    this.question = question;
    this.updatedAt = new Date(updatedAt);
    this.createdAt = _id.getTimestamp();
  }

  static createMany = async (questions) => {
    const collection = await colPromise;
    
    return await collection.insertMany(questions.map(question => ({
      question,
      updatedAt: new Date()
    })))
  }

  static findMany = async (query = {}) => {
    const collection = await colPromise;
    const data = await collection.find(query).toArray();

    return data.map(question => new Question(question));
  }
}

export default Question;
