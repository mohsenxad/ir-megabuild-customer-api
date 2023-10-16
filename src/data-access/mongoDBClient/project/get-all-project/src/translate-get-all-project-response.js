module.exports = function buildTranslateGetAllProjectResponse
()
    {
        return function translateGetAllProjectResponse
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
                        throw new Error('translateGetProjectByIdResponse must have response');
                    }
                    
                return response.toArray();
            }
    }