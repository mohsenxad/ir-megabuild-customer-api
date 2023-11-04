const buildCreateGetAllFloorByBlockIdOptions = require('../src/create-get-all-floor-by-block-id-options');

describe('buildCreateGetAllFloorByBlockIdOptions', () => {
  it('should return a function', () => {
    const createGetAllFloorByBlockIdOptions = buildCreateGetAllFloorByBlockIdOptions({
      ObjectId: jest.fn(),
    });
    expect(typeof createGetAllFloorByBlockIdOptions).toBe('function');
  });

  it('should throw an error if ObjectId is not provided', () => {
    expect(() => buildCreateGetAllFloorByBlockIdOptions({})).toThrowError('buildCreateGetAllFloorByBlockIdOptions must have ObjectId.');
  });

  it('should throw an error if blockId is not provided', () => {
    const createGetAllFloorByBlockIdOptions = buildCreateGetAllFloorByBlockIdOptions({
      ObjectId: jest.fn(),
    });
    expect(() => createGetAllFloorByBlockIdOptions({})).toThrowError('createGetAllFloorByBlockIdOptions must have blockId.');
  });

  it('should return options with filter for provided blockId', () => {
    const ObjectId = jest.fn();
    const createGetAllFloorByBlockIdOptions = buildCreateGetAllFloorByBlockIdOptions({ ObjectId });
    const blockId = '123';
    const blockObjectId = {};
    ObjectId.mockReturnValueOnce(blockObjectId);
    const result = createGetAllFloorByBlockIdOptions({ blockId });
    expect(result).toEqual({ filter: { block: blockObjectId } });
    expect(ObjectId).toHaveBeenCalledWith(blockId);
  });
});