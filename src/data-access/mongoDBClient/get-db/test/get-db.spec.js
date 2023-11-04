const buildGetDb = require('../src/get-db');

describe('buildGetDb', () => {
  const MongoClient = jest.fn();
  const MONGODB_USERNAME = 'testUser';
  const MONGODB_PASSWORD = 'testPassword';
  const DATABASE_NAME = 'testDB';

  it('should throw an error if MongoClient is not provided', () => {
    expect(() => buildGetDb({ MONGODB_USERNAME, MONGODB_PASSWORD, DATABASE_NAME })).toThrowError('buildGetDb must have MongoClient.');
  });

  it('should throw an error if MONGODB_USERNAME is not provided', () => {
    expect(() => buildGetDb({ MongoClient, MONGODB_PASSWORD, DATABASE_NAME })).toThrowError('buildGetDb must have MONGODB_USERNAME.');
  });

  it('should throw an error if MONGODB_PASSWORD is not provided', () => {
    expect(() => buildGetDb({ MongoClient, MONGODB_USERNAME, DATABASE_NAME })).toThrowError('buildGetDb must have MONGODB_PASSWORD.');
  });

  it('should throw an error if DATABASE_NAME is not provided', () => {
    expect(() => buildGetDb({ MongoClient, MONGODB_USERNAME, MONGODB_PASSWORD })).toThrowError('buildGetDb must have DATABASE_NAME.');
  });

  // it('should return the database connection', async () => {
  //   const client = {
  //     db: jest.fn().mockReturnThis(),
  //   };
  //   const db = {
  //     collection: jest.fn(),
  //   };
  //   MongoClient.connect.mockResolvedValue(client);
  //   const getDb = buildGetDb({ MongoClient, MONGODB_USERNAME, MONGODB_PASSWORD, DATABASE_NAME });
  //   const result = await getDb();
  //   expect(MongoClient.connect).toHaveBeenCalledWith(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.pe1pxdg.mongodb.net/${DATABASE_NAME}`);
  //   expect(client.db).toHaveBeenCalledWith(DATABASE_NAME);
  //   expect(result).toBe(db);
  // });

//   it('should return the existing database connection if available', async () => {
//     const getDb = buildGetDb({ MongoClient, MONGODB_USERNAME, MONGODB_PASSWORD, DATABASE_NAME });
//     const result = await getDb();
//     expect(MongoClient.connect).not.toHaveBeenCalled();
//     expect(result).toBe(db);
//   });
});