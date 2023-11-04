const buildTranslateGetAllFloorByBlockIdResponse = require('../src/translate-get-all-floor-by-block-id-response');

describe('buildTranslateGetAllFloorByBlockIdResponse', () => {
  it('should return a function', () => {
    const translateGetAllFloorByBlockIdResponse = buildTranslateGetAllFloorByBlockIdResponse();
    expect(typeof translateGetAllFloorByBlockIdResponse).toBe('function');
  });

  it('should throw an error if response is not provided', () => {
    const translateGetAllFloorByBlockIdResponse = buildTranslateGetAllFloorByBlockIdResponse();
    expect(() => translateGetAllFloorByBlockIdResponse({})).toThrowError('translateGetAllFloorByBlockIdResponse must have response');
  });

  it('should return the response as an array', () => {
    const translateGetAllFloorByBlockIdResponse = buildTranslateGetAllFloorByBlockIdResponse();
    const response = { toArray: jest.fn().mockReturnValue(['floor1', 'floor2']) };
    const result = translateGetAllFloorByBlockIdResponse({ response });
    expect(response.toArray).toHaveBeenCalled();
    expect(result).toEqual(['floor1', 'floor2']);
  });
});