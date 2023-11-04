function buildGetAllFloorByBlockId({ getAllFloorByBlockIdDB }) {
    if (!getAllFloorByBlockIdDB) {
      throw new Error('buildGetAllFloorByBlockId must have getAllFloorByBlockIdDB.');
    }
    return async function getAllFloorByBlockId({ blockId }) {
      if (!blockId) {
        throw new Error('getAllFloorByBlockId must have blockId.');
      }
      const getAllFloorByBlockIdDBResult = await getAllFloorByBlockIdDB({ blockId });
      return getAllFloorByBlockIdDBResult;
    };
  }
  
  describe('buildGetAllFloorByBlockId', () => {
    const getAllFloorByBlockIdDB = jest.fn();
  
    it('should throw an error if getAllFloorByBlockIdDB is not provided', () => {
      expect(() => buildGetAllFloorByBlockId({})).toThrowError('buildGetAllFloorByBlockId must have getAllFloorByBlockIdDB.');
    });
  
    it('should return the result from getAllFloorByBlockIdDB', async () => {
      const getAllFloorByBlockIdDBResult = ['floor1', 'floor2'];
      getAllFloorByBlockIdDB.mockResolvedValue(getAllFloorByBlockIdDBResult);
  
      const getAllFloorByBlockId = buildGetAllFloorByBlockId({ getAllFloorByBlockIdDB });
      const result = await getAllFloorByBlockId({ blockId: 'block123' });
  
      expect(getAllFloorByBlockIdDB).toHaveBeenCalledWith({ blockId: 'block123' });
      expect(result).toEqual(getAllFloorByBlockIdDBResult);
    });
  
    it('should throw an error if blockId is not provided', async () => {
      const getAllFloorByBlockId = buildGetAllFloorByBlockId({ getAllFloorByBlockIdDB });
      await expect(getAllFloorByBlockId({})).rejects.toThrowError('getAllFloorByBlockId must have blockId.');
    });
  });