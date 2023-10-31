module.exports = function buildTranslateGetAllBlockByProjectIdResponse
()
    {
        return function translateGetAllBlockByProjectIdResponse
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
                        throw new Error('translateGetAllBlockByProjectIdResponse must have response');
                    }
                    
                return response.toArray();
            }
    }