module.exports = function buildTranslateGetProjectItemByIdResponse
()
    {
        return function translateGetProjectItemByIdResponse
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
                        throw new Error('translateGetProjectItemByIdResponse must have response');
                    }
                
                    return response;

            }
    }