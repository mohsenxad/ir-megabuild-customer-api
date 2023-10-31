module.exports = function buildTranslateGetAllFloorByBlockIdResponse
()
    {
        return function translateGetAllFloorByBlockIdResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('translateGetAllFloorByBlockIdResponse must have response');
                    }
                    
                return response.toArray();
            }
    }