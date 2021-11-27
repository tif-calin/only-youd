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
    this.updatedAt = updatedAt;
    this.createdAt = _id.getTimestamp();
  }

  static createMany = async (questions) =>
    await colPromise.then(collection => collection.insertMany(questions.map(question => ({ 
      question, 
      updatedAt: Date.now() 
    }))))
  ;

  static findMany = async (query = {}) => {
    const collection = await colPromise;
    const data = await collection.find(query).toArray();

    return data.map(question => {
      const q = new Question(question);
      console.log(q);
      return q;
    });
  };
};

export default Question;
