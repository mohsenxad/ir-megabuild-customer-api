const buildGetAllFloorByBlockId = require('../src/get-all-floor-by-block-id');

describe('buildGetAllFloorByBlockId', () => {
  const getDb = jest.fn();
  const createOptions = jest.fn();
  const translateResponse = jest.fn();
  
  it('should throw an error if getDb is not provided', () => {
    expect(() => buildGetAllFloorByBlockId({ createOptions, translateResponse })).toThrowError('buildGetAllFloorByBlockId must have getDb.');
  });

  it('should throw an error if createOptions is not provided', () => {
    expect(() => buildGetAllFloorByBlockId({ getDb, translateResponse })).toThrowError('buildGetAllFloorByBlockId must have createOptions.');
  });

  it('should throw an error if translateResponse is not provided', () => {
    expect(() => buildGetAllFloorByBlockId({ getDb, createOptions })).toThrowError('buildGetAllFloorByBlockId must have translateResponse.');
  });

  it('should return a function', () => {
    const getAllFloorByBlockId = buildGetAllFloorByBlockId({ getDb, createOptions, translateResponse });
    expect(typeof getAllFloorByBlockId).toBe('function');
  });

  it('should throw an error if blockId is not provided', async () => {
    const getAllFloorByBlockId = buildGetAllFloorByBlockId({ getDb, createOptions, translateResponse });
    await expect(getAllFloorByBlockId({})).rejects.toThrowError('getAllFloorByBlockId must have blockId.');
  });

//   it('should call getDb and collection.find with correct arguments', async () => {
//     const db = {
//       collection: jest.fn().mockReturnThis(),
//     };
//     const collection = {
//       find: jest.fn().mockReturnValue('response'),
//     };
//     getDb.mockResolvedValue(db);
//     createOptions.mockReturnValue({ filter: { blockId: '123' } });
//     translateResponse.mockReturnValue('result');
//     const getAllFloorByBlockId = buildGetAllFloorByBlockId({ getDb, createOptions, translateResponse });
//     const result = await getAllFloorByBlockId({ blockId: '123' });
//     expect(getDb).toHaveBeenCalled();
//     expect(db.collection).toHaveBeenCalledWith('floors');
//     expect(collection.find).toHaveBeenCalledWith({ blockId: '123' });
//     expect(translateResponse).toHaveBeenCalledWith({ response: 'response' });
//     expect(result).toBe('result');
//   });
});