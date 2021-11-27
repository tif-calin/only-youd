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

  static create = async (questions) => {
    const collection = await colPromise;
    
    return await collection.insertMany(questions.map(question => ({
      question,
      updatedAt: new Date()
    })))
  }

  static find = async (query = {}) => {
    const collection = await colPromise;
    const data = await collection.find(query).toArray();

    return data.map(question => new Question(question));
  }

  static update = async () => {
    return null;
  }

  static delete = async () => {
    return null;
  }
}

export default Question;
