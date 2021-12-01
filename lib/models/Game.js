import dbPromise from '../mongodb';
const colPromise = dbPromise.then(async db => await db.collection('suggestions'));

class Game {
  id;
  createdBy; // user id
  createdAt; // Date
  updatedAt; // Date

  constructor(_id, createdBy, updatedAt) {
    this.id = _id.toString();
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;
    this.createdAt = _id.getTimestamp();
  }

  static create = async (games) => {
    const collection = await colPromise;

    return await collection.insertMany(games.map(g => ({
      createdBy: g.createdBy,
      updatedAt: new Date()
    })));
  };

  static find = async (query = {}) => {
    const collection = await colPromise;
    const data = await collection.find(query).toArray();

    return data.map(game => new Game(game._id, game.createdBy, game.updatedAt));
  };
}

export default Game;
