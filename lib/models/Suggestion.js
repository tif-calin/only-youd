import dbPromise from '../mongodb';

const colPromise = dbPromise.then(async db => await db.collection('suggestions'));

class Suggestion {
  id;
  userId;
  suggestion;
  createdAt;
  updatedAt;

  constructor({ _id, userId, suggestion }) {
    this.id = _id.toString();
    this.userId = userId.toString();
    this.suggestion = suggestion;
    this.createdAt = _id.getTimestamp();
  }

  static async create(suggestions) {
    const collection = await colPromise;
    return await collection.insertMany(suggestions.map(s => ({
      userId: s.userId,
      suggestion: s.suggestion
    })));
  }

  static async find(query = {}) {
    const collection = await colPromise;
    const data = await collection.find(query).toArray();

    return data.map(suggestion => new Suggestion(suggestion));
  }

  static async update() {
    return null;
  }

  static async delete() {
    return null;
  }
}

export default Suggestion;
